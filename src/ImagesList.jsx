import React, { Component } from "react";
import ImagesCard from "./ImagesCard";
import api from "./api.js";

class ImagesList extends Component {
  render() {
    const img = api.map(img => <ImagesCard key={img.name} img={img} />);

    return <div>{img}</div>;
  }
}

export default ImagesList;
