const API_URL = "https://api.punkapi.com/v2/beers";

export const fetchBeers = () => {
  return fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

export const abvFetch = () => {
  return fetch("https://api.punkapi.com/v2/beers?abv_gt=6")
    .then((res) => res.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

export const classicFetch = () => {
  return fetch("https://api.punkapi.com/v2/beers?brewed_before=1-2010")
    .then((res) => res.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

export const acidicFetch = () => {
  return fetch("https://api.punkapi.com/v2/beers")
    .then((res) => res.json())
    .then((jsonResponse) => {
      const mapBeers = jsonResponse.map((beer) => beer);
      const filterAcidicBeers = mapBeers.filter((beer) => beer.ph < 4);
      return filterAcidicBeers;
    });
};
