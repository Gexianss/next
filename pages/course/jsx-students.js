//JS方法
// import React from 'react'
// const data = [
//   { id: 107001, name: '張佳蓉', age: 21 },
//   { id: 107002, name: '楊智云', age: 20 },
//   { id: 107003, name: '陳語合', age: 19 },
//   { id: 107004, name: '林世名', age: 22 },
//   { id: 107005, name: '張建彰', age: 21 },
//   { id: 107006, name: '黃國瑄', age: 20 },
//   { id: 107007, name: '徐昶意', age: 18 },
//   { id: 107008, name: '賴靖瑞', age: 19 },
//   { id: 107009, name: '宋紀仲', age: 22 },
// ]

// 從JSON檔案導入，導入後data會自動轉成JS的資料類型格式
import data from '@/data/students.json'

export default function JsxStudents() {
  return (
    <>
      <h1>Jsx中使用map呈現學生資料</h1>
      <ul>
        {data.map((v, i) => {
          return (
            <li key={v.id}>
              {v.id} / {v.name} / {v.age}
            </li>
          )
        })}
      </ul>
    </>
  )
}
