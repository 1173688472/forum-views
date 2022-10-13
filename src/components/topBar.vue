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
        <a-avatar :size="40" style="margin: 0 5rem" @click.prevent src="https://joeschmoe.io/api/v1/random" />
        <template #overlay>
          <a-menu @click="handleMenuClick" style="margin: 0 auto">
            <a-menu-item key="1" style="margin: 0 1rem;">
              <UserOutlined style="margin: 0.5rem;" />
             我的文章
            </a-menu-item >
            <a-menu-item key="2" style="margin: 0 1rem;">
              <UserOutlined style="margin: 0.5rem;"/>
              我的收藏
            </a-menu-item>
            <a-menu-item key="3" style="margin: 0 1rem;">
              <UserOutlined style="margin: 0.5rem;"/>
              退出登录
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup>
import { UserOutlined } from '@ant-design/icons-vue';
import {ref} from "vue";

</script>

<style scoped>
.continers {
  display: flex;
  height: 50px;
  background: white;
  align-items: center;
}

.container_search {
  width: 50%;
}

.container_search  :deep(.ant-input):hover {
  border-color: #22ada9;
}

.container_search  :deep(.ant-btn-primary)  {
  background: #22ada9;
  border-color: #22ada9;
}

.container_search /deep/ :deep(.ant-input):focus {
  border-color: #22ada9;
}

.container_search :deep(.ant-input){
  background: #faf9f9;
}
.continers_select{
  text-align: center;
}
</style>