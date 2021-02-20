<template>
  <div>
    
    <div class="box">
       {{equipment}}
      <el-row>
        <el-col :span="8">
          <div style="padding-left: 5px;">
            🔔按剧情找好看的电影
          </div>
          <div class="kongzhia">
            <a @click="cc('')" title="电影天堂">全部</a>
            <a @click="cc('喜剧')" title='喜剧电影' >喜剧<i class="s-hot-icon"></i></a>
            <a @click="cc('爱情')" title='爱情电影' >爱情</a>
            <a @click="cc('动作')" title='动作电影' >动作<i class="s-hot-icon"></i></a>
            <a @click="cc('恐怖')" title='恐怖电影' >恐怖</a>
            <a @click="cc('科幻')" title='科幻电影' >科幻</a>
            <a @click="cc('剧情')" title='剧情电影' >剧情</a>
            <a @click="cc('犯罪')" title='犯罪电影' >犯罪</a>
            <a @click="cc('奇幻')" title='奇幻电影' >奇幻</a>
            <a @click="cc('战争')" title='战争电影' >战争<i class="s-hot-icon"></i></a>
            <a @click="cc('悬疑')" title='悬疑电影' >悬疑</a>
            <a @click="cc('动画')" title='动画电影' >动画</a>
            <a @click="cc('成人')" title='成人电影' >成人<i class="s-hot-icon"></i></a>
            <a @click="cc('古装')" title='古装电影' >古装</a>
            <a @click="cc('历史')" title='历史电影' >历史</a>
            <a @click="cc('惊悚')" title='惊悚电影' >惊悚</a>
          </div>
        </el-col>
        <el-col :span="8" style="border-left: 1px solid #e2e2e2;">
          <div style="padding-left: 5px;">
            🔔按年份找好看的电影
          </div>
          <div class="kongzhia">
            <a @click="dd('')" title="电影天堂">全部</a>
            <a @click="dd('2021')" title='2021电影' v-text="21 + '年'"></a>
            <a @click="dd('2020')" title='2020电影' v-text="20 + '年'"></a>
            <a @click="dd('2019')" title='2019电影' v-text="19 + '年'"></a>
            <a @click="dd('2018')" title='2018电影' v-text="18 + '年'"></a>
            <a @click="dd('2017')" title='2017电影' v-text="17 + '年'"></a>
            <a @click="dd('2016')" title='2016电影' v-text="16 + '年'"></a>
            <a @click="dd('2015')" title='2015电影' v-text="15 + '年'"></a>
            <a @click="dd('2014')" title='2014电影' v-text="14 + '年'"></a>
            <a @click="dd('2013')" title='2013电影' v-text="13 + '年'"></a>
            <a @click="dd('2012')" title='2012电影' v-text="12 + '年'"></a>
            <a @click="dd('2011')" title='2011电影' v-text="11 + '年'"></a>
            <a @click="dd('2011')" title='2011电影' v-text="10 + '年'"></a>
          </div>
        </el-col>
        <el-col :span="8" style="border-left: 1px solid #e2e2e2;">
          <div style="padding-left: 5px;">
            🔔按地区找好看的电影
          </div>
          <div class="kongzhia">
            <a  @click="ee('')" title="电影天堂">全部</a>
            <a  @click="ee('美国')" title='美国电影'>美国</a>
            <a  @click="ee('大陆')" title='大陆电影'>大陆</a>
            <a  @click="ee('中国香港')" title='中国香港电影'>中国香港</a>
            <a  @click="ee('韩国')" title='韩国电影'>韩国</a>
            <a  @click="ee('日本')" title='日本电影'>日本</a>
            <a  @click="ee('法国')" title='法国电影'>法国</a>
            <a  @click="ee('英国')" title='英国电影'>英国</a>
            <a  @click="ee('德国')" title='德国电影'>德国</a>
            <a  @click="ee('中国台湾')" title='中国台湾电影'>中国台湾</a>
            <a  @click="ee('泰国')" title='泰国电影'>泰国</a>
            <a  @click="ee('印度')" title='印度电影'>印度</a>
          </div>
        </el-col>
      </el-row>
    </div>


    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          
          <el-tab-pane label="电影专区" name="latest">
            <el-row :gutter="20" >

              <el-col :span="equipment == true ? 8 : 4" v-for="(item, index) in tableData" :key="index" style="padding-top:10px;">
                <router-link :to="{path:'/vod/'+item.fid}">
                  <div class="father">
                    
                    <span class="score">豆瓣{{item.filmRatings}}分</span>
                    <img :src="item.filmCover" style="width:300px; height:200px;">
                  </div>
                  <div>
                    <span class="cl1"><h5>{{item.filmName}}</h5></span>
                    <div class="text-muted" v-if="!equipment">
                      主演：{{item.filmPerformer | ellipsis}}
                    </div>
                    <div class="text-muted" v-else>
                      主演：{{item.filmPerformer | ellipsisb}}
                    </div>
                  </div>
                  </router-link>
              </el-col>
          </el-row>

           <div style="padding-left: 30%;padding-top: 10px;">
             <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[24, 30, 36, 42]"
              :page-size="24"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totalCount">
            </el-pagination>
           </div>


          <!-- {{tableData}} -->
         
          </el-tab-pane>

          <el-tab-pane label="系统论坛" name="">
            <el-row :gutter="20">
              <el-col :span="equipment == false ? 16 : 20">
                <article v-for="(item, index) in articleList" :key="index" class="media">
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

                          <span class="mr-1">
                            发布于:{{ dayjs(item.createTime).format("YYYY/MM/DD") }}
                          </span>

                          <span
                            v-for="(tag, index) in item.tags"
                            :key="index"
                            class="tag is-hidden-mobile is-success is-light mr-1"
                          >
                            <router-link :to="{ name: 'tag', params: { name: tag.name } }">
                              {{ "#" + tag.name }}
                            </router-link>
                          </span>

                          <span class="is-hidden-mobile">浏览:{{ item.view }}</span>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div class="media-right" />
                </article>
              </el-col>
              <el-col :span="8" v-if="!equipment">
                <div class="column">
                  <CardBar></CardBar>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
      
      
      <!--分页-->
      <div class="box">

        <div style="padding-left: 25%;padding-top: 10px;" v-if="!equipment">
          <pagination
            v-show="page.total > 0"
            :total="page.total"
            :page.sync="page.current"
            :limit.sync="page.size"
            @pagination="init"
          />
        </div>

        <div v-else>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="24"
            layout="total, prev, pager, next"
            :total="totalCount">
          </el-pagination>
        </div>

      </div>
      
    </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/post'
import Pagination from '@/components/Pagination'
import {  queryfilmPage  } from '@/api/site'
import CardBar from "@/views/card/CardBar"

export default {
  name: 'TopicList',
  components: { Pagination , CardBar },
  data() {
    return {
      activeName: 'latest',
      articleList: [],
      formInline : {
        "pageNum" : 1,
        "pageSize" : 24
      },
      page: {
        current: 1,
        size: 10,
        total: 0,
        tab: 'latest'
      },
      tableData : [],
      totalCount : 0,
      equipment : false //false 为电脑 
    }
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
  created() {
    this.FilmFromSearch()
    this.panduan()
    this.equipment = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? true :  flase;
  },
  methods: {
    async panduan() {
      let {data:baseRefault} = await getList(1,6)
      this.articleList = baseRefault.records
    },
    async FilmFromSearch(){
        let { data:baseRefault} = await queryfilmPage(this.formInline)
        this.tableData = baseRefault.dataList;
        this.totalCount = baseRefault.totalCount
    },
    handleClick(tab) {
      this.init(tab.name)
    },
     handleSizeChange(val) {
      this.formInline.pageNum = 1
      this.formInline.pageSize = val
      this.FilmFromSearch()
    },
    handleCurrentChange(val) {
      this.formInline.pageNum = val
      this.FilmFromSearch()
    },
    cc(type){
      this.formInline.filmType = type
      this.FilmFromSearch()
    },
    dd(time){
      this.formInline.filmShowTime = time
      this.FilmFromSearch()
    },
    ee(addr) {
      this.formInline.filmCountry = addr
      this.FilmFromSearch()
    }
  }
}
</script>

<style scoped>
   .score {
    position: absolute;
    padding: 0 5px;
    text-align: right;
    font-size: 12px;
    background-color: #d9cbcb;
  }
  .text-muted {
    margin-top: 5px;
    font-size: 12px;
    overflow: hidden;
  }
  .father {
        width: 100%;
        height: 100%;
        background-color: #eee;
        margin: 0px auto;
        position: relative;
        overflow: hidden;
    }
  .kongzhia a {
    padding-left: 5px;
    font-weight: 400;
    margin-top: 5px;
  }
</style>
