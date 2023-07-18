import { useState } from 'react'
import AddForm from './add-form'
import List from './list'
import FilterButton from './filter-button'

export default function TodoIndex() {
  // 定義狀態，每個成員 todo = {id: number, text: string, completed: bool, editing: bool}
  //資料一定要有id，因為key要用id才可以做CRUD，這是react中map時需要的
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false, editing: false },
    { id: 2, text: '學程式', conpleted: false, editing: false },
  ])

  // 呈現過濾用的狀態，只有三種類型type = '所有' | '進行中' | '已完成'
  const [type, setType] = useState('所有')

  // 新增todo(純粹函式(pure function)，只處理狀態改變)
  const add = (todos, text) => {
    // 仿照資料庫遞增id的作法(id需要有規則和都是數字才可以)
    // 取出所有id為陣列
    const ids = todos.map((v) => v.id)
    // 得到陣列中最大值，之後加1
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1

    // 建立新的todo物件
    const newTodo = {
      id: newId,
      text: text,
      completed: false,
      editing: false,
    }
    // 回傳新的todos狀態
    return [...todos, newTodo]
  }

  // 切換完成狀態(completed)(純粹函式(pure function)，只處理狀態改變)
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      // 如果有比對到v.id是id，作切換布林值的動作
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })
  }

  // 切換進入編輯狀態(completed)(純粹函式(pure function)，只處理狀態改變)
  const toggleEditing = (todos, id) => {
    return todos.map((v) => {
      // 如果有比對到v.id是id，作切換布林值的動作
      if (v.id === id) return { ...v, editing: true }
      //
      else return { ...v, editing: false }
    })
  }

  // 編輯完成儲存狀態
  const updateText = (todos, id, text) => {
    return todos.map((v) => {
      // 如果有比對到v.id是id，將text改回新的text，把editing設為true(恢復原本狀態)
      if (v.id === id) return { ...v, text: text, editing: false }
      //
      else return { ...v }
    })
  }

  // 移除todo (純粹函式(pure function)，只處理狀態改變)
  const remove = (todos, id) => {
    //如果有比對到v.id是id，就作移除該成員
    return todos.filter((v) => v.id !== id)
  }

  //依類型不同過濾狀態
  const filterByType = (todos, type) => {
    //依照completed值來過濾
    if (type === '已完成的項目') return todos.filter((v) => v.completed)
    if (type === '進行中的項目') return todos.filter((v) => !v.completed)

    //預設(回傳所有)
    return todos
  }

  //轉門設計給拆出AddForm子元件用的處理函式
  const handleAdd = (inputText) => {
    setTodos(add(todos, inputText))
  }

  // 專門設計給Item子元件用的處理函式
  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }

  // 專門設計給Item子元件用的處理函式
  const handleToggleEditing = (id) => {
    setTodos(toggleEditing(todos, id))
  }

  // 專門設計給Item子元件用的處理函式
  const handleUpdateText = (id, text) => {
    setTodos(updateText(todos, id, text))
  }

  // 專門設計給Item子元件用的處理函式
  const handleRemove = (id) => {
    setTodos(remove(todos, id))
  }

  return (
    <>
      <AddForm handleAdd={handleAdd} />
      <hr />
      <List
        // 保持住原本的(所有todos)，呈現時事呈現過濾的todos
        todos={filterByType(todos, type)}
        handleRemove={handleRemove}
        handleToggleCompleted={handleToggleCompleted}
        handleToggleEditing={handleToggleEditing}
        handleUpdateText={handleUpdateText}
      />

      <FilterButton type={type} setType={setType} />
    </>
  )
}
