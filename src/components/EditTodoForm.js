import React,{useState,useEffect} from 'react'

const EditTodoForm= (props) =>{
    
    const {cancelEditMode,updateTodo
        ,currentTodo}=props;
    const [completed,setCompleted]=useState(currentTodo.isCompleted);
    const [editTodo,setEditTodo]=useState(currentTodo);
    useEffect(()=>{
        setEditTodo(currentTodo);
    },[props])
    const handleButtonClick=(e)=>{
       
      e.preventDefault();
     switch (e.target.name) {
        
         case "submit":
             editTodo.isCompleted=completed;
            updateTodo(editTodo)
             
             break;
        case "cancel":
              console.log("cancel");
              cancelEditMode();
            break;
        case "title":
                   setEditTodo({...editTodo,[e.target.name]:e.target.value});
                   break;
        case "description":
                    setEditTodo({...editTodo,[e.target.name]:e.target.value});
                    break;
        case "isCompleted":
       
            let complete=!completed;
               setCompleted(complete);

            break;
           
     }
    }
    return (
        <div className="card card-flat">
            <div className="card-header">
                <h5 className="card-title">Edit Todo</h5>
            </div>
        <div className="card-body">
         <form className="form-horizontal">
           <div className="form-group">
            <label>Name:</label>
            <input className="form-control" type='text' name='title' value={editTodo.title} onChange={(e)=>{ handleButtonClick(e)}} />
            </div>
        <div className="form-group">
            <label>description:</label>
            <input className="form-control" type='text' name='description' value={editTodo.description} onChange={(e)=>{ handleButtonClick(e)}}  />
        </div> 
       <div className="form-group">
       <label>Is Completed:</label>
       <input className="btn-default" type="button" name="isCompleted" value={completed?'Yes':'No'} onClick={(e)=>{ handleButtonClick(e)}}/>
       </div>
            <button className="btn-primary" onClick={(e)=>{handleButtonClick(e)}} name="submit">Submit</button>
            &nbsp;
            <button  className="btn-primary" onClick={(e)=>{handleButtonClick(e)}} name="cancel">Cancel</button>
        </form>
        </div>
        </div>
        );
        
}

export default EditTodoForm;