import axios from "axios";

const url = "https://covid19-api.org/api";

export const fetchData = async (alpha2) => {
  let countryUrl = url;

  if (!alpha2) {
    countryUrl = `${url}/timeline`;

    try {
      const {
        data: {
          0: { total_cases, total_recovered, total_deaths, last_update },
        },
      } = await axios.get(countryUrl);

      return { total_cases, total_recovered, total_deaths, last_update };
    } catch (e) {}
  } else {
    try {
      countryUrl = `${url}/timeline/${alpha2}`;

      const {
        data: {
          0: { cases, recovered, deaths, last_update },
        },
      } = await axios.get(countryUrl);

      return { cases, recovered, deaths, last_update };
    } catch (e) {
      console.log(e);
    }
  }

  try {
    const {
      data: {
        0: { total_cases, total_recovered, total_deaths, last_update },
      },
    } = await axios.get(countryUrl);

    return { total_cases, total_recovered, total_deaths, last_update };
  } catch (e) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/timeline`);

    return data.map((dailyData) => ({
      total_cases: dailyData.total_cases,
      total_recovered: dailyData.total_recovered,
      total_deaths: dailyData.total_deaths,
      last_update: dailyData.last_update,
    }));
  } catch (e) {
    console.log(e);
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);

    return data.map(({ name, alpha2 }) => ({ name, alpha2 }));
  } catch (e) {}
};
