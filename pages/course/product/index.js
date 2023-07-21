import Link from 'next/link'
import { useEffect, useState } from 'react'

// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
// {
// "id": "1",
// "picture": "https://via.placeholder.com/150",
// "stock": 5,
// "name": "iPhone 12 Pro",
// "price": 25000,
// "tags": "蘋果,大螢幕"
// }

export default function ProductIndex() {
  const [product, setProduct] = useState([])
  const getProduct = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
    )
    const data = await res.json()
    console.log(data)
    setProduct(data)
  }

  // didMount(第一次渲染)時，載入資料
  useEffect(() => {
    getProduct()
  }, [])
  return (
    <>
      <h1>商品列表頁</h1>

      <ul>
        {product.map((v) => {
          return (
            <li key={v.id}>
              <Link href={`/course/product/${v.id}`}>
                {v.name} / {v.price}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
