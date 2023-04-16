# 发布流程
# 注意：本流程将直接发布至github-pages

# 提前填写commit信息
read -p "请输入commit文本：" msg
mv /Users/weiwenxiang/Blog/vuepress/docs/.vuepress/dist/.git /Users/weiwenxiang/Blog/vuepress/
# 打包流程
vuepress build docs
# 进入打包之后文件夹
cd docs/.vuepress/dist
echo 'www.techtalks.cn' > CNAME
# 提交流程
mv /Users/weiwenxiang/Blog/vuepress/.git /Users/weiwenxiang/Blog/vuepress/docs/.vuepress/dist/
#git init
git add -A
git commit -m "$msg"

sudo git push -f git@github.com:TechTalksHub/techtalkshub.github.io.git main

cd -
