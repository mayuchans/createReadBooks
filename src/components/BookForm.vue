<template>
  <div id="form">
    <BookInfo :book="book"></BookInfo>
    <hr/>

    <el-form ref="form" model="form" :rules="rules" label-width="1200px">
      <!-- 読了日 カレンダー-->
      <el-form-item label="読了日">
        <el-date-picker v-model="form.read" type="date"></el-date-picker>
      </el-form-item>
      <!-- 感想 -->
      <el-form-item label="感想" prop="memo">
        <el-input type="textarea" size="large" v-model="form.memo"></el-input>
      </el-form-item>
      <!-- 登録ボタン -->
      <el-form-item>
        <el-button type="primary" @click="onsubmit">登録</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { mapGetters , mapActions} from 'vuex'
import BookInfo from '@/components/BookInfo.vue'
import {UPDATE_CURRENT , UPDATE_BOOK} from '@/mutation-types'

export default {
  name:'book-form',
  components:{
    BookInfo
  },
  data(){
    return{
      book:{},
      form:{
        read: new Date(),
        mamo: ''
      },
      // 検証ルール
      rules:{
        memo:[
          {required:true,message:'メモが必要です。', trigger:'change'}
        ]
      }
    }
  },
  computed: mapGetters(['current','etBookById']),
  // 2020/06/06
  created(){
    // 中身がない時にページをリダイレクト
    if(!this.current){
      this.$router.push('?')
    }
    // 選択中の書籍をbookに詰め替え
    this.book = Object.assign({},this.current)
  },
  // 初期化の処理
  mounted(){
    // 選択中の書籍で検索
   let b = this.getBookId(this.book.id)
  //  既に書籍情報がある場合はその情報を入れ込む
  if(b){
    this.form.read = b.read
    this.form.memo = b.memo
  }
  },
  methods:{
    // 値を変更できるmapActionsを使ってmethodsないで使えるようにする
    ...mapActions(['UPDATE_BOOK','UPDATE_CURRENT']),
    // onsubmitの処理
    onsubmit(){
      // 検証
      this.$refs['form'].validate((valid) =>{
        // info(book)にBookForm(form)で入力した内容を反映
        if(valid){
          this[UPDATE_BOOK](
            Object.assign({},this.book,this.form,)
          )
          // 書籍内容をクリア
          this[UPDATE_CURRENT](null)
          // 通知メッセ/トーストの作成
          this.$notify({
            title:'Reeding Recorder',
            message: this.$createElement('p',{style:'color:#009'},'読書情報の記録登録に成功しました'),
            duration:2000
          })
          // フォームの内容をクリア
          this.form.read = new Date()
          this.form.memo = ''
          // トップページに飛ばす
          this.$router.push('/')
        }
      })
    }
  }
}
</script>


<style scoped>
 #form{
   margin-top: 15px;
 }
</style>
