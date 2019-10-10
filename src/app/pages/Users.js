import React, { Component } from 'react'
import { connect } from 'react-redux';

import UsersList from '../components/UsersList';
import NewUser from "../components/NewUser";

import { fetchUsers } from "../actions/usersActions";

class Users extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        return (
            <>
                <NewUser/>
                <UsersList users={this.props.users} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        posts: state.posts.posts,
        comments: state.comments.comments,

    };
};

export default connect(mapStateToProps)(Users);
