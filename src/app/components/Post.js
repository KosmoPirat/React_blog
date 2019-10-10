import React, { Component } from 'react'
import { connect } from 'react-redux';

import CommentsList from './CommentsList'

import { fetchPostComments } from "../actions/commentsActions";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentVisibility: false,
            btnTextShow: 'Показать комментарии',
            btnTextHide: 'Скрыть комментарии',

        };
        this.showHideComment = this.showHideComment.bind(this);
    }

    showHideComment() {
        this.setState({commentVisibility: !this.state.commentVisibility});
    }


    componentDidMount() {
        this.props.dispatch(fetchPostComments(this.props.id))
    }

    render() {
        return (
            <div className="card border-secondary mb-3">
                <h5 className="card-header">{this.props.title}</h5>
                <div className="card-body text-secondary">
                    <div className="border-bottom pb-3">{this.props.body}</div>
                </div>
                {this.state.commentVisibility ? <CommentsList comments={this.props.comments} /> : null}
                <button onClick={this.showHideComment} className="btn btn-dark">
                        {this.state.commentVisibility ? this.state.btnTextHide: this.state.btnTextShow}
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments,
    };
};

export default connect(mapStateToProps)(Post);
