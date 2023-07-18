import { useState } from 'react'

export default function AddForm({ handleAdd }) {
  // 定義文字輸入用的狀態
  const [inputText, setInputText] = useState('')

  // 修正中文輸入法的Enter組字用的信號狀態
  const [isCompositiong, setIsCompositing] = useState(false)
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        //開關中文輸入法組字期間
        onCompositionStart={() => setIsCompositing(true)}
        onCompositionEnd={() => setIsCompositing(false)}
        onKeyDown={(e) => {
          // 要在不是中文輸入法組字期間，按下Enter才加入待辦事項
          // 有值時(不是空白才能加入)
          if (e.key === 'Enter' && !isCompositiong && inputText) {
            // 用時間日期物件轉毫秒整數值作為id
            handleAdd(inputText)
            setInputText('') //清空Input
          }
        }}
      />
    </>
  )
}
