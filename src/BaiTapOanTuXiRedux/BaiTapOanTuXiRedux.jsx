import React, { Component } from 'react'
import Computer from './Computer'
import InfoGamePlay from './InfoGamePlay'
import Player from './Player'
import '../BaiTapOanTuXiRedux/BaiTapOanTuXiRedux.css'
export default class BaiTapOanTuXiRedux extends Component {
  render() {
    return (
      <div>
          <div className='container-fluid p-0'>
                <div className='bgOanTuXi'>
                    <div className='row text-center'>
                        <div className='col-4'>
                            <Player />
                        </div>
                        <div className='col-4'>
                            <InfoGamePlay />
                        </div>
                        <div className='col-4'>
                            <Computer />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
