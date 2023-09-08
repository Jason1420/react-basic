import React from "react";
import axios from "axios";
import './User.scss'
import { withRouter } from "react-router-dom/cjs/react-router-dom";
class ListUser extends React.Component {
    state = {
        listUser: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleViewUserDetail = (user) => {
        this.props.history.push(`user/${user.id}`)
    }
    render() {
        let { listUser } = this.state;

        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list user
                </div>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => this.handleViewUserDetail(item)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        )
    }
}
export default withRouter(ListUser);