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
        </el-tabs>
      </div>

     
    </el-card>
  </div>
</template>

<script>
import UrlAdministration from "@/views/site/UrlAdministration";
import FileManagement from "@/views/site/FileManagement";
export default {
  name: 'Site',
  components: { UrlAdministration ,FileManagement }
}
</script>

<style scoped>
   
</style>
