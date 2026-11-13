// FETCH DATA FROM COSMOS HUB API
export const fetchDataCH = async (endpoint: string) => {
  try {
    // cosmos.directory proxies public Cosmos Hub REST nodes, so no API key is needed.
    const response = await fetch(
      `https://rest.cosmos.directory/cosmoshub/${endpoint}`,
    );

    const data = await response.json();
    if (!response.ok || data.error) {
      throw new Error(
        data.error?.message || `Cosmos API request failed (${response.status})`,
      );
    }

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

// FETCH DATA FROM COIN GECKO API
export const fetchDataCG = async (endpoint: string) => {
  try {
    const apiKey = import.meta.env.VITE_COIN_GECKO_API_KEY;

    const response = await fetch(
      `https://api.coingecko.com/api/v3/${endpoint}`,
      { headers: { "x-cg-demo-api-key": apiKey } },
    );

    const data = await response.json();
    if (!response.ok || data.error) {
      throw new Error(
        data.error?.message || `CoinGecko request failed (${response.status})`,
      );
    }

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
