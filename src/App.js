import React from 'react';
import axios from 'axios';
import TodosTable from './components/TodosTable';
import NewTodoForm from './components/NewTodoForm';
import EditTodoForm from './components/EditTodoForm';
import todosdata from './data/todos.json';
import './App.css';
function App() {
  const remotebaseUrl="https://gtecktodoapi.herokuapp.com/api/todos";
  const localbaseUrl="http://localhost:8080/api/todos/";
  const [isLoading,setIsLoading]=React.useState(true);
  const [edit,setEdit]=React.useState(false);
  // const [users,setUsers]=React.useState(users_data);
   const [todos,setTodos]=React.useState([]);
  const initCurrentTodo={id:null,title:"", details:"",isCompleted:false
};
  const [currentTodo,setCurrentTodo]=React.useState(initCurrentTodo);
  
  React.useEffect(() => {
   
    getTodos();
  }, [])
 const getTodos=()=>{
   setIsLoading(true);
   
   axios.get(remotebaseUrl).then(result=>{
    
     const data=result.data.data;

    setTodos(data);
    setIsLoading(false);
   })
 }
  const addTodo=(new_todo)=>{
  
    console.log("new_todo:"+JSON.stringify(new_todo));
    axios.post(remotebaseUrl,new_todo).then(todo=>{
      console.log("Todo is save successfully ...");
    getTodos();
   }).catch(err=>{
     console.log("err"+err);
   });
  };
  const cancelEditMode=()=>{
    
    setEdit(false);
  };
  const setEditMode=(todo)=>{
    setEdit(true)
    console.log("currentTodo",todo);
   // setCurrentUser(user);
    setCurrentTodo(todo);
  };
 const deleteTodo=(id)=>{
  
  axios.delete(remotebaseUrl+id).then((deltetedCoupon)=>{
    getTodos();
   }).catch((err)=>{
    getTodos();
     //console.log("err:"+err);
   });
 };
 const updateTodo=(new_todo)=>{
   console.log("updateTodo is get called");
   axios.put(remotebaseUrl,new_todo)
   .then(uddatedTodo=>{
    
    getTodos();
    cancelEditMode();
   })
   .catch(e=>{
     console.log("error in updating todo"+e);
   });
  
 }
  return (
    
    <main className='container'>
     
    <div className='flex-row'>
      
        {edit?
        (
        
         <EditTodoForm cancelEditMode={cancelEditMode} updateTodo={updateTodo} currentTodo={currentTodo}/>
        
        )
         :
         (
            
              <NewTodoForm addTodo={addTodo}/>
           
         )
        }

      {/* <div className="flex-large"> */}
       
          {isLoading?(<div>Loading data</div>):
         (
           <TodosTable   todos={todos} setEditMode={setEditMode} deleteTodo={deleteTodo} edit={edit} cancelEditMode={cancelEditMode}/>)
         }
           
      {/* </div> */}
    </div>
   
    </main>
  );
}

export default App;
