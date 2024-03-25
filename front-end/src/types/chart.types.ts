export interface MarketChartData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export interface ExtractedChartData {
  date: string;
  price: number;
}
