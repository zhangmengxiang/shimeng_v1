<template>
  <div style="width: 100%; bottomMargin:0">
        <!--静态html资源-->
        <div style="width: 100%;height: 620px;">
        <iframe src="/static/index.html" scrolling="auto" frameborder="0" style="width: 100%;height: 600px;"
        overfolw="auto"></iframe>
        </div>

        <div style="padding-left:80px;">
            <el-row :gutter="20">
              <el-col :span="6">
                <dl>
                	<dt><a href="http://www.iqiyi.com/" target="_blank"><img src="/static/2/aqylogo.png" /></a></dt>
                    <dd>爱奇艺视频</dd>
               </dl>
              </el-col>
              <el-col :span="6">
                <dl>
                <dt><a href="http://www.youku.com/" target="_blank"><img src="/static/2/youkulogo.png" /></a></dt>
                    <dd>优酷视频</dd>
                </dl> 
              </el-col>
              <el-col :span="6"><dl>
                	<dt><a href="http://www.le.com/" target="_blank"><img src="/static/2/letvlogo.png" /></a></dt>
                    <dd>乐视TV视频</dd>
                </dl></el-col>
              <el-col :span="6">
                			<dl>
                	<dt><a href="http://v.qq.com/" target="_blank"><img src="/static/2/qqlogo.png" /></a></dt>
                    <dd>腾讯视频</dd>
                </dl>
              </el-col>
            </el-row>

          <el-row :gutter="20">
            <el-col :span="6"><dl>
                	<dt><a href="http://www.tudou.com/" target="_blank"><img src="/static/2/tudoulogo.png" /></a></dt>
                    <dd>土豆视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><a href="http://tv.sohu.com/" target="_blank"><img src="/static/2/sohulogo.png" /></a></dt>
                    <dd>搜狐视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><a href="http://www.56.com/" target="_blank"><img src="/static/2/56logo.png" /></a></dt>
                    <dd>56视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><a href="http://www.ku6.com/" target="_blank"><img src="/static/2/ku6logo.png" /></a></dt>
                    <dd>酷6视频</dd>
                </dl></el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6"><dl>
                	<dt><a href="http://www.wasu.cn/" target="_blank"><img src="/static/2/wasulogo.png" /></a></dt>
                    <dd>WASU华数视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><a href="http://www.yinyuetai.com/" target="_blank"><img src="/static/2/yinyuetailogo.png" /></a></dt>
                    <dd>音悦台MV</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><a href="http://www.mgtv.com/" target="_blank"><img src="/static/2/hunantvlogo.png" /></a></dt>
                    <dd>芒果TV视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><a href="http://video.sina.com.cn/" target="_blank"><img src="/static/2/sinalogo.png" /></a></dt>
                    <dd>新浪视频</dd>
                </dl></el-col>
          </el-row>


          <el-row :gutter="20">
            <el-col :span="6"><dl>
                	<dt><a href="http://v.163.com/" target="_blank"><img src="/static/2/163logo.png" /></a></dt>
                    <dd>网易视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><img src="/static/2/6logo.png" /></dt>
                    <dd>6间房视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><img src="/static/2/kugoulogo.png" /></dt>
                    <dd>酷狗MV视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><img src="/static/2/baomihualogo.png" /></dt>
                    <dd>爆米花视频</dd>
                </dl></el-col>
          </el-row>


          <el-row :gutter="20">
            <el-col :span="6"><dl>
                	<dt><img src="/static/2/ifenglogo.png" /></dt>
                    <dd>凤凰视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><img src="/static/2/kankannewslogo.png" /></dt>
                    <dd>看看新闻网视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><img src="/static/2/mtimelogo.png" /></dt>
                    <dd>时光网视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><img src="/static/2/kuwologo.png" /></dt>
                    <dd>酷我音乐MV视频</dd>
                </dl></el-col>
          </el-row>


          <el-row :gutter="20">
            <el-col :span="6"><dl>
                	<dt><img src="/static/2/1905logo.png" /></dt>
                    <dd>1905电影网视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><img src="/static/2/tangdoulogo.png" /></dt>
                    <dd>糖豆视频</dd>
                </dl></el-col>
            <el-col :span="6"><dl>
                	<dt><img src="/static/2/cntvlogo.png" /></dt>
                    <dd>央视网</dd>
                </dl></el-col>
            <el-col :span="6"></el-col>
          </el-row>
          <br>
              <div class="wait">本站所有接口均来至互联网仅提供本地测试使用，请勿用于任何商业用途，否则后果自负。 </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>