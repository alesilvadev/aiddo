import React, { Component, useEffect, useState } from "react";
import "./loading.scss";

const Loading = (props) => {
  const [url, setUrl] = useState(require("../../assets/loaders/logpot.svg"));

  return (
    <div id="load">
      <img alt="..." src={url} className="logo-loader" />
    </div>
  );
};
export default Loading;
