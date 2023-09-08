import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/image/logo.png'
import './Home.scss'
import { connect } from "react-redux";
class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render() {
        let listUser = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world from Homepage!
                </div>
                <img src={logo} />
                {listUser && listUser.length > 0 &&
                    listUser.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name}
                                <span onClick={() => this.handleDeleteUser(item)}>x</span>
                            </div>

                        )
                    })}
                <button type="button" onClick={() => this.handleCreateUser()}>Add</button>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));