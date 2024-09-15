function AddTaskForm({ NewTask, setNewTask, addTask }) {
    return (
        <>
            <div className='row'>
                <div className='col'>
                    <input
                        className='form-control form-control-lg'
                        value={NewTask}
                        onChange={(e) => { setNewTask(e.target.value) }}
                        placeholder='Enter your Task'
                    />
                </div>
                <div className='col-auto'>
                    <button className='btn btn-lg btn-success' onClick={addTask}>Add Task</button>
                </div>
            </div> <br />
        </>
    )
}

export default AddTaskForm;
