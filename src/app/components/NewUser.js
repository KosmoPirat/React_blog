import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addUser } from "../actions/usersActions";

class NewUser extends Component {

    constructor(props) {
        super(props);

        this.addUser = this.addUser.bind(this);

        this.nameRef = React.createRef();
        this.usernameRef = React.createRef();
        this.emailRef = React.createRef();
        this.phoneRef = React.createRef();
        this.websiteRef = React.createRef();
    }

    addUser() {
        // Добавление пользователя
        const userData = {
            id: this.props.users.length + 1,
            name: this.nameRef.current.value,
            username: this.usernameRef.current.value,
            phone: this.phoneRef.current.value,
            website: this.websiteRef.current.value,
            email: this.emailRef.current.value,
        };

        this.props.dispatch(addUser(userData));
        this.nameRef.current.value = '';
        this.usernameRef.current.value = '';
        this.phoneRef.current.value = '';
        this.websiteRef.current.value = '';
        this.emailRef.current.value = '';
    }

    render() {
        return (
            <div className="card border-secondary mb-3 mt-5">
                <div className="card-header d-flex justify-content-between">
                    <h5 className="pt-2">Новый пользователь</h5>
                    <button onClick={this.addUser} className="btn btn-primary">Добавить пользователя</button>
                </div>
                <div className="card-body text-secondary">

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Имя</span>
                        </div>
                        <input type="text" ref={this.nameRef} className="form-control" placeholder="Введите ФИО"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Имя пользователя</span>
                        </div>
                        <input type="text" ref={this.usernameRef} className="form-control" placeholder="Введите имя пользователя (Nickname)"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Email</span>
                        </div>
                        <input type="email" ref={this.emailRef} className="form-control" placeholder="Введите email (user@yourdomain.ru)"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Телефон</span>
                        </div>
                        <input type="tel" ref={this.phoneRef} className="form-control" placeholder="Введите телефон"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Сайт</span>
                        </div>
                        <input type="еуче" ref={this.websiteRef} className="form-control" placeholder="Введите Ваш сайт"/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
    };
};

export default connect(mapStateToProps)(NewUser);