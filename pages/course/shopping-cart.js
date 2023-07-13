import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  const updateCount = (id, value) => {
    const newProducts = products.map((v) => {
      if (v.id === id) return { ...v, count: v.count + value }
      else return { ...v }
    })
    setProducts(newProducts)
  }
  // 移除
  const remove = (id) => {
    const newProducts = products.filter((v) => {
      return v.id !== id
    })
    setProducts(newProducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              updateCount(product.id, 1)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // 移除商品只會出現在-這裡的事件
              // 臨界值的信號，目前是1，再按我就要移除了
              // 一點按時，當下
              console.log(product.count)
              if (product.count === 1) {
                remove(product.id)
              } else {
                updateCount(product.id, -1)
              }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
