<template>
  <div >
<!--    <div class="login-box">-->
<!--      <h2>欢迎登录</h2>-->
      <form style="white-space: nowrap;margin: 0 auto">
        <div class="user-box">
          <input v-model="from.userName" autocomplete="" required="" type="text">
          <label>请输入用户名</label>
        </div>
        <div class="user-box">
          <input v-model="from.userAccount" autocomplete="" required="" type="text">
          <label>请输入账号</label>
        </div>
        <div class="user-box">
          <input v-model="from.userPassword"  autocomplete="" required="" type="password">
          <label>请输入密码</label>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="user-box">
          <input v-model="from.checkPassword" autocomplete="" required="" type="password">
          <label>请再次确定密码</label>
        </div>
        <div class="btn-handle">
        <a @click="handleSubmit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          确定注册
        </a>
        <a @click="back">返回登录</a>
        </div>
      </form>
    </div>
<!--    <btrBootm style="position: absolute;bottom: 0;width: 100%;text-align: center;"></btrBootm>-->
<!--  </div>-->
</template>

<script setup>
import {message} from 'ant-design-vue'
import {reactive, ref} from "vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router";
import {defineEmits} from "vue";
import {getRegisterAPI} from "../api/index.js"
import btrBootm from "../components/bottombae.vue"
const from = reactive({
  userName:'',
  userAccount: '',
  userPassword: '',
  checkPassword:'',
})
//登录判断
const store =useStore()
const router=useRouter()
let emit = defineEmits(['backLogin'])

const handleSubmit = async () => {
  if (!from.userName || !from.userAccount||!from.userPassword||!from.checkPassword) {
    message.error('账号,用户名和密码不能为空')
  } else {
    //注册接口
    const res = await getRegisterAPI(from)
    console.log(res.code,'res')
    if(res.message!='ok') return message.error('登录失败！')
    // window.location.reload()
    message.success('注册成功，请先登录！')
    //   router.push('/page')  // }).finally(() => {
    //   //请求结束之后
    // })
  }
}

const back = () => {
  emit('backLogin')
}
const signUp_asd = () => {
  message.success('登录成功！')
}

</script>

<style scoped>
.cccc {
  height: 100%;
  background-image: url('/src/assets/img/baner.jpeg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0px -50px;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}
.btn-handle{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2,50%);
}
 form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px;
   text-align: center;
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
}
</style>
