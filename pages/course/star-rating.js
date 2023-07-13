import { useState } from 'react'

export default function StarRating() {
  // 紀錄分數 0~5
  const [rating, setRating] = useState(0)
  // 滑鼠hover紀錄分數專用狀態
  const [hover, setHover] = useState(0)

  return (
    <>
      <h1>星星評分範例</h1>
      {Array(5)
        .fill(1)
        .map((v, i) => {
          // 每個星星的分數
          const score = i + 1

          return (
            <button
              key={i}
              // 分數<=目前評分狀態的星星圖示，全部都要亮起
              className={score <= rating || score <= hover ? 'on' : 'off'}
              onClick={() => {
                setRating(score)
              }}
              onMouseEnter={() => {
                //暫時設定為某點亮狀態
                setHover(score)
              }}
              onMouseLeave={() => {
                // 恢復原本初始狀態
                setHover(0)
              }}
            >
              &#9733;
            </button>
          )
        })}
      <span>你選了{rating}分</span>
      {/* 以下用style-jsx語法套用本元件專用樣式 */}
      <style jsx>
        {`
          button {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer:
          }
          .on {
          color: gold;
          }

          .off {
          color: gray;
          }
        `}
      </style>
    </>
  )
}
