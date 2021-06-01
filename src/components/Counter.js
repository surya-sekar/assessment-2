import React from 'react'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter, resetCounter } from '../components/redux'

function Counter(props) {

    const btnSpace = {
        marginLeft: '20px'
    }

    const container = {
        padding: '15%'
    }

    return (
        <div className='container' style={container}>
            <h2>Count {props.count}</h2>
            <button className='btn btn-info' style={btnSpace} onClick={props.decreaseCounter}>-</button>
            <button className='btn btn-secondary' style={btnSpace} onClick={props.resetCounter}>Reset</button>
            <button className='btn btn-info' style={btnSpace} onClick={props.increaseCounter}>+</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return{
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter()),
        resetCounter: () => dispatch(resetCounter())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Counter);
