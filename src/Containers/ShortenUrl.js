import React, { Component } from "react";

import axios from "axios";

class ShortenUrl extends Component {
  componentDidMount = async () => {
    const { randomCharacters } = this.props.match.params;

    const response = await axios.get(
      `https://server-side-short-url.herokuapp.com/read/${randomCharacters}`
    );

    window.location = response.data.normalUrl;
  };

  render() {
    console.log(this.props);
    return <div>Redirecting to ....</div>;
  }
}

export default ShortenUrl;
