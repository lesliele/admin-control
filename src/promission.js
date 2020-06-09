import router from './router'
import axios from 'axios'
const _import = require('./router/_import_' + process.env.NODE_ENV)
import Layout from '@/views/layout/index'

var getRouter

router.beforeEach((to, from, next) => {
  if (!getRouter) {
    if (!getObjArr('router')) {
      axios.get('https://mockapi.eolinker.com/Dgkdzijf4b930346e2b15a0ab27ef60acf5054b95b45904/list').then(res => {
        getRouter = res.data.router;
        saveObjArr('router', getRouter);
        routerGo(to, next);
      })
    } else {
      getRouter = getObjArr('router');
      routerGo(to, next);
    }
  } else {
    next()
  }
})

function routerGo(to, next) {
  getRouter = filterAsyncRouter(getRouter)
  router.addRoutes(getRouter)
  global.antRouter = getRouter
  next({
    ...to,
    replace: true
  })
}

function getObjArr(name) {
  return JSON.parse(window.localStorage.getItem(name));
}

function saveObjArr(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

function filterAsyncRouter(asyncRouterMap) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = Layout;
      } else {
        route.component = _import(route.component);
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children);
    }
    return true;
  })
  return accessedRouters;
}