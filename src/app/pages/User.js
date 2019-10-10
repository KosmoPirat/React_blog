import React, { Component } from 'react'
import { connect } from 'react-redux';

import UserProfile from '../components/User';
import PostList from '../components/PostsList'

import { fetchUser } from "../actions/usersActions";
import { fetchUserPosts } from "../actions/postsActions";

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex flex-column">
                <div className="user__wrap">
                    <UserProfile  {...this.props.users} />
                </div>
                <div className="posts__wrap">
                    <PostList  posts={this.props.posts}  userName={this.props.users.name}/>
                </div>

            </div>
        )
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.props.dispatch(fetchUser(userId));
        this.props.dispatch(fetchUserPosts(userId));
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        posts: state.posts.posts,
        comments: state.comments.comments,

    };
};

export default connect(mapStateToProps)(User);
