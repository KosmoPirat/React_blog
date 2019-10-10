import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div>
                <div className="card-body text-secondary small border-bottom">
                    <p className="text-dark"><span className="text-secondary">Имя: </span> {this.props.name}</p>
                    <p className="text-dark"><span className="text-secondary">Email: </span>Email: {this.props.email}</p>
                    <p className="text-dark">{this.props.body}</p>
                </div>
            </div>
        )
    }
}
