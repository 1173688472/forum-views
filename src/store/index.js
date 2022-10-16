// import Vue from 'vue'
import Vuex from 'vuex'
import {createStore} from 'vuex'
// import {getLoginAPI, getGetInfo, signOutApi} from "../api/index.js"

const store = createStore({
    state() {
        return {
            user: {},
            userId: '',
            logInStatus: false
        }
    },
    mutations: {
        SET_USERINfo(state, user) {
            state.user = user
            if (!state.logInStatus) {
                state.logInStatus = true
            }
        }
    }, actions: {
        //登录方法
        login({commit}, form) {
            return new Promise((resolve, reject) => {
                getLoginAPI(form).then(res => {
                    if (!res == 200) return
                    localStorage.setItem('id', res.account.id)
                    resolve()
                }).catch((err) => reject(err))
            })
        },
        //获取当前用户信息
        getinfo({commit}) {
            return new Promise((resolve, reject) => {
                getGetInfo(localStorage.getItem('id') || '').then((res) => {
                    commit('SET_USERINfo', res)
                    resolve(res)
                })
                    .catch((err) => reject(err))
            })
        },
        //退出登录
        loginout({commit}) {
            //1.清除toekn
            const id = localStorage.getItem('id')
            if (id) {
                localStorage.removeItem('id')
            }
            return new Promise((resolve, reject) => {
                signOutApi().then((res) => {
                    resolve(res)
                })
                    .catch((err) => reject(err))
            })
            //2清除vuex状态
            commit('SET_USERINfo', {})
        }
    }
})
export default store