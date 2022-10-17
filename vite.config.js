import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // 静态资源基础路径 base: './' || '',
    //配置跨域
    server: {
        open: false,  //启动项目后打开浏览器
        port: 3000,   //端口
        proxy: {
            '/api': {
                target: 'http://101.34.87.182:8080/',  //API服务地址
                changeOrigin: true,             //开启跨域
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                // 分包
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                },
            },
        },
    },

})
