import Vue from 'vue'
import Router from 'vue-router'
import BookForm from './components/BookForm.vue'
import BookSearch from './components/BookSearch.vue'

Vue.use(Router)

export default new Router ({
  mode:'history',
  base:process.env.BASE_URL,
  Routes:[
    {
      path: '/search',
      name: 'search',
      component: BookSearch
    },
    {
      path: '/form',
      name: 'form',
      component: BookForm
    },
    // リダイレクト・未登録のパスへアクセスがあった時の処理
    {
      path: '*',
      redirect:'/'
    }
  ]
})
