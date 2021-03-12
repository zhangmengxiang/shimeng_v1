<template>
  <div>
        <div v-if="falg">
            <el-form :inline="true" :model="tyFrom" class="demo-form-inline">
                <el-form-item label="电视剧名称">
                    <el-input v-model="tyFrom.filmName" placeholder="请输入电视剧名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="tyFromSearch">查询</el-button>
                    <el-button type="success" @click="savetyPlay">添加电视剧</el-button>
                </el-form-item>
                <div style="padding-top:10px;">
                        <el-radio v-model="tyFrom.radioFromSearch" label="美国">美国</el-radio>
                        <el-radio v-model="tyFrom.radioFromSearch" label="大陆">大陆</el-radio>
                        <el-radio v-model="tyFrom.radioFromSearch" label="中国香港">中国香港</el-radio>
                        <el-radio v-model="tyFrom.radioFromSearch" label="韩国">韩国</el-radio>
                        <el-radio v-model="tyFrom.radioFromSearch" label="日本">日本</el-radio>
                        <el-radio v-model="tyFrom.radioFromSearch" label="法国">法国</el-radio>
                        <el-radio v-model="tyFrom.radioFromSearch" label="英国">英国</el-radio>
                        <el-radio v-model="tyFrom.radioFromSearch" label="德国">德国</el-radio>
                        <el-radio v-model="tyFrom.radioFromSearch" label="中国台湾">中国台湾</el-radio>
                        <el-radio v-model="tyFrom.radioFromSearch" label="泰国">泰国</el-radio>
                        <el-radio v-model="tyFrom.radioFromSearch" label="印度">印度</el-radio>
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
                        label="电视剧名称"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="filmRatings"
                        label="电视剧评分"
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
                        label="电视剧国别"
                        width="80">
                    </el-table-column>
                    
                    <el-table-column
                        prop="filmType"
                        label="电视剧类型"
                        width="120">
                    </el-table-column>

                    <el-table-column
                        prop="filmSource"
                        label="电视剧来源"
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
        </div>

        <div v-else>
            <div class=".demo5">电视剧添加</div>     
            <el-form :inline="true" :model="tyPlay" class="demo-form-inline">
                <el-form-item label="电视剧名称">
                    <el-input v-model="tyPlay.tvName" placeholder="请输入电视剧名称"></el-input>
                    </el-form-item>
                    <el-form-item label="电视剧评分">
                    <el-input v-model="tyPlay.tvScore" placeholder="请输入电视剧评分"></el-input>
                    </el-form-item>
                    <el-form-item label="电视剧ID">
                    <el-input v-model="tyPlay.channelUrlId" placeholder="电视剧ID"></el-input>
                    </el-form-item>
                    <br>
                    
                    <el-form-item label="导演名称">
                    <el-input v-model="tyPlay.director" placeholder="请输入导演名称"></el-input>
                    </el-form-item>
                    <el-form-item label="上映时间">
                    <el-date-picker
                        v-model="tyPlay.showTime"
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
                    <el-input placeholder="请输入封面图片路径" v-model="tyPlay.coverImagePath" style="padding-top:15px;">
                        <template slot="prepend">Http://</template>
                    </el-input>
            </div>
            
        <div style="padding-top:10px;">
            电视剧简介
            <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入电视剧简介......"
                        v-model="tyPlay.tvIntroduction">
                    </el-input>
        </div>

        <div style="padding-top:10px;">
            电视剧国别
                <el-radio v-model="tyPlay.tvCountries" label="美国">美国</el-radio>
                <el-radio v-model="tyPlay.tvCountries" label="大陆">大陆</el-radio>
                <el-radio v-model="tyPlay.tvCountries" label="中国香港">中国香港</el-radio>
                <el-radio v-model="tyPlay.tvCountries" label="韩国">韩国</el-radio>
                <el-radio v-model="tyPlay.tvCountries" label="日本">日本</el-radio>
                <el-radio v-model="tyPlay.tvCountries" label="法国">法国</el-radio>
                <el-radio v-model="tyPlay.tvCountries" label="英国">英国</el-radio>
                <el-radio v-model="tyPlay.tvCountries" label="德国">德国</el-radio>
                <el-radio v-model="tyPlay.tvCountries" label="中国台湾">中国台湾</el-radio>
                <el-radio v-model="tyPlay.tvCountries" label="泰国">泰国</el-radio>
                <el-radio v-model="tyPlay.tvCountries" label="印度">印度</el-radio>
            </div>

            <div style="padding-top:10px;">
            电视剧类型<br>
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
   
            {{tyPlay}}
            <div style="padding-top:10px;">
              <el-button type="primary" @click="onSubmit">添加电视剧</el-button>
            </div>

        </div>
    </div>
</template>

<script>
import { addPlay , queryPlay } from '@/api/play'
export default {
    name: "TVPlayManagement",
    data() {
        return {
            tyFrom : {  // 查询条件
                pageNum : 1,
                pageSize : 10
            },
            checkListFromSearch : [], //查询条件 类型
            tableData : [], //电视剧表格
            tyPlay: {}, //电视剧添加
            dynamicTags: [], // 演员
            inputVisible: false, //控制标签
            inputValue: '', // 标签值
            ddddata: [
              {
                sid : "",
                filmUrl : ""
              }
            ], //视频url存储,
            checkList : [], //添加电视剧类型,
            falg : true // 默认查询页面
        }
    },
    created() {
        this.tyFromSearch()
    },
    methods: {
        // 电视剧查询方法
        async tyFromSearch () {
            let { data:baseRefault} = await queryPlay(this.tyFrom)
            this.tableData = baseRefault.dataList;
        },
        // 添加电视剧
        async savetyPlay(){
            this.falg = false
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.tyFrom.pageNum = 1
          this.tyFrom.pageSize = val
          this.FilmFromSearch()
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.tyFrom.pageNum = val
          this.tyFromSearch()
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
        // 添加电视剧
        async onSubmit () {
            // 演员名称
            var yanyuan = ''
            this.dynamicTags.forEach(item =>{
                yanyuan += item + ",";
            })
            yanyuan = yanyuan.substr(0,yanyuan.length-1)
            this.tyPlay.performer = yanyuan

            // 类型
            var leixing = ''
            this.checkList.forEach(item =>{
                leixing += item + ",";
            })
            leixing = leixing.substr(0,leixing.length-1)
            this.tyPlay.tvType = leixing 

            // 来源
           // this.tyPlay.filmSourceReqs = this.ddddata

            // 时间处理
            var time = this.formatDateTime(this.tyPlay.showTime);
            this.tyPlay.showTime = time
            
            let { data:baseRefault} = await addPlay(this.tyPlay)
            if (baseRefault.status == '1005') {
                this.$message.error(baseRefault.message);
            }else {
                this.$message({
                message: baseRefault.message,
                type: 'success'
                });
                this.tyFromSearch()
                this.flag = !this.flag
            }
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
    },
}
</script>

<style>

</style>