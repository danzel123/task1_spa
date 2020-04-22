import React from "react";
import * as PropTypes from "prop-types";
import {checkAuth} from "../actions/autorization";

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

    }
    render() {
            return (
                <form onSubmit={this.onSubmit}>
                    <input type="login" name="login" id="login" value={this.state.login}
                           onChange={this.onChangeLogin}/>
                    <input type="password" name="password" id="password" value={this.state.password}
                           onChange={this.onChangePassword}/>
                    <button type="submit">Ок</button>
                </form>
            )
        }
}

AuthForm.propTypes = {checkAuth: PropTypes.any}

export default AuthForm