import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import CardList from "./components/CardList/CardList";
import SideNav from "./components/SideNav";
import Card from "./components/Card";

import { fetchBeers } from "./services/beers.service";

const App = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const apiBeers = await fetchBeers();
    return setBeers(apiBeers);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleSearch = (userBeerSearch) => {
    console.log(`get Search working ${userBeerSearch}`);
    if ((userBeerSearch = "")) {
      return <CardList className={styles.cardList} beers={beers} />;
    } else if ((userBeerSearch = !beers.name)) {
      <alert>"No beers with this name"</alert>;
    } else if ((userBeerSearch = beers.name)) {
      return <Card beers={beers} />;
    }
  };

  // retrieve user input
  // match user input to beer name and search API
  // show cards only with that beer name
  // if not beer name display: none

  return (
    <>
      <section className={styles.landingPage}>
        <SideNav userBeerSearch={handleSearch} className={styles.sideNav} />
        <CardList className={styles.cardList} beers={beers} />
      </section>
    </>
  );
};

export default App;
