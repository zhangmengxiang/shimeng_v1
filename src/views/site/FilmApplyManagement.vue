<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="applyName"
        label="电影名称"
        width="150">
      </el-table-column>

      <el-table-column
        prop="applyPerson"
        label="申请人"
        width="150">
      </el-table-column>

      <el-table-column
        prop="createTime"
        label="申请时间"
        width="150">
      </el-table-column>

      <el-table-column
        prop="applyStatus"
        label="电影状态"
        width="150">
      </el-table-column>

      <el-table-column
        prop="applyResover"
        label="申请备注"
        width="200">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleupdate(scope.row.aid)">通过</el-button>
        </template>
      </el-table-column>

    </el-table>

  </div>
    
</template>

<script>
import { queryApplyFilm , updateStatus } from '@/api/site'
export default {
    name: "FilmApplyManagement",
     data() {
        return {
         tableData: []
        }
      },
      created() {
        this.queryApplyFilm()
      },
      methods: {
        async queryApplyFilm(){
          let { data:baseRefault} = await queryApplyFilm()
          this.tableData = baseRefault.dataList;
        },
        async handleupdate(aid) {
           let { data:baseRefault} = await updateStatus(aid)
           if (baseRefault.status == '1005') {
            this.$message.error(baseRefault.message);
          }else {
            this.$message({
              message: '审核通过!',
              type: 'success'
            });
            this.queryApplyFilm()
          }
        }
      },
}
</script>

<style>

</style>