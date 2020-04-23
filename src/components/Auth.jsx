import React from "react";
import * as PropTypes from "prop-types";
import "./Auth.css"

//Дид маунты для испрвления бага с некоректной активной ссылкой

export class AuthForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };
    }

    componentDidMount() {
        this.props.changeItem('auth')
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
                <div className={"content-box"}>
                    <form onSubmit={this.onSubmit.bind(this)} method="GET">
                        <h2>Форма входа</h2>
                        <label>Логин<input type="login" name="login" id="login" value={this.state.login}
                               onChange={this.onChangeLogin.bind(this)}/></label>
                        <label>Пароль<input type="password" name="password" id="password" value={this.state.password}
                               onChange={this.onChangePassword.bind(this)}/></label>
                        <button type="submit">Ок</button>
                    </form>

                </div>
            )
        }
}

AuthForm.propTypes = {checkAuth: PropTypes.any}

export default AuthForm