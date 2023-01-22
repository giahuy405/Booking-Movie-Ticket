import { booking_seat, cancel_seat } from "../types/BookingSeatType"



export const BookingSeatAction = payload =>({
    type: booking_seat,
    payload
})

export const CancelSeatAction = payload =>({
    type:cancel_seat,
    payload
})