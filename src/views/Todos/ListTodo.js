import React from "react";
import './ListTodo.scss'
import AddTodoComponent from "./AddTodoComponent";
import { toast } from 'react-toastify';
import Color from "../HOC/Color";
class ListTodo extends React.Component {

    state = {
        listTodo: [
            { id: "todo1", title: "Doing homework" },
            { id: "todo2", title: "Playing game" },
            { id: "todo3", title: "Watching TV" }
        ],
        editTodo: {}
    }
    addTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("Add success");
    }
    deleteTodo = (todo) => {
        let currentList = this.state.listTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentList
        })
        toast.success("Delete success")
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo];

            let objIndex = listTodoCopy.findIndex((obj => obj.id === todo.id));

            listTodoCopy[objIndex].title = editTodo.title
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success("Update succeed")
            return;
        }
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEditTodo = (event) => {

        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <div className="list-todo-container">
                <p>ListTodo app</p>
                <AddTodoComponent
                    addTodo={this.addTodo} />
                <div className="list-todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        : <> {editTodo.id === item.id ?
                                            <span>
                                                {index + 1} - <input value={editTodo.title}
                                                    onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                            </span>
                                            : <span>{index + 1} - {item.title}</span>
                                        }
                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ? "Save" : "Edit"}
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.deleteTodo(item)}>Delete</button>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        )
    }
}

export default Color(ListTodo);