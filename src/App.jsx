import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import CardList from "./components/CardList/CardList";
import SideNav from "./components/SideNav";
import NotFound from "./components/NotFound/NotFound";
import { fetchBeers } from "./services/beers.service";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [userBeerSearch, setUserBeerSearch] = useState();
  const [abvCheck, setAbvCheck] = useState(false);
  const [classicCheck, setClassicCheck]= useState(false);
  const [acidicCheck, setAcidicCheck] =useState(false);

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

  const contentJSX = beers.length ? (
    <CardList className={styles.cardList} beers={matchingBeers} />
  ) : (
    <NotFound />
  );

  // const matchingAbvBeers = beers.filter((beer) => {
  //  if (abvCheck === true) {
  //    const highAbvBeers = beer.abv > 4;
  //    <CardList className={styles.cardList} beers={matchingAbvBeers} />
  //  }
  // })

  // useEffect(() => {
    
  // const matchingAbvBeers = beers.filter((beer) => {
  //  if (abvCheck === true) {
  //    const highAbvBeers = beer.abv > 4;
  //    <CardList className={styles.cardList} beers={matchingAbvBeers} />
  //  }
  // })}, [beers]);

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

        {contentJSX}

      </section>
    </>
  );
};

export default App;
