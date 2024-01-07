import React from 'react'


function TaskListItem({item, editTask, removeTask}) {
  return (
    <>
    <li className="list-group-item" 
                key={item.uuid}>
                    {item.priority && <span className="badge text-bg-warning me-2">Önemli</span>}
                    {item.task} 
                    <div className="btn-group float-end" role="group">

                        <button onClick={()=>editTask(item.uuid)} 
                        className="btn btn-sm btn-success float-end">Güncelle</button>

                        <button onClick={()=>removeTask(item.uuid)} 
                        className="btn fbtn-sm btn-danger float-end">Kaldır</button>
                    </div>
                </li>
    </>
  )
}

export default TaskListItem
