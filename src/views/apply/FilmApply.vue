<template>
  <div class="columns py-6">
    <div class="column is-half is-offset-one-quarter">
      <el-card shadow="never">
        <div slot="header" class="has-text-centered has-text-weight-bold">
          电影申请
        </div>
        <div>
          <el-form
            v-loading="loading"
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="电影名称" prop="applyName">
              <el-input v-model="ruleForm.applyName" placeholder="请输入电影名称"></el-input>
            </el-form-item>

            <el-form-item label="备注" prop="applyResover">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="选填"
                v-model="ruleForm.applyResover">
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >申请</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { applyfilm } from '@/api/site'
export default {
  name: "Login",
  data() {
    return {
      redirect: undefined,
      loading: false,
      ruleForm: {
        applyName: "",
        applyResover: "",
        applyPerson : "",
        rememberMe: true,
      },
      rules: {
        applyName: [
          { required: true, message: "请输入电影名称", trigger: "blur" },
          {
            min: 1,
            max: 30,
            message: "长度在 1 到 30 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async submitForm(formName) {
    let loginName = sessionStorage.getItem('loginname')
    this.ruleForm.applyPerson = loginName
     let { data:baseRefault} = await applyfilm(this.ruleForm)
          if (baseRefault.status == '1005') {
            this.$message.error(baseRefault.message);
          }else {
            this.$message({
              message: '已提交申请!',
              type: 'success'
            });
            setTimeout(() => {
                  this.loading = false;
                  this.$router.push({ path: this.redirect || "/" });
                }, 0.1 * 1000);
          }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
</style>