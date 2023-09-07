import React from "react";

class AddComponent extends React.Component {

    state = {
        title: "",
        salary: "",
    }

    handleOnChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert(`Missing require params`)
            return;
        }
        console.log(`>>> state:`, this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ""
        })
    }


    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleOnChangeTitleJob(event)} />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleOnChangeSalary(event)} /><br /><br />
                <input type="submit" value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }

}

export default AddComponent;