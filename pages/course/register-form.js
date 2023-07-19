import { useState } from 'react'

export default function RegisterForm() {
  // 注意 狀態是物件時的初始值
  // 使用這註冊資料用
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: '',
  })

  // 記錄錯誤訊息用
  // 一開始的錯誤訊息物件要獨立出來定義
  // 假定使用者每次提交時，所有的錯誤訊息都是清空的
  const originError = { fullname: '', email: '', password: '', password2: '' }
  const [error, setError] = useState(originError)

  // 密碼呈現用
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  // 所有表單欄位共同的事件處理函式
  const handleFieldChange = (e) => {
    //
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }

  // 用FormData的API加上欄位的name來得到資料，也能做檢查
  const handleSubmit = (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    //FormData範例
    // const formData = new FormData(e.target)
    // if (!formData.get('fullname')) {
    //   alert('請填寫姓名')
    // }

    let hasError = false
    const newError = { ...originError }

    // 直接用狀態中的資料做檢查
    if (!user.fullname) {
      newError.fullname = '請填寫姓名'
      hasError = true
    }

    if (!user.email) {
      newError.email = '請填寫Email'
      hasError = true
    }

    if (hasError) {
      setError(newError)
      return
    }
  }

  return (
    <>
      <style jsx>
        {`
          .error {
            color: red;
            font-size: 10px;
          }
        `}
      </style>
      <h1>註冊表單輸入與驗證</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            姓名：{''}
            <input
              type="text"
              name="fullname"
              value={user.fullname}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{error.fullname}</div>
        <div>
          <label>
            Email：{''}
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{error.email}</div>
        <div>
          <label>
            密碼：{''}
            <input
              type={show ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleFieldChange}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={show}
              onChange={(e) => {
                setShow(e.target.checked)
              }}
            />
            顯示密碼
          </label>
        </div>
        <div>
          <label>
            密碼確認：{''}
            <input
              type={show2 ? 'text' : 'password'}
              name="password2"
              value={user.password2}
              onChange={handleFieldChange}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={show2}
              onChange={(e) => {
                setShow2(e.target.checked)
              }}
            />
            顯示密碼
          </label>
        </div>
        <div>
          <button type="submit">提交</button>
        </div>
      </form>
    </>
  )
}
