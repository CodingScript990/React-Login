// Landing.js
import React, { useEffect } from "react";
import axios from "axios";

function Landing() {
  // axios API[get]
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response));
  }, []);
  return <div>Landing</div>;
}

export default Landing;
