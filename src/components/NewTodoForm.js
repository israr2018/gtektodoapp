import React  from 'react';
const NewTodoForm =(props)=>{
    const {addTodo}=props;
    const INITIAL_VALUES={
       
        title:"",
        description:" ",
        isCompleted:false
    };
    const [todo,setTodo]=React.useState(INITIAL_VALUES);
    const handleSubmit=(e)=>{
        
        e.preventDefault();
         if(!todo.title & !todo.description) return;
        addTodo(todo);
       
        setTodo(INITIAL_VALUES);
    }
    const handleInputChange=(e)=>{
        // destructure the array and get name and value property
        
       const {name,value}=e.target;
       
       //update specific field of the todo
   
        setTodo({...todo,[name]:value});
         //    setTodo({...todo,[e.target.name]:e.target.value});
      
    }
return (
    <div className="card card-flat">
    <div className="card-header">
        <h5 className="card-title">
            Add New Todo
        </h5>
    </div>
    <div className="card-body">
    <form className="form-horizontal">
        
        <div className="form-group">
        <label>Title:</label>
        <input className="form-control" type='text' name='title' value={todo.title} onChange={handleInputChange}></input>
        </div>
        <div className="form-group">
        <label> Description</label>
        <input className="form-control" type='text' name='description' value={todo.description} onChange={handleInputChange}></input>
        </div>
       
        <input type='submit' onClick={handleSubmit} value='Submit'  className="btn-primary"
        />
    </form>
    </div>
    </div>
);
}

export default NewTodoForm;