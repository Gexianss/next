import { useEffect, useState } from 'react'

export default function EffectBasic() {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)

  // 每次render都會執行的樣式(很少用到)
  useEffect(() => {
    console.log('每次render都會執行到這裡')
  })

  // didMpunt(after first render)
  // 第一次渲染後執行一次，之後部會在執行
  useEffect(() => {
    console.log('第一次渲染後執行一次，之後不會在執行')
  }, [])
  // 這裡沒有加入任何相依變數，代表不與任何變數相依，及預設行為模式

  // didMpunt + didUpdate (after update)
  useEffect(() => {
    console.log('第一次渲染後執行一次 + 之後open狀態有改變後才會執行這裡')
  }, [open])
  //這裡加入了open狀態，相當於監聽open狀態有變化(change)時，才會執行

  //didMount + willUnmount (很少用到的樣式，只會搭配在特定情況下使用)
  useEffect(() => {
    window.addEventListener('resize', function () {
      console.log(window.innerWidth, this.window.innerHeight)
    })

    // 這個函式的回傳值會是另個函式，通常稱為cleanUp(清理函式)
    return () => {
      // willUnmount
      window.removeEventListener('resize', function () {
        console.log(window.innerWidth, window.innerHeight)
      })
    }
  }, [])

  return (
    <>
      <h1>useEffect基本範例</h1>
      <hr />
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +1
      </button>
      <hr />
      <button
        onClick={() => {
          setOpen(!open)
        }}
      >
        open
      </button>
    </>
  )
}
