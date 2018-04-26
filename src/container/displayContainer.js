import Display from '../components/display';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    return {
        fetch: state.fetch,
        data: state.data,
        error: state.error
    }
}

const DisplayContainer = connect(mapStateToProps)(Display)

export default DisplayContainer;