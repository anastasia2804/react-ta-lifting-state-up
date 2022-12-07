import './App.css';
import { useState } from 'react';
import Summary from './components/Summary';
import Task from './components/Task.js'

function App() {

  const [initialTasks, setInitialTasks] = useState([
    {
      _id: "1a",
      name: "Task1",
      description: "Do something important",
      isDone: false                                   
    },
    {
      _id: "2b",
      name: "Task2",
      description: "Do something important",
      isDone: false                                    
    },
    {
      _id: "3c",
      name: "Task3",
      description: "Do something important",
      isDone: true                                    
    }
  ]);

  return (
    <div className="App">
    <Summary initialTasks={initialTasks}/>
      {initialTasks.map(singleTask => {
        return (
          <Task task={singleTask} 
          initialTasks={initialTasks} 
          setInitialTasks={setInitialTasks}/>
        );
      })}
    </div>
  );
}

export default App;