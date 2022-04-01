import React, { Component } from 'react'
import { connect } from 'react-redux'
class InfoGamePlay extends Component {
  render() {
    return (
      <div className='text-danger mt-2'>
        <div className='title display-4'>
          <p>Game oẳn tù xì</p>
        </div>
        <div className='info'>
          <p className='text-success'>{this.props.ketQua}</p>
          <p className='text-info'>Số bàn thắng: {this.props.soBanThang}</p>
          <p className='text-primary'>Tổng số bàn chơi: {this.props.soBanChoi}</p>
        </div>
        <button className='btn btn-danger text-white p-3' style={{ fontSize: '25px' }} onClick={() => { this.props.playRandom() }}>Play game</button>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    ketQua: rootReducer.BaiTapOanTuXiReducer.ketQua,
    soBanThang: rootReducer.BaiTapOanTuXiReducer.soBanThang,
    soBanChoi: rootReducer.BaiTapOanTuXiReducer.soBanChoi
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playRandom: () => {
      let count = 0;

      let randomComputer = setInterval(() => {
        const action = {
          type: 'PLAY_RANDOM'
        }
        dispatch(action)
        count++;
        if (count > 15) {
          clearInterval(randomComputer)
          dispatch({
            type: 'KET_QUA'
          })
        }
      },100)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGamePlay)