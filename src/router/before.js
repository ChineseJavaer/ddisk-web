import router from '@/router/router'
import store from '@/store/index.js'

// 路由全局前置守卫, 类似于拦截器
router.beforeEach((to, from, next) => {
  if (store.state.user.error >=3){
    next()
    return
  }
  if (to.name.startsWith("Error_")){
    next(from);
    return
  }
  store.dispatch("getUserInfo").then(() => {
    if (to.matched.some(m => m.meta.requireAuth)) {
      if (!store.getters.isLogin) { // 没有登录
        next({
          path: '/login',
          query: { Rurl: to.fullPath }
        }) //将to参数中的url传递给login页面进行操作
      } else {
        next()   // 正常跳转到你设置好的页面
      }
    } else {
      next()  // 正常跳转到你设置好的页面
    }
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }
    /* 路由发生变化修改页面meta */
    if(to.meta.content){
      let head = document.getElementsByTagName('head');
      let meta = document.createElement('meta');
      document.querySelector('meta[name="description"]').setAttribute('content', to.meta.content.description)
      meta.content = to.meta.content;
      head[0].appendChild(meta)
    }
  })
})
