import React, { Component } from 'react';
import { connect } from "react-redux"
import { CancelSeatAction } from '../redux/actions/BookingSeatAction';
class Payment extends Component {
    render() {
        return (
            <div>
                <h3 className='text-center text-success'>Danh sách ghế bạn chọn</h3>
                <div className='d-flex align-items-center'>
                    <div className="gheDuocChon me-3"></div>
                    <span className='text-white'>Ghế đã đặt</span>
                </div>
                <div className='d-flex align-items-center mt-2'>
                    <div className="gheDangChon me-3"></div>
                    <span className='text-white'>Ghế đang chọn</span>
                </div>
                <div className='d-flex align-items-center mt-2'>
                    <div className="gheDuocChon me-3 bg-light"></div>
                    <span className='text-white'>Ghế chưa đặt</span>
                </div>
                <table className="table text-white mt-3">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bookingSeats.map(item =>
                            <tr>
                                <td>{item.soGhe}</td>
                                <td>{item.gia}</td>
                                <td>
                                    <button 
                                    onClick={()=>{
                                        this.props.dispatch(
                                            CancelSeatAction(item.soGhe)
                                        )
                                    }}
                                    className="btn btn-danger">
                                        Hủy
                                    </button>    
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <td></td>
                        <td>Tổng tiền</td>
                        <td>{this.props.bookingSeats.reduce((pre,curr)=>{
                            return pre + curr.gia;
                        },0).toLocaleString()}</td>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default connect(state => ({
    bookingSeats: state.SeatReducer.bookingSeats,
}))(Payment);