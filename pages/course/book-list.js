import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

function BookList() {
  //將導入的json資料，增加一個fav屬性，作為加入收藏判斷用
  const initState = data.map((v) => {
    return { ...v, fav: false }
  })

  //初始化定義狀態
  const [books, setBooks] = useState(initState)

  //改進方法，純粹化(purify)改成純函式
  //傳入state+要改變的id
  //返回一個已經切換好fav的布林值(true => false, false => true)的狀態
  const toggleFav = (state, isbn) => {
    return state.map((v) => {
      //如果目前的isbn與傳入的isbn相符合，切換fav的布林值
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      //不是的話，就回傳原物件
      else return { ...v }
    })
  }

  //   切換isbn為xxx的fav的布林值 (true => false, false => true)
  //   const toggleFav = (isbn) => {
  //     const newBooks = books.map((v) => {
  //        如果目前的isbn與傳入的isbn相符合，切換fav的布林值
  //       if (v.isbn === isbn) return { ...v, fav: !v.fav }
  //        不是的話，就回傳原物件
  //       else return { ...v }
  //     })

  //     setBooks(newBooks)
  //   }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    // onClick={() => {
                    //   點按時處理切換fav的布林值
                    //   toggleFav(v.isbn)
                    // }}
                    onClick={() => {
                      // 點按時處理切換fav的布林值
                      // 改為純函式處理狀態的作法
                      setBooks(toggleFav(books, v.isbn))
                    }}
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default BookList
