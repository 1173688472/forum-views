// import Vue from 'vue'
import Vuex from 'vuex'
import {createStore} from 'vuex'
import {getLoginAPI} from "../api/index.js"

const store = createStore({
    state() {
        return {
            user: {}
        }
    },
    mutations: {
        SET_USERINfo(state, user) {
            state.user = user
        }
    }, actions: {
        //登录方法
        login({commit}, from) {
            return new Promise((resolve, reject) => {
                getLoginAPI({userAccount: from.username, userPassword:from.password}).then(res => {
                    // if (!res == 200) return
                    console.log(res,'1')
                    const userinfo =JSON.stringify(res)
                    localStorage.setItem('userinfo', userinfo)
                    commit('SET_USERINfo', res)
                    resolve(res)
                }).catch((err) => reject(err))
            })
        },
        //退出登录
        loginout({commit}) {
            // //1.清除toekn
            // const id = localStorage.getItem('id')
            // if (id) {
            //     localStorage.removeItem('id')
            // }
            // return new Promise((resolve, reject) => {
            //     signOutApi().then((res) => {
            //         resolve(res)
            //     })
            //         .catch((err) => reject(err))
            // })
            //2清除vuex状态
            commit('SET_USERINfo', {})
        }
    }
})
export default store