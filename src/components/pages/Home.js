import React, { Fragment } from "react";
import MapContainer from "../kakaomap/MapContainer";
import SearchPlace from "../kakaomap/SearchPlace";
const Home = () => {
  return (
    <Fragment>
      <SearchPlace />
      <MapContainer />
    </Fragment>
  );
};

export default Home;
