import React from "react";
import './ListTodo.scss'
import AddTodoComponent from "./AddTodoComponent";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {

    state = {
        listTodo: [
            { id: "todo1", title: "Doing homework" },
            { id: "todo2", title: "Playing game" },
            { id: "todo3", title: "Watching TV" }
        ]
    }
    addTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("Wow so easy!");
    }
    render() {
        let { listTodo } = this.state;

        return (
            <div className="list-todo-container">
                <AddTodoComponent
                    addTodo={this.addTodo} />
                <div className="list-todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1} - {item.title}</span><> </>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;