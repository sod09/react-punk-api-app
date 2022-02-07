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

    setBeers(apiBeers);
    // console.log(beers);
  };

  useEffect(() => {
    console.log(beers);
    getBeers();
  }, []);

  return (
    <>
      <CardFront />
      <CardBack />
      <Card />
      <CardList />
      <SideNav />
      <SearchBar />
      <SearchButtons />
      <NotFound />
    </>
  );
};

export default App;
