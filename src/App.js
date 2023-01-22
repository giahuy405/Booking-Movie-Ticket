import BookingTicket from "./BookingTicket/BookingTicket";

function App() {
  return (
    <div style={{backgroundImage:'url(./img/bgmovie.jpg)',position:"absolute",inset:0,backgroundSize:"cover",zIndex:'1'}}>
      <BookingTicket/>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
