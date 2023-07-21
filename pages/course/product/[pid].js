import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/{id}
export default function ProductDetail() {
  //   {
  //       "id": "1",
  //       "picture": "https://via.placeholder.com/150",
  //       "stock": 5,
  //       "name": "iPhone 12 Pro",
  //       "price": 25000,
  //       "tags": "蘋果,大螢幕"
  //    }
  const [product, setProduct] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  // 2. 向伺服器獲取資料的函式
  const getProduct = async (pid) => {
    const res = await fetch(
      `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${pid}`
    )
    const data = await res.json()

    // 得到資料後，設定到product狀態
    console.log(data)
    setProduct(data)
  }

  // 1. 從網址動態路由中得到pid(在router.query中的一個屬性pid)
  const router = useRouter()

  useEffect(() => {
    // 要確定pid可以得到後，才向伺服器要求資料
    if (router.isReady) {
      const { pid } = router.query
      // 向伺服器要求
      if (pid) getProduct(pid)
    }
  }, [router.isReady])
  // ^^^^^^^^^^^^^^^ isReady=true代表目前水合化(hydration)已經完成，可以開始用router.query了

  return (
    <>
      <h1>商品詳細頁</h1>
      <div>
        <img src={product.picture} />
      </div>
      <div>商品名: {product.name}</div>
      <div>價格: {product.price}</div>
      <hr />
      <Link href="/course/product">回列表頁</Link>
    </>
  )
}
