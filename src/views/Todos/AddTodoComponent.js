import React from "react";
import { toast } from 'react-toastify';
class AddTodoComponent extends React.Component {
    state = {
        title: ""
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = (event) => {
        if (!this.state.title) {
            toast.error("Missing title")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addTodo(todo);
        this.setState({
            title: ""
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text"
                    onChange={(event) => this.handleOnChangeTitle(event)} />
                <button type="button" className="add"
                    onClick={(event) => this.handleAddTodo(event)}>Add</button>
            </div>
        )
    }
}

export default AddTodoComponent;