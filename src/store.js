import Vue from 'vue'
import Vuex from 'vuex'
import cteatePersistedState from 'vuex-persistedstate'
import {UPDATE_BOOK,UPDATE_CURRENT} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  // データの初期値
  state: {
    // レビュー書籍情報
    books:[],
  // 現在編集選択中
    current: null
  },
  // stateの値を加工、更新する
  getters:{
    // 登録してあるレビューの数
    bookCount(state){
        return state.books.length
    },
    // 全てのレビュー情報
    allBooks(state){
      return state.books
    },
    // 指定されたページのレビュー情報
    getRangeByPage(state){
      return page => {
        const SIZE = 3
        return state.books.slice((page - 1)* SIZE, (page - 1) * SIZE + SIZE )
      }
    },
    // 指定されたIDのページ情報
    getBookById(state){
      return id =>{
        return state.books.find(books => books.id === id)
      }
    },
    // 現在編集中の書籍
    current(state){
      return state.current;
    }
  },
  // stateを操作するメゾット
  mutations: {
    // 編集中の書籍currentを更新,payloadは更新された書籍情報
    [UPDATE_CURRENT](state,payload){
      state.current = payload
    },
    // レビューを更新
    [UPDATE_BOOK](state,payload){
      // gettersのgetBookByIdの中の新規id(payload.id)をｂとして
      let b = this.getters.getBookById(payload.id)
      if (b) {
        Object.assign(b,payload)
      }else{
        state.books.push(payload)
      }
    }
  },
  // 外部との非同期処理を伴う操作.mutetionsと同じ名前にすると楽
  actions: {
    [UPDATE_CURRENT]({commit},payload){
      commit(UPDATE_CURRENT,payload)
    },
    [UPDATE_BOOK]({commit},payload){
      commit(UPDATE_BOOK,payload)
    }
  },
  plugins:[cteatePersistedState({
    key:'reading-recorder',
    storage: localStorage
  })]
})
