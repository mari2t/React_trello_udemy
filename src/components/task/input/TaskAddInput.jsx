import React from 'react'
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {
  const handleSubmit = (e) => {
    const taskId = uuid()
    e.preventDefault()
    if(inputText === "")
    return
    //カードを追加する
    setTaskList([...taskList,
    {
      text: inputText,
      id: taskId,
      draggableId: `task-${taskId}`
    }
    ])
    setInputText("")
  } 
  const handleChange = (e) => {
    setInputText(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='taskAddInput' 
        type="text" 
        placeholder='add a task' 
        onChange={handleChange}
        value={inputText} /></form>
    </div>
  )
}
