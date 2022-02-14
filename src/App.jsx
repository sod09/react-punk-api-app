import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import CardList from "./components/CardList/CardList";
import SideNav from "./components/SideNav";
import NotFound from "./components/NotFound/NotFound";

import {
  fetchBeers,
  abvFetch,
  classicFetch,
  acidicFetch,
} from "./services/beers.service";

const App = () => {
  const [beers, setBeers] = useState([]);

  const [userBeerSearch, setUserBeerSearch] = useState();

  const [abvCheck, setAbvCheck] = useState(false);
  const [classicCheck, setClassicCheck] = useState(false);
  const [acidicCheck, setAcidicCheck] = useState(false);

  const getBeers = async () => {
    const apiBeers = await fetchBeers();
    return setBeers(apiBeers);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const matchingBeers = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(userBeerSearch);
  });

  const getHighAbvBeers = async () => {
    if (abvCheck === true) {
      const highAbvBeers = await abvFetch();
      return setBeers(highAbvBeers);
    }
  };

  useEffect(() => {
    getHighAbvBeers();
  }, [abvCheck]);

  const getClassicBeers = async () => {
    if (classicCheck === true) {
      const getClassicBeers = await classicFetch();
      return setBeers(getClassicBeers);
    }
  };

  useEffect(() => {
    getClassicBeers();
  }, [classicCheck]);

  const getAcidicBeers = async () => {
    if (acidicCheck === true) {
      const getAcidicBeers = await acidicFetch();
      return setBeers(getAcidicBeers);
    }
  };

  useEffect(() => {
    getAcidicBeers();
  }, [acidicCheck]);

  const getContentJSX = () => {
    if (!userBeerSearch) {
      return <CardList className={styles.cardList} beers={beers} />;
    } else if (userBeerSearch) {
      return <CardList className={styles.cardList} beers={matchingBeers} />;
    } else if (abvCheck) {
      return <CardList className={styles.cardList} beers={beers} />;
    } else if (classicCheck) {
      return <CardList className={styles.cardList} beers={beers} />;
    }
    // } else if (acidicCheck) {
    //   return <CardList className={styles.cardList} beers={beers} />;
  };
  return (
    <>
      <section className={styles.landingPage}>
        <SideNav
          userBeerSearch={userBeerSearch}
          setUserBeerSearch={setUserBeerSearch}
          abvCheck={abvCheck}
          setAbvCheck={setAbvCheck}
          classicCheck={classicCheck}
          setClassicCheck={setClassicCheck}
          acidicCheck={acidicCheck}
          setAcidicCheck={setAcidicCheck}
        />

        {getContentJSX()}
      </section>
    </>
  );
};

export default App;
