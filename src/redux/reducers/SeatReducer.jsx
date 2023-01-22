import { booking_seat, cancel_seat } from "../types/BookingSeatType";

const initalState = {
    bookingSeats: [],
}

export const SeatReducer = (state = initalState, action) => {
    switch (action.type) {
        case booking_seat: {
            let bookingSeats = [...state.bookingSeats];
            let index = bookingSeats.findIndex(item => item.soGhe === action.payload.soGhe);
            // nếu ghế này đã có trong mảng bookingSeat thì gỡ nó ra khỏi mảng còn ko thì push vào mảng
            index !== -1 ? bookingSeats.splice(index, 1) : bookingSeats.push(action.payload);
            return { ...state, bookingSeats };
        }
        case cancel_seat: {
            let bookingSeats = [...state.bookingSeats];
            let index = bookingSeats.findIndex(item=>item.soGhe===action.payload);
            // index !==-1 ? bookingSeats.splice(index,1) : '';
            if(index!==-1){
                bookingSeats.splice(index,1)
            }
            return { ...state ,bookingSeats};
        }
        default:
            return state;
    }
}