export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    // 'X-RapidAPI-Key': '2fca79e727msh94742075c412cdbp156857jsne55b188945be',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': '2fca79e727msh94742075c412cdbp156857jsne55b188945be',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,

    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
