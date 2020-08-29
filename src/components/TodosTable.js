import React from 'react';
const TodosTable=(props)=>{
    const {setEditMode,deleteTodo,edit,todos}=props;

const handleButtonClick=(e, todo)=>{
    e.preventDefault();
    switch (e.target.name) {
    case 'edit':
        setEditMode(todo);
        break;
    case 'delete':
        
        deleteTodo(todo._id);
        break;
    default:break;
    }
}
 return (
     <div className="container card card-flat">
    <div className="card-header">
        <h5 className="card-title">
            Todos List
        </h5>
    </div>
    <div className="card-body">
    <table className="table">
        <thead>
            <tr>
            <th>
                Title
            </th>
            <th>
                Description
            </th>
            <th>
                Completed                 
            </th>
            
            </tr>
        </thead>
        <tbody>
            {
                todos.map(todo=>(
                    <tr key={todo.id}>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>
                        <td>{todo.isCompleted?'Yes':'No'}</td>
                        <td>
                        <button onClick={(e)=>{handleButtonClick(e,todo)}} className='btn-primary' name='edit' disabled={edit}>Edit
                        </button>
                        </td>
                        <td> 
                        <button onClick={(e)=>{handleButtonClick(e,todo)}} className='btn-primary' name='delete' disabled={edit}>Delete
                        </button></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </div>
    </div>
    );
    
}
export default TodosTable;