<template>
  <div class="list">
    <p>{{bookCount}}件の書籍情報が登録されています</p>
    <!-- 書籍情報 -->
     <BookInfo v-for="(b, i) of books"
     :linkable="true" :book="b" :index="i + 1" :key="b.isbn"></BookInfo>
  <!-- ページャーの作成 -->
  <div>
    <el-pagination background layout="prev, pager, next"
     :total="bookCount" :page-size="3" @current-change="onchange">
    </el-pagination>
  </div>
  </div>
</template>



<script>
import { mapGetters } from 'vuex';
import BookInfo from '@/components/BookInfo.vue'

export default {
  name:'home',
  data (){
    return {
      books:[]
    }
  },
  // 使用するローカルコンポを登録
  components:{
    BookInfo
  },
  // ゲッターを算出プロパティに紐付け
  computed:mapGetters(['bookCount','getRangeByPage']),
  methods: {
    //ページが変更された時
    onchange(page){
      this.books = this.getRangeByPage(page)
    }
  },
  // 初期化した時に1ページ目の情報を取得
  mounted() {
    this.books = this.getRangeByPage(1)
  }
}
</script>

<style scoped>

</style>
