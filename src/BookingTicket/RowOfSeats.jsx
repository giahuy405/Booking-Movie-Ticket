import React, { Component } from 'react';
import data from "../data/danhSachGhe.json"
import { connect } from "react-redux"
import { BookingSeatAction } from '../redux/actions/BookingSeatAction';
class RowOfSeats extends Component {




    render() {
        let { hang, danhSachGhe } = this.props.item;
        return (
            <div className='text-white d-flex'>
                {hang}
                {danhSachGhe.map((item, index) => {
                    let cssBookedSeat = '';
                    let disabled = false;
                    let cssCurrentBook = '';
                    // trạng thái chỗ đã đặt
                    if (item.daDat) {
                        cssBookedSeat = 'gheDuocChon'
                        disabled = true
                    }
                    let indexCurrentBook = this.props.bookingSeats.findIndex(seat => seat.soGhe === item.soGhe);
                    indexCurrentBook !== -1 ? cssCurrentBook ='gheDangChon' : cssCurrentBook ='';
                    if (hang === '__') {
                        return <span className='rowNumber'>{item.soGhe}</span>
                    } else {
                        return <button
                            onClick={() => {
                                this.props.dispatch(
                                    BookingSeatAction(item)
                                )
                            }}
                            disabled={disabled}
                            className={`ghe ${cssBookedSeat} ${cssCurrentBook}`} key={item.soGhe}>
                            {item.soGhe}
                        </button>
                    }
                }
                )}
            </div>
        );
    }
}

export default connect(state => ({
    bookingSeats: state.SeatReducer.bookingSeats,
}))(RowOfSeats)