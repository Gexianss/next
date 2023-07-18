//導入css module
import styles from '../todo.module.css'

export default function Item({
  id,
  completed,
  text,
  handleToggleCompleted,
  handleToggleEditing,
  handleRemove,
}) {
  return (
    <>
      {/* 以completed狀態來切換呈現樣式 */}
      <li className={completed ? styles.completed : styles.active}>
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => {
              handleToggleCompleted(id)
            }}
            name="check"
            id={`check${id}`}
            // className="form-control"
          />
          <label for={`check${id}`}>{text}</label>
          &nbsp;
          <button
            onClick={() => {
              handleToggleEditing(id)
            }}
          >
            編輯
          </button>
          &nbsp;
          <button
            onClick={() => {
              handleRemove(id)
            }}
          >
            X
          </button>
        </div>
      </li>
    </>
  )
}
