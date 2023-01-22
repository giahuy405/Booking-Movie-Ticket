import React, { Component } from 'react';
import Payment from './Payment';
import RowOfSeats from './RowOfSeats';
import "../index.css"
import data from "../data/danhSachGhe.json"
class BookingTicket extends Component {


    render() {
        return (
            <div className='container'>
                <h1 className='text-center my-3 text-light'>Đặt vé xem phim</h1>
                <div className="row">
                    <div className="col-8">
                        <h3 className='text-warning text-center'>Màn hình</h3>
                        <div className="screen text-center mb-2"></div>
                        <div className='d-flex flex-column'>
                            {data.map(item =>
                                <RowOfSeats key={item.hang} item={item} />
                            )}
                        </div>
                    </div>
                    <div className="col-4">
                        <Payment />
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingTicket;