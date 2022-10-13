<template>
  <div class="continer" style="overflow-y: scroll">
    <div style="width: 25%;"></div>
    <div class="continer_card" style="width: 50%;">
      <a-card style="margin:1rem 0;">
        <tabBar :dataLsit="dataLsit" @clickEvent="wasClicked" fristname="热门" ></tabBar>
      </a-card>
      <a-card hoverable style="margin:1rem 0;" v-for="i in 5">
        <artiCle ></artiCle>
        <div style="height: 5rem;"></div>
      </a-card>
      <div style="height: 5rem;"></div>
    </div>
    <div style="width: 25%;position: absolute;right: 10px">
      <rightBar></rightBar>
    </div>
  </div>

</template>

<script setup>
import rightBar from "../../components/rightBar.vue"
import artiCle from "../../components/article.vue"
import classBar from "../../components/classBar.vue"
import tabBar from "../../components/tabbar.vue"
import {ref} from "vue";
const dataLsit = ref([
  {name: '热门', key: '-1'},
  {name: '推荐', key: '1'},
  {name: '玩法', key: '2'},
  {name: '打野', key: '3'},
  {name: 'adc', key: '4'},
  {name: '上单', key: '5'},
  {name: '中单', key: '6'},
  {name: '辅助', key: '7'}
])
const wasClicked = (e) => {
  console.log(e,'e')
}
</script>

<style scoped>
.continer {
  height: 100%;
  background: #f5f7fa;
  display: flex;
}
</style>