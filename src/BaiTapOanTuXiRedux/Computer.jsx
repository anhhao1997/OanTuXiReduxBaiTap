import React, { Component } from 'react'
import { connect } from 'react-redux'
class Computer extends Component {
    render() {
        return (
            <div className='player'>
                <div className='attack'>
                    <img style={{ transform: 'rotate(100deg)' }} width={50} height={50} src={this.props.computer.hinhAnh} alt="..." />
                </div>
                <div className='speech-bubble'></div>
                <img width={200} height={200} src="./img/gameOanTuXi/playercomputer.png" alt="..." />
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        computer: rootReducer.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)