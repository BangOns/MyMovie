import React, { Fragment } from "react";
import Header from "./componentsBody/Header";
import ThisListFilm from "./componentsBody/ThisListFilm";
import ContainerFooter from "./Footer";

function Body() {
  return (
    <Fragment>
      <Header />
      <ThisListFilm />
      <ContainerFooter />
    </Fragment>
  );
}

export default Body;
