function UpdateForm({ UpdateData, changeTask, cancelUpdate, updateTask }) {
    return (
        <>
            <div className='row'>
                <div className='col'>
                    <input
                        value={UpdateData && UpdateData.Title}
                        onChange={(e) => changeTask(e)}
                        className='form-control form-control-lg'
                    />
                </div>
                <div className='col-auto'>
                    <button className='btn btn-lg btn-success mr-20' onClick={updateTask}>Update</button>
                    <button className='btn btn-lg btn-warning ms-2' onClick={cancelUpdate}>Cancel</button>
                </div>
            </div> <br />
        </>
    )
}

export default UpdateForm;
