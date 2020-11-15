import React from "react";
import { Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

const Cards = ({
  data: {
    total_cases,
    total_recovered,
    total_deaths,
    last_update,
    cases,
    recovered,
    deaths,
  },
}) => {
  if (!cases) {
    console.log("test");
    if (!total_cases) {
      return "Loading...";
    }
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={total_cases || cases}
          lastUpdate={last_update}
          cardSubtitle="Number of active COVID-19 cases."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={total_recovered || recovered}
          lastUpdate={last_update}
          cardSubtitle="Number of COVID-19 recoveries."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={total_deaths || deaths}
          lastUpdate={last_update}
          cardSubtitle="Number of COVID-19 deaths."
        />
      </Grid>
    </div>
  );
};

export default Cards;
