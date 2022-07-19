import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TodoCard from '../components/TodoCard'

const TodoList = () => {
    const navigate = useNavigate()

    let arrTodos = JSON.parse(localStorage.getItem("arrTodos")) || []
    // const [todos, setTodos] = useState([])

    const [todoItem, setTodoItem] = useState('')
    const [itemId, setItemId] = useState(0)

    useEffect(() => {
        const auth = localStorage.getItem("isAuth")
        if (auth !== "true") {
            navigate("/login")
            // alert("You are no")
        }
    }, [])
    const onSubmitTodoForm = e => {
        e.preventDefault();

        const obj = {
            todo: todoItem,
            id: itemId + 1
        }
        arrTodos.push(obj)
        localStorage.setItem("arrTodos", JSON.stringify(arrTodos))
        setTodoItem("")
        // console.log(todoItem)
        // $("#todoAddModal").modal('hide')
    }

    const onLogout = () => {
        localStorage.setItem("isAuth", "false")
        navigate("/login")
    }
    return (
        <div className='container'>
            <button data-bs-toggle="modal" data-bs-target="#todoAddModal" className='btn btn-success btn-sm'>Add</button>
            <button  className='btn btn-danger btn-sm' onClick={onLogout}>Logout</button>
            <div className="card" style={{ width: '18rem' }}>
                <ul className="list-group list-group-flush">

                    {arrTodos.length > 0 && arrTodos.map(item => (
                        <TodoCard key={item.id + "itemTodo"} id={item.id} todo={item.todo} />

                    ))}
                </ul>
            </div>




            <div className="modal fade" id="todoAddModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form onSubmit={onSubmitTodoForm}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text"
                                        className="form-control" value={todoItem}
                                        onChange={e => setTodoItem(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList