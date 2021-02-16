<template>
  <div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        检索到 <code>{{ totalCount }}</code>
        条关于 <code class="has-text-info">{{ query.filmName }}</code> 的记录
      </div>
      <div>
        <el-row :gutter="20">

              <el-col :span="4" v-for="(item, index) in tableData" :key="index" style="padding-top:10px;">
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

      <!--分页-->
      <pagination
        v-show="query.total > 0"
        :total="query.total"
        :page.sync="query.pageNum"
        :limit.sync="query.pageSize"
        @pagination="fetchList"
      />
    </el-card>
  </div>
</template>

<script>
import { searchByKeyword } from '@/api/search'
import {  queryfilmPage  } from '@/api/site'
import Pagination from '@/components/Pagination'

export default {
  name: 'Search',
  components: { Pagination },
  data() {
    return {
      list: [],
      query: {
        filmName: this.$route.query.key,
        pageNum: 1,
        pageSize: 24
      },
      tableData : [],
      totalCount : 0
    }
  },
  created() {
    this.queryfilmPage()
  },
  filters: {
    // 当标题字数超出时，超出部分显示’...‘。此处限制超出8位即触发隐藏效果
      ellipsis (value) {
          if (!value) return ''
          if (value.length > 8) {
              return value.slice(0, 8) + '...'
          }
          return value
      }
  },
  methods: {
    async queryfilmPage(){
      let { data:baseRefault} = await queryfilmPage(this.query)
      this.tableData = baseRefault.dataList;
      this.totalCount = baseRefault.totalCount
    }
    // fetchList() {
    //   searchByKeyword(this.query).then(value => {
    //     const { data } = value
    //     this.list = data.records
    //     this.query.total = data.total
    //     this.query.pageSize = 24
    //     this.query.pageNum = 1
    //   })
    // }
  }
}
</script>

<style scoped>
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
</style>
