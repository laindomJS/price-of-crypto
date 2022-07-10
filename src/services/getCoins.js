export const getCoins = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=60&page=1')
  const data = await res.json();
  console.log(data);
  return data;
}

