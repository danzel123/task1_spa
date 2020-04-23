import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../actions/autorization"
import * as menuActions from "../actions/menu"
import App from "../components/App";

const mapStateToProps = ({App}) => ({
    authBool: App.isAuth,
    activeItem: App.activeItemMenu

});



const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(authActions, dispatch),
    ...bindActionCreators(menuActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)