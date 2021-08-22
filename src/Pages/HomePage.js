import React from "react";
import Search from '../Component/homePage/Search'
import HomeHeader from "../Component/homePage/HomeHeader";

export default function HomePage() {

  // const [city, setCity] = useState("tel aviv");
  // const [temp, setTemp] = useState();
  // const [arrDays, setArrDays] = useState([]);



  return (
    <>
    {/* the search section */}
      <Search
        // setCity={setCity}
        // city={city}
        // setTemp={setTemp}
        // setArrDays={setArrDays}
      />
      {/* the show of the days  */}
      <HomeHeader
        // city={city}
        // temp={temp}
        // arrDays={arrDays}
      />
    </>
  );
}