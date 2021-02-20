<template>
<div>
  <div class="box">
    <el-row :gutter="20">
      <el-col :span="18">
        <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player>
        <p style="padding-top:5px;">
          正在为您播放-{{filmFrom.filmName}}，如果无法播放，请更换视频解析线路 
        </p>
        <div style="padding-top:5px;" >
          <el-row>
              <el-col :span="equipment == true ? 8 : 3" v-for="(item, index) in tableData" :key="index">
                <a class="ab" @click="qudao(item.channelUrl)" :v-model="curl = tableData[index].channelUrl">渠道{{index+1}}</a>
              </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="qy-play-list-title">
            <h3>来源渠道</h3>
          </div>
        <div>
          <div  v-if="!equipment">
            <el-row >
              <el-col :span="8" v-for="(item, index) in sourceArr" :key="index">
                <a class="ab" @click="laiyuan(item.sid)" :title='item.sid' :v-model="csid = sourceArr[0].sid" >{{item.sid}}</a>
              </el-col>
            </el-row>
            
          </div>

          <div v-else>
            <div v-for="(item, index) in sourceArr" :key="index" style="padding-top:3px;">
              <a class="ab" @click="laiyuan(item.sid)" :title='item.sid' :v-model="csid = sourceArr[0].sid" >{{item.sid}}</a>
            </div>
          </div>
          
          <!-- <div style="padding-top:5px;">
            <el-button type="info" size="mini">优酷</el-button>
            <el-button type="info" size="mini">爱奇艺</el-button>
            <el-button type="info" size="mini">腾讯</el-button>
          </div> -->
        </div>
        <div style="padding-top:5px;" v-if="!equipment">
          <div class="qy-play-list-title">
            <h3>有关热门论坛</h3>
          </div>
          <article v-for="(item, index) in articleList" :key="index" class="media" style="padding-top:5px;">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="`https://cn.gravatar.com/avatar/${item.userId}?s=164&d=monsterid`" style="border-radius: 5px;">
                </figure>
              </div>
              <div class="media-content">
                <div class="">
                  <p class="ellipsis is-ellipsis-1">
                    <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                      <router-link :to="{name:'post-detail',params:{id:item.id}}">
                        <span class="is-size-6">{{ item.title }}</span>
                      </router-link>
                    </el-tooltip>
                  </p>
                </div>
                <nav class="level has-text-grey is-mobile  is-size-7 mt-2">
                  <div class="level-left">
                    <div class="level-left">
                      <router-link class="level-item" :to="{ path: `/member/${item.username}/home` }">
                        {{ item.alias }}
                      </router-link>
                      <span class="is-hidden-mobile">浏览:{{ item.view }}</span>
                    </div>
                  </div>
                </nav>
              </div>
              <div class="media-right" />
            </article>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="box" >
    <div style="font-size: large;">
      {{filmFrom.filmName}}<br/>
    </div>
    评分：{{filmFrom.filmRatings}}<br/>
    类型：{{filmFrom.filmType}}<br/>
    地区：{{filmFrom.filmCountry}} <br/>
    导演：{{filmFrom.filmDirector}}<br/>
    主演：{{filmFrom.filmPerformer}}<br/>
    简介：{{filmFrom.filmInfo}}<br/>
    <!-- {{filmFrom}}
    {{tableData}} -->
  </div>

  <div class="box" >
    <div style="font-size: large;">
      猜你喜欢
    </div>
    
    <el-row :gutter="20">
        <el-col :span="equipment == true ? 8 : 4" v-for="(item, index) in filmTable" :key="index" style="padding-top:10px;">
          <router-link :to="{path:'/vod/'+item.fid}">
            <div class="father">
              <span class="score">豆瓣{{item.filmRatings}}分</span>
              <img :src="item.filmCover" style="width:300px; height:200px;">
            </div>
            <div>
              <span class="cl1"><h5>{{item.filmName}}</h5></span>
              <div class="text-muted">
                主演：{{item.filmPerformer | ellipsis}}
              </div>
            </div>
            </router-link>
        </el-col>

    </el-row>

  </div>

</div>
</template>

<script>
import { userRegister } from '@/api/auth/auth'
import { getList } from '@/api/post'
import {  queryFilmByFid , queryChannel ,queryFilmType ,queryVideoUrl } from '@/api/site'
export default {
  name: 'Vod',
  data() {
    return {
      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。自动播放
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          src: '',  // 路径
          type: 'application/x-mpegURL'  // 类型
        }],
        poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true,//显示剩余时间
          fullscreenToggle: true  //全屏按钮
        }
     },
     articleList: [],
     filmFrom : {},
     tableData : [],
     sourceArr : [],
     filmTable : [],
     formInline : {},
     sourceJIeXi : {},
     csid : '',
     curl : '',
     sourceUrl : '',
     equipment : false
    }
  },
  created() {
    this.aa(this.$route.params.fid)
    this.panduan()
    this.queryChannel()
  },
  filters: {
    // 当标题字数超出时，超出部分显示’...‘。此处限制超出8位即触发隐藏效果
      ellipsis (value) {
          if (!value) return ''
          if (value.length > 7) {
              return value.slice(0, 7) + '...'
          }
          return value
      },
      ellipsisb (value) {
          if (!value) return ''
          if (value.length > 5) {
              return value.slice(0, 4) + '...'
          }
          return value
      }
  },
  methods: {
    async qudao(channurl){
      this.sourceJIeXi.sid = this.csid
      this.sourceJIeXi.channelUrl = channurl
      let { data:baseRefault} = await queryVideoUrl(this.sourceJIeXi)
      this.filmType(baseRefault);
    },
    async laiyuan(csid){
      this.sourceJIeXi.sid = csid
      this.sourceJIeXi.channelUrl = this.curl
      let { data:baseRefault} = await queryVideoUrl(this.sourceJIeXi)
      this.filmType(baseRefault);
    },
    async FilmFromSearch(ftype,performer){
        this.formInline.filmType = ftype
        this.formInline.filmPerformer = performer
        let { data:baseRefault} = await queryFilmType(this.formInline)
        this.filmTable = baseRefault.dataList;
    },
    async panduan() {
      let {data:baseRefault} = await getList(1,6)
      this.articleList = baseRefault.records
    },
    async aa(fid) {
      let { data:baseRefault} = await queryFilmByFid(fid)
      this.filmFrom = baseRefault.data;
      this.sourceArr = this.filmFrom.filmSourceReqs
      this.FilmFromSearch(baseRefault.data.filmType,baseRefault.data.filmPerformer)

      let { data:baseRefaulta} = await queryChannel()
      this.tableData = baseRefaulta.dataList;

      this.sourceJIeXi.fid = fid
      this.sourceJIeXi.sid = this.sourceArr[0].sid
      this.sourceJIeXi.channelUrl = this.tableData[0].channelUrl
      let { data:baseRefaultc} = await queryVideoUrl(this.sourceJIeXi)
      this.filmType(baseRefaultc);
    },
    async filmType(baseRefaultc){
      console.info('baseRefaultcdee', baseRefaultc)
      if (baseRefaultc.status == '1005') {
        alert('解析失败')
      } else {
        this.playerOptions.sources[0].src = baseRefaultc.data.url
        if (baseRefaultc.data.type == 'mp4'){
          this.playerOptions.sources[0].type = 'video/mp4'
        } else {
          this.playerOptions.sources[0].type = 'application/x-mpegURL'
        }
        this.equipment = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? true :  false;
      }
     
    }
    
  },
}
</script>

<style scoped>
  .video-js .vjs-big-play-button{}
  .qy-play-list-title {
    margin-bottom: 6px;
    line-height: 24px;
    font-size: 16px;
    color: #553e3e;
  }
  .father {
        width: 100%;
        height: 100%;
        background-color: #eee;
        margin: 0px auto;
        position: relative;
        overflow: hidden;
    }
    .score {
    position: absolute;
    padding: 0 5px;
    text-align: right;
    font-size: 12px;
    background-color: #d9cbcb;
  }
  .ab{ display:block; width:70px;
height:25px;
border:2px outset #eee;
background:#eee; text-align:center;
font-size:12px; color:#000; text-decoration:none; padding-top:2px; }
a:hover{ border:2px inset #eee; background:#CCCCCC; text-decoration:none; }
</style>