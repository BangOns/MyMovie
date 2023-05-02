import React, { Fragment } from "react";
import Main1 from "./ListFilm/main1";
import Main2 from "./ListFilm/main2";
import Main3 from "./ListFilm/main3";
import Main4 from "./ListFilm/main4";
import "../../../css/BodyAndFooter.css";
import "../../../css/Preloaders.css";
import Main0 from "./ListFilm/Main0";
function ThisListFilm() {
  return (
    <Fragment>
      <Main0 />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
    </Fragment>
  );
}

export default ThisListFilm;
