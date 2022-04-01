import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
    render() {

        return (
            <div className='player'>
                <div className='attack'>
                    <img style={{ transform: 'rotate(100deg)' }} width={50} height={50} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt="..." />
                </div>
                <div className='speech-bubble'></div>
                <img width={200} height={200} src="./img/gameOanTuXi/player.png" alt="..." />
                <div className='row'>

                    {this.props.mangDatCuoc.map((item, index) => {

                        let border = {}

                        if (item.datCuoc) {
                            border = { border: '4px solid orange' };
                        }

                        return <div className='col-4' key={index} >
                            <button onClick={() => {this.props.datCuoc(item.ma)}} className='btnItem' style={border}>
                                <img width={50} height={50} src={item.hinhAnh} alt="..." />
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangDatCuoc: rootReducer.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            const action = {
                type: 'CHON_ITEM',
                maCuoc
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)