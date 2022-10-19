<template>
  <div class="container">
    <div style="width: 25%"></div>
    <div style="width: 50%;margin-top: 10px">

      <Tinymce v-model="description" @change="onChagneThiymce" width="100%" :height="theScreenHeight"/>

    </div>
    <div style="width: 25%"></div>
  </div>
</template>

<script setup>
import Tinymce from "../../components/tinymce/Tinymce.vue"
import {ref} from "vue";
import tinymce from 'tinymce/tinymce'
const description = ref("")

// 富文本编辑器改变触发
const onChagneThiymce = (val) => {
  console.log(val)
  // form.value.description = val
}
//获取屏幕高度
const theScreenHeight=ref(null)
theScreenHeight.value=document.body.clientHeight*0.9

// theScreenHeight.value=

</script>

<style scoped>
  .container{
    display: flex;
    background-color: #f5f7fa;
    height: 100%;
  }
</style>