import React, { Component } from 'react'
import Comment from './Comment';

export default class CommentsList extends Component {
    render() {
        if (!this.props.comments.length) {
            return null;
        }

        const comments = this.props.comments.map((comment, index) => {
            return <Comment key={index} {...comment} />
        });

        return (
            <div>
                <h6 className="text-center">Комментарии к посту</h6>
                <div className="overflow-auto" style={{height: "200px"}}>{comments}</div>
            </div>
        )
    }
}
