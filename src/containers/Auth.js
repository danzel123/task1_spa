import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../actions/autorization"
import Auth from "../components/Auth";

const mapStateToProps = ({App}) => ({
    authBool: App.isAuth,
    login: App.login,
    password: App.password

});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(authActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)