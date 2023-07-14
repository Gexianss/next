import React, { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  // childA：
  // const [pData, setpData] = useState('parent data')

  const [dataFromChildB, setDataFromChildB] = useState('')
  return (
    <>
      <h1>Parent</h1>
      {/* childA： */}
      {/* <ChildA pData = {pData}/> */}

      {/* 利用props傳遞，設定狀態的方法 */}
      {/* childB： */}
      {/* <p>來自ChildB的內部資料:{dataFromChildB}</p> */}
      <ChildB setDataFromChildB={setDataFromChildB} />
      <ChildA dataFromChildB={dataFromChildB} />
    </>
  )
}
