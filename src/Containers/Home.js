import React, { Component } from "react";
import axios from "axios";
//import components
import Header from "../Components/Header";
import ArrayUrl from "../Components/ArrayUrl";
import isUrl from "is-url";

class Home extends Component {
  state = {
    arrayShortenUrl: [],
    normalUrl: "",
    isAlreadyShorten: false,
    isUrlValid: true
  };

  //handle error after a try/catch
  errorHandler = error => {
    if (error.response && error.response.status === 400) {
      if (
        error.response.data.message === "This address has been already shorten"
      ) {
        this.setState({ isAlreadyShorten: true, normalUrl: "" }, () => {
          setTimeout(() => this.setState({ isAlreadyShorten: false }), 3000);
        });
      } else {
        console.error({ message: error.response.data.message });
      }
    } else {
      console.error({ message: error.message });
    }
  };

  updateArrayUrl = async () => {
    try {
      const response = await axios.get(
        "https://server-side-short-url.herokuapp.com/read"
      );
      this.setState({ arrayShortenUrl: response.data, normalUrl: "" });
    } catch (error) {
      this.errorHandler(error);
    }
  };
  componentDidMount = async () => {
    this.updateArrayUrl();
  };

  handleChange = event => {
    this.setState({ normalUrl: event.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.isUrlValid && this.state.normalUrl) {
      try {
        await axios.post("https://server-side-short-url.herokuapp.com/create", {
          normalUrl: this.state.normalUrl
        });
        this.updateArrayUrl();
      } catch (error) {
        this.errorHandler(error);
      }
    }
  };

  handleOnBlur = () => {
    this.setState({ isUrlValid: isUrl(this.state.normalUrl) });
  };

  render() {
    return (
      <>
        <Header
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.normalUrl}
          isUrlValid={this.state.isUrlValid}
          isAlreadyShorten={this.state.isAlreadyShorten}
          handleOnBlur={this.handleOnBlur}
        />

        <ArrayUrl
          arrayShortenUrl={this.state.arrayShortenUrl}
          updateArrayUrl={this.updateArrayUrl}
        />
      </>
    );
  }
}

export default Home;
