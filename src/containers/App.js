import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../actions/autorization"
import App from "../components/App";

const mapStateToProps = ({App}) => ({
    authBool: App.isAuth,

});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(authActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)