#!/user/bin/env sh

# 确保脚本遇到抛出的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成静态文件的文件夹
cd docs/.vuepress/dist

# 初始化

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:luwenhai99999/blog.git
git push -u origin main
cd -

