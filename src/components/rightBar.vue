<template>
  <div style="margin:1rem ">
      <a-card hoverable style="margin:1rem ">
        <template #cover>
          <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template #actions>
          <setting-outlined key="setting"/>
          <edit-outlined key="edit"/>
          <ellipsis-outlined key="ellipsis"/>
        </template>
        <a-card-meta description="This is the description" title="Card title">
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random"/>
          </template>
        </a-card-meta>
      </a-card>
      <a-card hoverable style="margin:1rem ">sddsds</a-card>
      <a-card hoverable style="margin:1rem "> sdsdsd</a-card>
  </div>

  <!--  <a-card hoverable style="width: 240px">-->
  <!--    <template #cover>-->
  <!--      <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />-->
  <!--    </template>-->
  <!--    <a-card-meta title="Europe Street beat">-->
  <!--      <template #description>www.instagram.com</template>-->
  <!--    </a-card-meta>-->
  <!--  </a-card>-->
</template>

<script setup>
import {SettingOutlined, EditOutlined, EllipsisOutlined} from '@ant-design/icons-vue';
</script>

<style scoped>

</style>