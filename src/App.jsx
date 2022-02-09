import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import CardList from "./components/CardList/CardList";
import SideNav from "./components/SideNav";

import NotFound from "./components/NotFound/NotFound";
import { fetchBeers } from "./services/beers.service";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [userBeerSearch, setUserBeerSearch] = useState();

  const getBeers = async () => {
    const apiBeers = await fetchBeers();
    return setBeers(apiBeers);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const matchingBeers = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(userBeerSearch.toLowerCase());
  });

  const contentJSX = matchingBeers.length ? (
    <CardList className={styles.cardList} beers={matchingBeers} />
  ) : (
    <NotFound />
  );

  // retrieve user input
  // match user input to beer name and search API
  // show cards only with that beer name
  // if not beer name display: none

  return (
    <>
      <section className={styles.landingPage}>
        <SideNav
          userBeerSearch={userBeerSearch}
          setUserBeerSearch={setUserBeerSearch}
          className={styles.sideNav}
        />
        {contentJSX}
      </section>
    </>
  );
};

export default App;
