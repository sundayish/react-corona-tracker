import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    alpha2: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (alpha2) => {
    const fetchedData = await fetchData(alpha2);

    console.log(alpha2);
    console.log(fetchedData);
    //fetch data
    //setState
  };

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

export default App;
