import React from "react";

import { Cards, Charts, Countries } from "./components";

import styles from "./App.module.css";

import fetchData from "./api";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({
      data: fetchedData,
      country: country,
    });
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.img}
          src="https://i.ibb.co/7QpKsCX/image.png"
          alt="COVID-19"
        />
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
