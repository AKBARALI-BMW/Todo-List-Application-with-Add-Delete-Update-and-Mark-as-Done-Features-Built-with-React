import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Todo({ ToDo, markDone, deleteTask, setUpdateData }) {
    return (
        <>
            {ToDo.sort((a, b) => a.id > b.id ? 1 : -1).map((task, index) => {
                return (
                    <React.Fragment key={task.id}>
                        <div className='col taskbg'>
                            <div className={task.Status ? "done" : ""}>
                                <span className='taskNumber'>{index + 1}</span>
                                <span className='taskText'>{task.Title}</span>
                            </div>
                            <div className='icon_Wrap'>
                                <span title='Complete/Incomplete' onClick={() => markDone(task.id)}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                                {!task.Status && (
                                    <span title='Edit' onClick={() => setUpdateData({ id: task.id, Title: task.Title, Status: task.Status })}>
                                        <FontAwesomeIcon icon={faPen} />
                                    </span>
                                )}
                                <span title='Delete' onClick={() => deleteTask(task.id)}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </span>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default Todo;
