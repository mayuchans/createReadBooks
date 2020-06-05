<template>
  <div id="serch">
    <el-form :inline="true">
      <el-form-item label="キーワード">
        <el-input type="text"  size="large" v-model="keyword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onclick">検索</el-button>
      </el-form-item>
    </el-form>
    <hr />
    <!-- 検索結果を表示 -->
    <BookInfo v-for="(b, i) of books"
      :linkable="true" :book="b" :index="i + 1" :key="b.isbn"></BookInfo>
  </div>
</template>


<script>
import BookInfo from '@/components/BookInfo.vue'

export default {
  name: "book-serch",
  components:{
    BookInfo
  },
  data(){
    return{
      keyword:'vue.js',
      books:[]
    }
  },
  methods:{
    // 検索ボタンを押した時にfetchメゾットで情報取得、JSON型
    onclick:function(){
      this.$http('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword)
      .then((response) => {
        return response.json()
      })
        // 内容を詰め替え
      .then((data) => {
        this.books = []
        for (let b of data.items) {
          let authors = b.volumeInfo.authors
          let price = b.saleInfo.listPrice
          let img = b.volumeInfo.imageLinks
          this.books.push({
            id: b.id,
            title: b.volumeInfo.title,
            author: authors ? authors.join(',') : '',
            price: price ? price.amount : '-',
            publisher: b.volumeInfo.publisher,
            published: b.volumeInfo.publishedDate,
            image: img ? img.smallThumbnail : '',
          })
        }
      })
    }
  }
}
</script>



<style  scoped>
#Serch form{
  margin-top: '15px';
}

</style>
