import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Card from "./components/Card";
import CardList from "./components/CardList/CardList";
import SideNav from "./components/SideNav";
import SearchBar from "./components/SearchBar";
import SearchButtons from "./components/SearchButtons";
import NotFound from "./components/NotFound";

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
      <CardList beers={beers} />
      {/* <section>{beers.map(getCardFront)}</section> */}
      {/* // <CardFront beers={beers} /> */}
      {/* <CardBack />
      <Card />
      <CardList beers={beers} /> */}
      {/* <SideNav />
      <SearchBar />
      <SearchButtons />
      <NotFound /> */}
    </>
  );
};

export default App;
