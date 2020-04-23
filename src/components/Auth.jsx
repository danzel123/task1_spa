import React from "react";
import * as PropTypes from "prop-types";
import "./Auth.css"
import {Redirect} from "react-router";

export class AuthForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangePassword(e) {
        this.setState({password: e.target.value});
    }

    onChangeLogin(e) {
        this.setState({login: e.target.value});
    }

    onSubmit(e) {

        this.props.checkAuth(this.state.login, this.state.password)
        //return                     <Redirect push to="/home" />
    }
    render() {
            return (
                <div className={"content-box"}>
                    <form onSubmit={this.onSubmit} method="GET">
                        <h2>Форма входа</h2>
                        <label>Логин<input type="login" name="login" id="login" value={this.state.login}
                               onChange={this.onChangeLogin}/></label>
                        <label>Пароль<input type="password" name="password" id="password" value={this.state.password}
                               onChange={this.onChangePassword}/></label>
                        <button type="submit">Ок</button>
                    </form>

                </div>
            )
        }
}

AuthForm.propTypes = {checkAuth: PropTypes.any}

export default AuthForm