<template>
  <div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <el-tabs>
          
          <el-tab-pane label="解析渠道">
            <UrlAdministration></UrlAdministration>
          </el-tab-pane>

          <el-tab-pane label="影视管理">
              <FileManagement></FileManagement>
              
          </el-tab-pane>

          <el-tab-pane label="申请管理">
            <FilmApplyManagement></FilmApplyManagement>
          </el-tab-pane>
        </el-tabs>
      </div>

     
    </el-card>
  </div>
</template>

<script>
import UrlAdministration from "@/views/site/UrlAdministration";
import FileManagement from "@/views/site/FileManagement";
import FilmApplyManagement from "@/views/site/FilmApplyManagement";
export default {
  name: 'Site',
  components: { UrlAdministration ,FileManagement,FilmApplyManagement },
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
  },
}
</script>

<style scoped>
   
</style>
