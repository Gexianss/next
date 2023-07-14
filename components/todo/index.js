import { useState } from 'react'

export default function TodoIndex() {
  // 定義文字輸入用的狀態
  const [inputText, setInputText] = useState('')

  // 修正中文輸入法的Enter組字用的信號狀態
  const [isCompositiong, setIsCompositing] = useState(false)

  // 定義狀態，每個成員 todo = {id: , text: }
  //資料一定要有id，因為key要用id才可以做CRUD，這是react中map時需要的
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶' },
    { id: 2, text: '學程式' },
  ])
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
          // 要在不適中文輸入法組字期間，按下Enter才加入待辦事項
          // 友值時(不是空白才能加入)
          if (e.key === 'Enter' && !isCompositiong && inputText) {
            const newTodo = { id: Number(new Date()), text: inputText }
            setTodos([...todos, newTodo])
            setInputText('') //清空Input
          }
        }}
      />
      <hr />
      <ul>
        {todos.map((v) => {
          return <li key={v.id}>{v.text}</li>
        })}
      </ul>
    </>
  )
}
