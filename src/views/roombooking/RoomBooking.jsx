import Advantages from "./Advantages"
import HeaderIcons from "./HeaderIcons"
import "./index.css"
import "./calendar.css"
// import SearchContainer from "./SearchContainer"
import NewSearchContainer from "./NewSearchContainer"

const RoomBooking = () => {
  return (
    <main className="main">
      <div className="booking-container">
        <section className="hero">
          <HeaderIcons />
          {/* <SearchContainer /> */}
          <NewSearchContainer />
        </section>
        <Advantages />
      </div>
    </main>
  )
}

export default RoomBooking