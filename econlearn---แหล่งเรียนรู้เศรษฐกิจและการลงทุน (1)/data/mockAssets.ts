
import { Asset, AssetType } from '../types';

export const STOCKS: Asset[] = [
  // Thai Stocks
  { id: 's1', symbol: 'PTT', name: 'PTT Public Company Limited', price: 34.50, change: 0.75, type: AssetType.STOCK, trend: 'up' },
  { id: 's2', symbol: 'CPALL', name: 'CP ALL Public Company Limited', price: 62.25, change: -0.50, type: AssetType.STOCK, trend: 'down' },
  { id: 's3', symbol: 'AOT', name: 'Airports of Thailand PCL', price: 71.00, change: 1.25, type: AssetType.STOCK, trend: 'up' },
  { id: 's4', symbol: 'KBANK', name: 'Kasikornbank PCL', price: 148.50, change: -1.00, type: AssetType.STOCK, trend: 'down' },
  { id: 's5', symbol: 'DELTA', name: 'Delta Electronics (Thailand)', price: 92.00, change: 2.10, type: AssetType.STOCK, trend: 'up' },
  // Global Stocks
  { id: 's6', symbol: 'NVDA', name: 'NVIDIA Corporation', price: 875.20, change: 3.45, type: AssetType.STOCK, trend: 'up' },
  { id: 's7', symbol: 'AAPL', name: 'Apple Inc.', price: 170.12, change: -0.85, type: AssetType.STOCK, trend: 'down' },
  { id: 's8', symbol: 'TSLA', name: 'Tesla, Inc.', price: 165.30, change: -1.20, type: AssetType.STOCK, trend: 'down' },
  { id: 's9', symbol: 'MSFT', name: 'Microsoft Corporation', price: 420.55, change: 0.45, type: AssetType.STOCK, trend: 'up' },
];

export const FUNDS: Asset[] = [
  { id: 'f1', symbol: 'K-CHANGE-A', name: 'K Positive Change Equity Fund', price: 18.42, change: 1.2, type: AssetType.FUND, trend: 'up' },
  { id: 'f2', symbol: 'SCBS&P500', name: 'SCB S&P 500 Index Fund', price: 25.15, change: 0.85, type: AssetType.FUND, trend: 'up' },
  { id: 'f3', symbol: 'B-GLOBAL', name: 'Bualuang Global Equity Fund', price: 12.30, change: -0.15, type: AssetType.FUND, trend: 'down' },
  { id: 'f4', symbol: 'TMBGQG', name: 'TMB Global Quality Growth', price: 21.45, change: 0.60, type: AssetType.FUND, trend: 'up' },
];

export const CRYPTOS: Asset[] = [
  { id: 'c1', symbol: 'BTC', name: 'Bitcoin', price: 62450.25, change: 2.5, type: AssetType.CRYPTO, trend: 'up', logoUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { id: 'c2', symbol: 'ETH', name: 'Ethereum', price: 3450.80, change: 1.8, type: AssetType.CRYPTO, trend: 'up', logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { id: 'c3', symbol: 'SOL', name: 'Solana', price: 145.20, change: -1.2, type: AssetType.CRYPTO, trend: 'down', logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
  { id: 'c4', symbol: 'BNB', name: 'Binance Coin', price: 580.40, change: 0.4, type: AssetType.CRYPTO, trend: 'neutral', logoUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
  { id: 'c5', symbol: 'XRP', name: 'Ripple', price: 0.62, change: -0.5, type: AssetType.CRYPTO, trend: 'down', logoUrl: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
  { id: 'c6', symbol: 'DOGE', name: 'Dogecoin', price: 0.16, change: 4.2, type: AssetType.CRYPTO, trend: 'up', logoUrl: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
];

export const ALL_ASSETS = [...STOCKS, ...FUNDS, ...CRYPTOS];
