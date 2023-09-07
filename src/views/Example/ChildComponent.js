import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDelete = (item) => {
        this.props.deleteAJob(item)
    }
    render() {
        let { jobs } = this.props;
        let { showJobs } = this.state;
        let check = (showJobs === true) ? ">>>>showJob : true" : ">>>>showJob : false";
        return (
            <>
                {console.log(check)}
                {showJobs === false ?
                    <div><button onClick={this.handleShowHide}>Show</button></div>
                    :
                    <>
                        <div>
                            <div className='job-list'>
                                {jobs.filter(item => item.salary >= 600)
                                    .map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - ${item.salary}
                                                <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                        <div><button onClick={this.handleShowHide}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;