import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import CardList from "./components/CardList/CardList";
import SideNav from "./components/SideNav";

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

  return (
    <>
      <section className={styles.landingPage}>
        <SideNav className={styles.sideNav} />
        <CardList className={styles.cardList} beers={beers} />
      </section>
    </>
  );
};

export default App;
