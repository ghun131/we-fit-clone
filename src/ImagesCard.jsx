import React, { Component } from "react";

export default class ImagesCard extends Component {
  render() {
    const img = this.props.img;
    const imgUrl = process.env.PUBLIC_URL + `activities/${img.name}`;

    return (
      <div>
        <img src={imgUrl} alt="activity pictures" />
      </div>
    );
  }
}

// I don't know why we need this
// I need to learn the meaning of process.env.PUBLIC_URL
