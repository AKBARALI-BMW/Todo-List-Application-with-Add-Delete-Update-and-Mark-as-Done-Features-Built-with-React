import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTaskForm from './Compounts/AddTaskForm';
import Todo from './Compounts/Todo';
import UpdateForm from './Compounts/UpdateForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 



function App() {
  const [ToDo, setToDo] = useState([
    { id: 1, Title: "Task_1", Status: false },
    { id: 2, Title: "Task_2", Status: false }
  ]);

  const [UpdateData, setUpdateData] = useState(''); // Corrected state name
  const [NewTask, setNewTask] = useState('');

  const addTask = () => {
    if (NewTask) {
      let num = ToDo.length + 1;
      let newEntry = { id: num, Title: NewTask, Status: false };
      setToDo([...ToDo, newEntry]);
      setNewTask("");
    }
  }

  const deleteTask = (id) => {
    let newTasks = ToDo.filter(task => task.id !== id);
    setToDo(newTasks);
  }

  const markDone = (id) => {
    let newTasks = ToDo.map(task => {
      if (task.id === id) {
        return { ...task, Status: !task.Status };
      }
      return task;
    });
    setToDo(newTasks);
  }

  const cancelUpdate = () => {
    setUpdateData('');
  }
  const changeTask = (event) => {
    let newEntry = {
      id: UpdateData.id,
      Title: event.target.value,
      Status: UpdateData.Status
    }
    setUpdateData(newEntry);
  }
  const updateTask = () => {
    let filteredTasks = [...ToDo].filter(task => task.id !== UpdateData.id);
    let updatedTasks = [...filteredTasks, UpdateData];
    setToDo(updatedTasks);
    setUpdateData('');
  }

  return (
    <div className="container App">
      <h1>To Do List App (ReactJs)</h1>

      {UpdateData && UpdateData ? (
        <UpdateForm
          UpdateData={UpdateData}
          changeTask={changeTask}
          cancelUpdate={cancelUpdate}
          updateTask={updateTask}
        />
      ) : (
        <AddTaskForm
          NewTask={NewTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {ToDo && ToDo.length ? '' : 'No Task Found...'}

      <Todo
        ToDo={ToDo}
        markDone={markDone}
        deleteTask={deleteTask}
        setUpdateData={setUpdateData}
      />
    </div>
  );
}

export default App;
