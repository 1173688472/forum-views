# Vue 3 + Vite+ axios +vuex +vue-router

forum-views
      ├─ .vscode                    # 编译器配置文件
      ├─ public                     # 静态资源
      ├─ src                        # 源码
      │  ├─  api                    # 接口请求
      │       ├─ login.js           # 登录页面接口
      │       ├─ index.js           # 接口的定义页面
      │  ├─ assets                  # webpack打包的资源
      │       ├─ css                # 全局css资源
      │       ├─ img                # 图片资源
      │  ├─ components              # 公共组件
      │  ├─ router                  # 路由
      │  ├─ store                   # 全局store管理（vuex）
      │  ├─ utils                   # 全局公共方法
      │  └─ views                   # 所有业务页面
      │       ├─ article            # 写文章页面
      │       ├─ home               # 首页
      │       ├─ index.vue          # 布局页面（入口文件）
      │       ├─ login.vue          # 登录页面
      │       ├─ register.vue       # 注册页面
         ├─ app.vue                 # 整个项目的入口文件
         ├─ axios.js                # 封装axios请求
         ├─ mian.js                 # 配置文件
      ├─ package.json               # 依赖·编译配置文件
      ├─ index.html                 # 页面的主入口文件
      ├─ README.md                  # Markdown文档
      ├─ .gitignore                 # git文件
      └─ vite.config.js             # vite 配置文件
