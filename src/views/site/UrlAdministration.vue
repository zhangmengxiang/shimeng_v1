<template>
  <div>
      <el-button type="success" @click="savechannel">添加解析渠道</el-button>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="channelName"
        label="解析名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="channelUrl"
        label="解析路径"
        width="200">
      </el-table-column>
      
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="修改时间"
        width="150">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-dialog
     title="添加渠道"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      
      <el-form ref="form" :model="chann" label-width="80px">
        <el-form-item label="渠道名称">
          <el-input v-model="chann.channelName"></el-input>
        </el-form-item>
        <el-form-item label="渠道URL">
          <el-input v-model="chann.channelUrl"></el-input>
        </el-form-item>
      </el-form>
      
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="savechannelFrom">确 定</el-button>
      </span>
    </el-dialog>

  </div>
    
</template>

<script>
import { saveChannel , queryChannel ,delChannel } from '@/api/site'
export default {
    name: "UrlAdministration",
     data() {
        return {
         tableData: [],
          dialogVisible: false,
          chann: {
          }
        }
      },
      created() {
        let asc = sessionStorage.getItem('site')
        if (asc != 'adminh871heu81h8d5fhsuniczb8da5feadhduaih871heu81h8h27ey7182eu1he8271h8e7h2') {
          this.$router.push({ path: "/error" });
        } else {
          this.$message({
              message: '欢迎管理员大大！',
              type: 'success'
            });
        }
        this.queryChannel()
      },
      methods: {
        async queryChannel(){
          let { data:baseRefault} = await queryChannel()
          this.tableData = baseRefault.dataList;
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        async handleDelete(index, row) {
          console.log(row.cid);
          let { data:baseRefault} = await delChannel(row.cid)
          if (baseRefault.status == '1005') {
            this.$message.error(baseRefault.message);
          }else {
            this.$message({
              message: baseRefault.message,
              type: 'success'
            });
            this.queryChannel()
          }
        },
        savechannel(){
          this.dialogVisible = true
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
            this.queryChannel()
          }
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
      },
}
</script>

<style>

</style>