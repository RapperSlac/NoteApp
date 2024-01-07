import React, {useEffect, useState} from "react";
import TaskListItem from "./TaskListItem";

function TaskList({ tasks, removeTask, editTask}) {
    const [priority, setPriority]=useState(false)
    const [filteredTasks, setFilteredTasks]=useState(tasks)
    
    function handlePriorityFilter(){
        setPriority(prev=>!prev);

    }

    useEffect(() =>{
        setFilteredTasks(tasks)
    },[tasks])

    useEffect(()=>{
        priority?setFilteredTasks(tasks.filter(
            item=>item.priority===priority)):setFilteredTasks(tasks)

    },[priority])


  return (
    <>
        <div className="p-4 bg-light mb-5 border-rounded">
            <p className="lead"> Yapılacaklar 
            <span 
            onClick={handlePriorityFilter} 
            className={`btn btn-sm ${!priority?"btn-info":"btn-primary"} float-end`}>
                {!priority ? "Önemli olanları göster": "Tümünü Göster" }
            </span>
            </p>
            <ul className='list-group my-3'>
                {filteredTasks.map(
                    (item, index) => 
                        <TaskListItem key={index} 
                        item={item}
                        editTask={editTask} 
                        removeTask={removeTask}/>)}
            </ul>
        </div>
    </>
  );
}

export default TaskList;
