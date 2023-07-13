import React from 'react'
import Child from './child'

export default function Parent() {
  return (
    <>
      <h1>Parent</h1>
      {/* Parent元件渲染了Child，所以式Child的父母元件，才能建立P-C2的關係 */}
      {/* 在子女元件中以屬性的方式傳遞值，值可以是各種JS合法值，包含物件、陣列、函式 */}

      <Child text="今天開始學react" name="Gexian" price={100} />
      <Child text="今天會下雨" name="Chia-Ying" price={1000} />
    </>
  )
}
