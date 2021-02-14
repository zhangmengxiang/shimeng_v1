#代码下拉
git pull

#打包
yarn build

#删除容器
docker rm -f shimeng_v1 &> /dev/null

#启动容器
docker run -d --restart=on-failure:5\
    -p 8080:80 \
    -v $PWD/dist:/usr/share/nginx/html \
    --name shimeng_v1 nginx