import {connect} from "react-redux";
import Indexes from "./Indexes";

const mapStateToProps = (state) => {
    return{
        temperature: state.state.temperature,
        chargeLevel: state.state.chargeLevel
    }
}

const IndexesContainer = connect(mapStateToProps)(Indexes)

export default IndexesContainer
