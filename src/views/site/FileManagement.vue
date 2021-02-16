<template>
  <div> 
    <div v-if="flag">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="电影名称">
            <el-input v-model="formInline.filmName" placeholder="请输入电影名称"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="FilmFromSearch">查询</el-button>
            <el-button type="success" @click="savefilm">添加影视</el-button>
        </el-form-item>
         <div style="padding-top:10px;">
                <el-radio v-model="radioFromSearch" label="美国">美国</el-radio>
                <el-radio v-model="radioFromSearch" label="大陆">大陆</el-radio>
                <el-radio v-model="radioFromSearch" label="中国香港">中国香港</el-radio>
                <el-radio v-model="radioFromSearch" label="韩国">韩国</el-radio>
                <el-radio v-model="radioFromSearch" label="日本">日本</el-radio>
                <el-radio v-model="radioFromSearch" label="法国">法国</el-radio>
                <el-radio v-model="radioFromSearch" label="英国">英国</el-radio>
                <el-radio v-model="radioFromSearch" label="德国">德国</el-radio>
                <el-radio v-model="radioFromSearch" label="中国台湾">中国台湾</el-radio>
                <el-radio v-model="radioFromSearch" label="泰国">泰国</el-radio>
                <el-radio v-model="radioFromSearch" label="印度">印度</el-radio>
            </div>
            <div style="padding-top:10px;">
              <el-checkbox-group v-model="checkListFromSearch">
                <el-checkbox label="喜剧"></el-checkbox>
                <el-checkbox label="爱情"></el-checkbox>
                <el-checkbox label="动作"></el-checkbox>
                <el-checkbox label="恐怖"></el-checkbox>
                <el-checkbox label="科幻"></el-checkbox>
                <el-checkbox label="剧情"></el-checkbox>
                <el-checkbox label="犯罪"></el-checkbox>
                <el-checkbox label="奇幻"></el-checkbox>
                <el-checkbox label="战争"></el-checkbox>
                <el-checkbox label="悬疑"></el-checkbox>
                <el-checkbox label="动画"></el-checkbox>
                <el-checkbox label="成人"></el-checkbox>
                <el-checkbox label="古装"></el-checkbox>
                <el-checkbox label="历史"></el-checkbox>
                <el-checkbox label="惊悚"></el-checkbox>
              </el-checkbox-group>
            </div>
      </el-form>
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="filmName"
            label="电影名称"
            width="120">
        </el-table-column>
        <el-table-column
            prop="filmRatings"
            label="电影评分"
            width="80">
        </el-table-column>
        <el-table-column
            prop="filmDirector"
            label="导演名称"
            width="80">
        </el-table-column>
        
        <el-table-column
            prop="filmPerformer"
            label="演员名称"
            width="120">
        </el-table-column>
        <el-table-column
            prop="filmCountry"
            label="电影国别"
            width="80">
        </el-table-column>
        
        <el-table-column
            prop="filmType"
            label="电影类型"
            width="120">
        </el-table-column>

         <el-table-column
            prop="filmSource"
            label="电影来源"
            width="120">
        </el-table-column>

        <el-table-column
            prop="filmShowTime"
            label="上映时间"
            width="120">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>

        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
        <!-- {{formInline}}
        {{tableData}} -->
        <!-- {{filmFrom}} -->

        <el-dialog
        title="修改电影"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        
       
        
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="savechannelFrom">确 定</el-button>
        </span>
        </el-dialog>

    </div>
    <div v-else>
      <div class=".demo5">电影添加</div>

     <el-form :inline="true" :model="filmFrom" class="demo-form-inline">
        <el-form-item label="电影名称">
            <el-input v-model="filmFrom.filmName" placeholder="请输入电影名称"></el-input>
            </el-form-item>
            <el-form-item label="电影评分">
            <el-input v-model="filmFrom.filmRatings" placeholder="请输入电影评分"></el-input>
            </el-form-item>
            <br>
            
             <el-form-item label="导演名称">
            <el-input v-model="filmFrom.filmDirector" placeholder="请输入导演名称"></el-input>
            </el-form-item>
            <el-form-item label="上映时间">
              <el-date-picker
                v-model="filmFrom.filmShowTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
           
            <br>

            <el-form-item label="演员名称">
              <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClosea(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
      </el-form>
      <div>
          <span >封面图片路径:</span>
               <el-input placeholder="请输入封面图片路径" v-model="filmFrom.filmCover" style="padding-top:15px;">
                <template slot="prepend">Http://</template>
              </el-input>
      </div>
    
    <div style="padding-top:15px;">
      视频URL:
      <div style="margin-top: 15px;" v-for="(item, index) in ddddata" :key="index">
        <el-input placeholder="请输入视频URL" v-model="ddddata[index].filmUrl" class="input-with-select">
          <el-select v-model="ddddata[index].sid" slot="prepend" placeholder="请选择" >
            <el-option label="腾讯" value="腾讯"></el-option>
            <el-option label="爱奇艺" value="爱奇艺"></el-option>
            <el-option label="优酷" value="优酷"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-circle-plus" @click="upNumber"></el-button>
          <el-button slot="append" icon="el-icon-remove" @click="npNumber(ddddata[index])"></el-button>
        </el-input>
      </div>
    </div>
    
   <div style="padding-top:10px;">
     电影简介
     <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入电影简介......"
                v-model="filmFrom.filmInfo">
              </el-input>
   </div>

        <div style="padding-top:10px;">
              电影国别
                <el-radio v-model="radio" label="美国">美国</el-radio>
                <el-radio v-model="radio" label="大陆">大陆</el-radio>
                <el-radio v-model="radio" label="中国香港">中国香港</el-radio>
                <el-radio v-model="radio" label="韩国">韩国</el-radio>
                <el-radio v-model="radio" label="日本">日本</el-radio>
                <el-radio v-model="radio" label="法国">法国</el-radio>
                <el-radio v-model="radio" label="英国">英国</el-radio>
                <el-radio v-model="radio" label="德国">德国</el-radio>
                <el-radio v-model="radio" label="中国台湾">中国台湾</el-radio>
                <el-radio v-model="radio" label="泰国">泰国</el-radio>
                <el-radio v-model="radio" label="印度">印度</el-radio>
            </div>



      <div style="padding-top:10px;">
      电影类型<br>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="喜剧"></el-checkbox>
          <el-checkbox label="爱情"></el-checkbox>
          <el-checkbox label="动作"></el-checkbox>
          <el-checkbox label="恐怖"></el-checkbox>
          <el-checkbox label="科幻"></el-checkbox>
          <el-checkbox label="剧情"></el-checkbox>
          <el-checkbox label="犯罪"></el-checkbox>
          <el-checkbox label="奇幻"></el-checkbox>
          <el-checkbox label="战争"></el-checkbox>
          <el-checkbox label="悬疑"></el-checkbox>
          <el-checkbox label="动画"></el-checkbox>
          <el-checkbox label="成人"></el-checkbox>
          <el-checkbox label="古装"></el-checkbox>
          <el-checkbox label="历史"></el-checkbox>
          <el-checkbox label="惊悚"></el-checkbox>
        </el-checkbox-group>
      </div>
   
               
           <!-- {{filmupdate}} -->
            <div style="padding-top:10px;" v-if="!filmupdate">
              <el-button type="primary" @click="onSubmit">添加电影</el-button>
              <el-button type="success" @click="savefilm">回退</el-button>
            </div>

            <div style="padding-top:10px;" v-else>
              <el-button type="primary" @click="updateFilm">修改电影</el-button>
              <el-button type="success" @click="savefilm">回退</el-button>
            </div>
            
            <!-- {{checkList}}
            {{radio}}
            {{select}}
            {{input3}}
            {{ddddata}}

            {{filmFrom}}
            {{dynamicTags}} -->
    <div>
      
          
    </div>
      
    </div>
     
  </div>
    
</template>

<script>
import { savefilm , queryfilmPage ,delfilm , queryFilmByFid ,updateFilm } from '@/api/site'
export default {
    name: "FileManagement",
     data() {
        return {
         tableData: [],
          dialogVisible: false,
          chann: {
          },
          formInline: {
            "pageNum" : 1,
            "pageSize" : 10
          },
          flag : true,
          options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
            value1: [],
            input3: '',
            select: '',
            number : 1,
            dynamicTags: [],
            inputVisible: false,
            inputValue: '',
            textarea : '',
            filmFrom : {},
            checkList: [],
            checkListFromSearch : [],
            radio : '',
            radioFromSearch : '',
            ddddata: [
              {
                sid : "",
                filmUrl : ""
              }
            ],
            filmupdate : false,
            currentPage4: 4,
            totalCount : 0
        }
      },
      created() {
        this.FilmFromSearch()
      },
      methods: {
        upNumber(){
          let ee = {
                sid : "",
                filmUrl : ""
              };
          this.ddddata.push(ee)
        },
        npNumber(dd){
          this.ddddata.splice(this.ddddata.indexOf(dd),1);
        },
        async FilmFromSearch(){
          // 类型
          var leixing = ''
          this.checkListFromSearch.forEach(item =>{
            leixing += item + ",";
          })
          leixing = leixing.substr(0,leixing.length-1)
          this.formInline.filmType = leixing 

          // 处理国别
          this.formInline.filmCountry = this.radioFromSearch

          let { data:baseRefault} = await queryfilmPage(this.formInline)
          this.tableData = baseRefault.dataList;
          
          this.totalCount = baseRefault.totalCount
          this.filmFrom = {}
        },
        async handleEdit(index, row) {
          this.flag = !this.flag
          this.filmupdate = true;
          console.log(row.fid);
          let { data:baseRefault} = await queryFilmByFid(row.fid)
          this.filmFrom = baseRefault.data;
          console.log(baseRefault.data);
          //演员切割
          this.dynamicTags = []
          var arr = baseRefault.data.filmPerformer.split(',')
          arr.forEach(item =>{
            this.dynamicTags.push(item)
          })
          //国别 
          this.radio = baseRefault.data.filmCountry
          //类型
          this.checkList = []
         var carr =  baseRefault.data.filmType.split(',')
         carr.forEach(item =>{
            this.checkList.push(item)
          })

          // 视频URL
          this.ddddata = baseRefault.data.filmSourceReqs
        },
        async handleDelete(index, row) {
          console.log(row.fid);
          let { data:baseRefault} = await delfilm(row.fid)
          if (baseRefault.status == '1005') {
            this.$message.error(baseRefault.message);
          }else {
            this.$message({
              message: baseRefault.message,
              type: 'success'
            });
            this.FilmFromSearch()
          }
        },
        savefilm(){
          this.filmFrom = {}
          this.dynamicTags = []
          this.filmupdate = false
          this.flag = !this.flag
          this.FilmFromSearch()
        },
        async savechannelFrom(){
          let { data:baseRefault} = await saveChannel(this.chann)
          if (baseRefault.status == '1005') {
            this.$message.error(baseRefault.message);
          }else {
            this.$message({
              message: baseRefault.message,
              type: 'success'
            });
            this.dialogVisible = false
            this.chann = {}
            this.FilmFromSearch()
            this.savefilm()
          }
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        async onSubmit() {
          // 处理
          // 演员名称
          var yanyuan = ''
          this.dynamicTags.forEach(item =>{
            yanyuan += item + ",";
          })
          yanyuan = yanyuan.substr(0,yanyuan.length-1)
          this.filmFrom.filmPerformer = yanyuan

          // 来源
          this.filmFrom.filmSourceReqs = this.ddddata

          // 国别
          this.filmFrom.filmCountry = this.radio

          // 类型
          var leixing = ''
          this.checkList.forEach(item =>{
            leixing += item + ",";
          })
          leixing = leixing.substr(0,leixing.length-1)
          this.filmFrom.filmType = leixing 
          
          //时间处理
          var time = this.formatDateTime(this.filmFrom.filmShowTime);
          this.filmFrom.filmShowTime = time

          // 添加影视
          let { data:baseRefault} = await savefilm(this.filmFrom)
          if (baseRefault.status == '1005') {
            this.$message.error(baseRefault.message);
          }else {
            this.$message({
              message: baseRefault.message,
              type: 'success'
            });
            this.FilmFromSearch()
            this.flag = !this.flag
          }
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.formInline.pageNum = 1
          this.formInline.pageSize = val
          this.FilmFromSearch()
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.formInline.pageNum = val
          this.FilmFromSearch()
        },
      formatDateTime(timeStamp) { 
            var date = new Date();
            date.setTime(timeStamp);
            var y = date.getFullYear();    
            var m = date.getMonth() + 1;    
            m = m < 10 ? ('0' + m) : m;    
            var d = date.getDate();    
            d = d < 10 ? ('0' + d) : d;    
            var h = date.getHours();  
            h = h < 10 ? ('0' + h) : h;  
            var minute = date.getMinutes();  
            var second = date.getSeconds();  
            minute = minute < 10 ? ('0' + minute) : minute;    
            second = second < 10 ? ('0' + second) : second;   
            return y + '-' + m + '-' + d;    
        },  
        handleClosea(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      async updateFilm(){
         // 处理
          // 演员名称
          var yanyuan = ''
          this.dynamicTags.forEach(item =>{
            yanyuan += item + ",";
          })
          yanyuan = yanyuan.substr(0,yanyuan.length-1)
          this.filmFrom.filmPerformer = yanyuan

          // 来源
          this.filmFrom.filmSourceReqs = this.ddddata

          // 国别
          this.filmFrom.filmCountry = this.radio

          // 类型
          var leixing = ''
          this.checkList.forEach(item =>{
            leixing += item + ",";
          })

          leixing = leixing.substr(0,leixing.length-1)
          this.filmFrom.filmType = leixing 
          console.info('time长度',  this.filmFrom.filmShowTime.length)
          if (this.filmFrom.filmShowTime.length != 10) {
            console.info('时间变了')
             //时间处理
              var time = this.formatDateTime(this.filmFrom.filmShowTime);
              console.info('修改后time',  time)
              this.filmFrom.filmShowTime = time
          } 
          //修改影视
          let { data:baseRefault} = await updateFilm(this.filmFrom)
          if (baseRefault.status == '1005') {
            this.$message.error(baseRefault.message);
          }else {
            this.$message({
              message: baseRefault.message,
              type: 'success'
            });
            this.FilmFromSearch()
            this.flag = !this.flag
          }

      }
  },
}
</script>

<style>
 .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

</style>