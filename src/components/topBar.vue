<template>
  <div class="continers">
    <div class="continer_left" style="width: 25%;">
      <img alt="" src="../assets/img/lol.png" style="margin: 0 1rem">
      <span style="letter-spacing:1px;color: #22ada9">联盟论坛</span>
    </div>
    <div class="container_search" style="width: 50%;">

      <a-dropdown>
        <a-input-search
            v-model:value="value"
            enter-button
            placeholder="请输入搜索关键字"
            @search="onSearch"
        />
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">暂无搜索记录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <div class="continers_select" style="width: 25%;">
      <a-dropdown placement="bottom">
        <a-avatar :size="40" src="https://joeschmoe.io/api/v1/random" style="margin: 0 5rem" @click.prevent/>
        <template #overlay>
          <a-menu style="margin: 0 auto" @click="handleMenuClick">
            <a-menu-item key="1">
              <UserOutlined/>
              我的文章
            </a-menu-item>
            <a-menu-item key="2">
              <UserOutlined/>
              我的收藏
            </a-menu-item>
            <a-menu-item v-if="!userName" key="3" @click="getLogin">
              <UserOutlined/>
              立即登录
            </a-menu-item>
            <a-menu-item v-else key="4" @click="getOutIn">
              <UserOutlined/>
              退出登录
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup>
import {UserOutlined} from '@ant-design/icons-vue';
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

const router = useRouter()
const getLogin = () => {
  router.push('/login')
}
//判断立即登录与退出登录
let userName = computed(() => {
  const user = localStorage.getItem('userinfo')
  console.log(user, 'user')
  return user ? JSON.parse(user) : ''

})
//退出登录
const store = useStore()
const getOutIn = () => {
  localStorage.removeItem('userinfo')
  store.dispatch('loginout')
  location.reload()
}
</script>

<style scoped>
.continers {
  display: flex;
  height: 50px;
  width: 100%;
  background: white;
  align-items: center;
}

.container_search {
  width: 50%;
}

.container_search :deep(.ant-input):hover {
  border-color: #22ada9;
}

.container_search :deep(.ant-btn-primary) {
  background: #22ada9;
  border-color: #22ada9;
}

.container_search :deep(.ant-input):focus {
  border-color: #22ada9;
}

.container_search :deep(.ant-input) {
  background: #faf9f9;
}

.continers_select {
  text-align: center;
}
</style>