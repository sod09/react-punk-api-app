const API_URL = "https://api.punkapi.com/v2/beers";

//  fetches all data from the API, converts to json, this can then be called in other files
export const fetchBeers = () => {
  return fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

// fetches specific data from the API using the parameter supplied by PUNK API
// export const abvFetch = () => {
//   return fetch("https://api.punkapi.com/v2/beers?abv_gt=6")
//     .then((res) => res.json())
//     .then((jsonResponse) => {
//       return jsonResponse;
//     });
// };

// export const classicFetch = () => {
//   return fetch("https://api.punkapi.com/v2/beers?brewed_before=1-2010")
//     .then((res) => res.json())
//     .then((jsonResponse) => {
//       return jsonResponse;
//     });
// };

export const beerFilterFetch = (beerParam) => {
  return fetch(`${API_URL}${beerParam}`)
    .then((res) => res.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

// there is no paramter for acidic beers on PUNK API, so this firstly maps the data to create an ARRAY. It then filters the data according to the parameter which in this instance is ph < 4

export const acidicFetch = () => {
  return fetch("https://api.punkapi.com/v2/beers")
    .then((res) => res.json())
    .then((jsonResponse) => {
      const mapBeers = jsonResponse.map((beer) => beer);
      console.log(mapBeers);
      const filterAcidicBeers = mapBeers.filter((beer) => beer.ph < 4);
      console.log(filterAcidicBeers);
      return filterAcidicBeers;
    });
};

// refactor abv/classic functions
