import { useEffect, useState } from 'react'
import Child from '@/components/effect-basic2/child'

export default function EffectBasic2() {
  const [name, setName] = useState({ myname: 'Iris' })

  return (
    <>
      <h1>useEffect基本範例2</h1>
      <button
        onClick={() => {
          setName({ myname: 'Nike' })
        }}
      >
        改名為Nike
      </button>
      <button
        onClick={() => {
          setName({ myname: 'Iris' })
        }}
      >
        改名為Iris
      </button>
      <Child name={name} />
    </>
  )
}
