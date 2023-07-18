import React from 'react'
import Item from './item'
import EditForm from './edit-form'

export default function List({
  todos,
  handleToggleCompleted,
  handleToggleEditing,
  handleRemove,
  handleUpdateText,
}) {
  return (
    <>
      <ul>
        {todos.map((v) => {
          const { id, completed, text, editing } = v
          return editing ? (
            <EditForm
              key={id}
              id={id}
              text={text}
              handleUpdateText={handleUpdateText}
            />
          ) : (
            <Item
              key={id}
              id={id}
              completed={completed}
              text={text}
              handleToggleCompleted={handleToggleCompleted}
              handleToggleEditing={handleToggleEditing}
              handleRemove={handleRemove}
            />
          )
        })}
      </ul>
    </>
  )
}
