import { useState } from 'react'

export default function Menu() {
  const [itemText, setItemText] = useState('')

  const items = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {items.map((v, i) => {
          return (
            <li key={i} className={itemText === v ? 'active' : ''}>
              <a
                href="#"
                onClick={() => {
                  setItemText(v)
                }}
              >
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

//解答方法
// https://codesandbox.io/s/homework-1-array-1mm18

// https://codesandbox.io/s/homework-1-array-forked-5q9xt4

// https://codesandbox.io/s/homework-1-object-e0qytq
