import { useEffect } from 'react'

export default function Child(props) {
  useEffect(() => {
    console.log('didMount + pros改變(didUpdate)')
  }, [props])

  return (
    <>
      <h1>子元件(Child)</h1>
      <p>姓名：{props.name.myname}</p>
    </>
  )
}
