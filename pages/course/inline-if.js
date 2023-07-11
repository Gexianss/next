import { useState } from 'react'

export default function InlineIf() {
  const [count, setCount] = useState({ total: 0 })

  return (
    <>
      <h1>{count.total}</h1>
      <button
        onClick={() => {
          setCount({ total: count.total + 1 })
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount({ total: count.total - 1 })
        }}
      >
        -
      </button>
      <hr />
      {/* && 前面的運算要是布林值，此語法才會穩固 */}
      {!!count.total && <h2>訊息：目前計數為 {count.total} </h2>}
      {/* 各種寫法 */}
      {/* {Boolean(count) && <h2>訊息：目前計數為 {count} </h2>} */}
      {/* {count !== 0 && <h2>訊息：目前計數為 {count} </h2>} */}
      {/* {count > 0 && <h2>訊息：目前計數為 {count} </h2>} */}
    </>
  )
}
