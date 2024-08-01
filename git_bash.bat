@echo off
cd ./public

git remote rm origin
git remote add origin https://github.com/SUKEsann2000/BountyNode.git

git add .
git commit -m "update_image"

git push origin main