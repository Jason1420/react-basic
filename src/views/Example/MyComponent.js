import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';


class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: "abc", title: "Developer", salary: 500 },
            { id: "xyz", title: "Designer", salary: 700 },
            { id: "asz", title: "Tester", salary: 600 }
        ]

    }
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }
    render() {
        console.log(`>>> state: `, this.state);
        return (
            <>
                <AddComponent addNewJob={this.addNewJob}
                />
                <ChildComponent jobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob} />
            </>
        )
    }
}

export default MyComponent;