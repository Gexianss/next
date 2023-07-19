import React from 'react'
import { useRouter } from 'next/router'

export default function UsersName() {
  const router = useRouter()

  console.log(router.query)
  return (
    <>
      <div>Uid = {router.query.uid}</div>
    </>
  )
}
