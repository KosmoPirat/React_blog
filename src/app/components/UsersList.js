import React, { Component } from 'react'
import User from './User';

export default class UsersList extends Component {

  render() {
    if (!this.props.users.length) {
      return null;
    }

    const users = this.props.users.map(user => {
      return <User key={user.id} {...user} />
    });

    return (
      <div>
        <h1>Пользователи</h1>
        {users}
      </div>
    );
  }

}
