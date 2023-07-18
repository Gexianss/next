import styles from './todo.module.css'

export default function FilterButton({ type, setType }) {
  const typeOptions = ['所有項目', '進行中的項目', '已完成的項目']

  return (
    <>
      {typeOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={type === v ? styles['active-btn'] : styles['normal-btn']}
            onClick={() => {
              setType(v)
            }}
          >
            {v}
          </button>
        )
      })}
      <button
        className={styles['del-btn']}
        onClick={() => {
          //todo
        }}
      >
        刪除所有完成項目
      </button>
    </>
  )
}
