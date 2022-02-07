const API_URL = "https://api.punkapi.com/v2/beers";

export const fetchBeers = () => {
  return fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};
