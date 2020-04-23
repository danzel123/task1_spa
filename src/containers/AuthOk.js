import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../actions/autorization"
import AuthOk from "../components/AuthOk";

const mapStateToProps = ({App}) => ({

});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(authActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthOk)