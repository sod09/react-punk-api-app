import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import CardList from "./components/CardList/CardList";
import SideNav from "./components/SideNav";

import {
  fetchBeers,
  abvFetch,
  classicFetch,
  acidicFetch,
  beerFilterFetch,
} from "./services/beers.service";

const App = () => {
  const [beers, setBeers] = useState([]);

  const [userBeerSearch, setUserBeerSearch] = useState();

  const [isAbvCheck, setAbvCheck] = useState(false);
  const [isClassicCheck, setClassicCheck] = useState(false);
  const [isAcidicCheck, setAcidicCheck] = useState(false);

  // retrieves the data from the service file and sets state with this data
  const getBeers = async () => {
    const apiBeers = await fetchBeers();
    return setBeers(apiBeers);
  };

  useEffect(() => {
    getBeers();
  }, []);

  // filters through state, changes search to lower case, returns the beers that match the search term using a boolean

  const matchingBeers = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(userBeerSearch);
  });

  // IF the abvCheck button is true retrieves the data from the service file of beers with high abv and then resets state to this data

  const getHighAbvBeers = async () => {
    if (isAbvCheck) {
      const highAbvBeers = await beerFilterFetch("?abv_gt=6");
      return setBeers(highAbvBeers);
    }
  };

  // once abvCheck state has changed to true, it calls the function above to retrieve the data from the service file

  useEffect(() => {
    getHighAbvBeers();
  }, [isAbvCheck]);

  const getClassicBeers = async () => {
    if (isClassicCheck) {
      const getClassicBeers = await beerFilterFetch("?brewed_before=1-2010");
      return setBeers(getClassicBeers);
    }
  };

  useEffect(() => {
    getClassicBeers();
  }, [isClassicCheck]);

  const getAcidicBeers = async () => {
    if (isAcidicCheck) {
      const getAcidicBeers = await acidicFetch();
      return setBeers(getAcidicBeers);
    }
  };

  useEffect(() => {
    getAcidicBeers();
  }, [isAcidicCheck]);

  // const getContentJSX = () => {
  //   if (!userBeerSearch) {
  //     return <CardList className={styles.cardList} beers={beers} />;
  //   } else if (userBeerSearch) {
  //     return <CardList className={styles.cardList} beers={matchingBeers} />;
  //   } else if (abvCheck) {
  //     return <CardList className={styles.cardList} beers={beers} />;
  //   } else if (classicCheck) {
  //     return <CardList className={styles.cardList} beers={beers} />;
  //   } else if (acidicCheck) {
  //     return <CardList className={styles.cardList} beers={beers} />;
  //   }
  // };

  const getContentJSX = () => {
    if (!userBeerSearch) {
      return <CardList className={styles.cardList} beers={beers} />;
    } else if (userBeerSearch) {
      return <CardList className={styles.cardList} beers={matchingBeers} />;
    } else {
      return <CardList className={styles.cardList} beers={beers} />;
    }
  };

  return (
    <>
      <section className={styles.landingPage}>
        <SideNav
          userBeerSearch={userBeerSearch}
          setUserBeerSearch={setUserBeerSearch}
          abvCheck={isAbvCheck}
          setAbvCheck={setAbvCheck}
          classicCheck={isClassicCheck}
          setClassicCheck={setClassicCheck}
          acidicCheck={isAcidicCheck}
          setAcidicCheck={setAcidicCheck}
        />

        {getContentJSX()}
      </section>
    </>
  );
};

export default App;
