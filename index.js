//http
const http = require("http");
const fs = require("fs");

const puppeteer = require("puppeteer");

async function main() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    // go to github front page
    await page.goto(
      "https://kamigame.jp/onepiece-bountyrush/page/263853947595306109.html#%E6%9C%80%E5%BC%B7%E3%82%AD%E3%83%A3%E3%83%A9%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0:~:text=RED%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%AF%E3%82%B9-,S,-%E4%BA%BA%E7%8D%A3%E3%82%AB%E3%82%A4%E3%83%89%E3%82%A6"
    );
    // wait for page to render
    await new Promise((res) => setTimeout(res, 500));

    await page.setViewport({
      width: 800,
      height: 800,
    });
    // take a screenshot
    await page.screenshot({ path: "./public/screenshot.png" });

    await browser.close();

    /*
    //画像関係
    var server = http.createServer((req, res) => {
      var url =
        "public" + (req.url.endsWith("/") ? req.url + "index.html" : req.url);
      if (fs.existsSync(url)) {
        fs.readFile(url, (err, data) => {
          if (!err) {
            res.writeHead(200, { "Content-Type": getType(url) });
            res.end(data);
          } else {
            res.statusCode = 500;
            res.end();
          }
        });
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
    */

    /*
    var port = 8080;
    server.listen(port, () => {
      console.log(`Server listening on ${port}`);
    });

    //kill（バグ防止）
    //execSync('kill 1')
    */
  } catch (error) {
    console.error(error);
  }
}
main();
/*
function getType(_url) {
  var types = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
  };
  for (var key in types) {
    if (_url.endsWith(key)) {
      return types[key];
    }
  }
  return "text/plain";
}
*/
