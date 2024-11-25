//使用pinia来管理状态
import { defineStore } from "pinia";


//定义一个暴露的状态
export const useBookStore = defineStore("book", {
  state: () => {
    return {
      bookList: [
        { id: 1, title: 'Vue3'},
        { id: 2, title: 'php' },
        { id: 3, title: 'java'},
      ],
      nextId: 4,//用于生成下一个书籍ID
    };
  },
  actions: {
    //保存到本地
    saveBooksToLocalStorage(){
      // const books = this.bookList;
      // localStorage.setItem('bookList', JSON.stringify(books));
    },
    //添加书籍
    addBook(book:any) {
      const newBook = { id: this.nextId, title: book.title };
      this.bookList.push(newBook);
      this.reassignIDs();
    },
    //删除书籍
    deleteBook(id:number) {
      this.bookList = this.bookList.filter((book:any) => book.id !== id);
      this.reassignIDs();
    },
    //重新分配ID
    reassignIDs() {
      let id = 1;
      // forEach 它用于遍历数组中的每个元素，并对每个元素执行一次提供的函数。
      this.bookList.forEach((book:any) => {
        book.id = id++;
      });
    },
    //从本地加载
    loadBooksFromLocalStorage() {
      // const books = localStorage.getItem('bookList');
      // return books ? JSON.parse(books) : [];
    }
  }
});
