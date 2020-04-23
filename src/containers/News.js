import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as menuActions from "../actions/menu"
import News from "../components/News";

const mapStateToProps = ({App}) => ({

});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(menuActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(News)

