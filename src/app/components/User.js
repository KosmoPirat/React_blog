import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class User extends Component {

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        const userName = this.isActive(`/React_blog/users/${this.props.id}`) ?
            <h5>{this.props.username}</h5> :
            <Link to={`users/${this.props.id}`}>
                {this.props.username}
            </Link>;
        return (
            <>
                <div className="card border-secondary mb-3 mt-3">
                    <div className="card-header">
                        {userName}
                    </div>
                    <div className="card-body text-secondary">
                        <p className="text-dark"><span className="text-secondary">Имя: </span> {this.props.name}</p>
                        <p className="text-dark"><span className="text-secondary">Email: </span>Email: {this.props.email}</p>
                        <p className="text-dark"><span className="text-secondary">Телефон: </span>Телефон: {this.props.phone}</p>
                        <p className="text-dark"><span className="text-secondary">Сайт: </span> {this.props.website}</p>
                    </div>
                </div>
            </>
        )
    }
}
