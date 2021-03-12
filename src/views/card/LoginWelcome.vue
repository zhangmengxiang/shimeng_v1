<template>
  <el-card class="box-card" shadow="never">
    <div slot="header" v-if="token != null && token !== ''">
      <span>💐 申请/讨论</span>
    </div>
    <div slot="header" v-else>
      <span>💐 注册/登录</span>
    </div>
    <div v-if="token != null && token !== ''" class="has-text-centered">
      <!-- <b-button type="is-danger" tag="router-link" :to="{path:'/post/create'}" outlined>✍ 发表想法</b-button> -->
      <b-button type="is-primary" tag="router-link" :to="{path:'/apply'}" outlined>电影申请</b-button>
      <b-button type="is-danger" tag="router-link" :to="{path:'/post/create'}" outlined class="ml-2"> 论坛发表</b-button>
    </div>

    <div v-else class="has-text-centered">
      <b-button type="is-primary" tag="router-link" :to="{path:'/jeixi'}" outlined>手动解析</b-button>
      <b-button type="is-danger" tag="router-link" :to="{path:'/apply'}" outlined class="ml-2"> 电影申请</b-button>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LoginWelcome',
  computed: {
    ...mapGetters([
      'token'
    ])
  }
}
</script>

<style scoped>

</style>