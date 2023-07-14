import ThemeContext from '@/context/theme'
import { useContext } from 'react'

export default function ChildA() {
  // 使用useContext傳入ThemeContext，讀取其中紀錄的color與setColor
  const { color, setColor } = useContext(ThemeContext)
  return (
    <>
      <h1>ChildA</h1>
      <div style={{ color: color }}>Hello</div>
      <button
        onClick={() => {
          setColor('lightgray')
        }}
      >
        lightgray
      </button>
      <button
        onClick={() => {
          setColor('gray')
        }}
      >
        gray
      </button>
    </>
  )
}
