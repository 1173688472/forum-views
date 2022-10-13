<template>
  <div style="display: flex;align-items: center;margin-left: 20px">
<!--    <p style="padding: 5px;display: inline-block;font-size: 16px;color:#666" v-if="title">{{ props.title }}</p>-->
    <div class="text_bottom">
      <div class="text_bottom_p" v-for="(item,index) in dataLsit" :key="item.key" :class="item.name==name?'active':''"
           @click="isactive(item,index)" >
        <!--        {{ item }}-->
        {{ item.name }}
      </div>
    </div>

  </div>
</template>

<script setup>
import {ref, watch} from "vue";


const props = defineProps({
  dataLsit: {
    required: true
  },
  title: {
    required: false
  },
  fristname: {
    default: '全部',
    required: false
  }
})
const name = ref('全部')
name.value = props?.fristname
watch(() => props.fristname, (v) => {
  name.value = v
})

const emit = defineEmits(['clickEvent'])
const isactive = (item, index) => {
  name.value = item.name;
  emit('clickEvent', item)
}
</script>

<style scoped >
.text_bottom {
  display: flex;
  align-items: center;
}
.text_bottom_p {
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  background: #f5f5f5;
}

.active {
  background: #3b4159;
  color: white;
  border-radius: 10px;
}

</style>