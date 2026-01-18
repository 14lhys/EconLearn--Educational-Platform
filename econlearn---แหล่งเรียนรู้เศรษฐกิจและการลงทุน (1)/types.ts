
export enum AssetType {
  STOCK = 'STOCK',
  FUND = 'FUND',
  CRYPTO = 'CRYPTO',
  FOREX = 'FOREX'
}

export interface Asset {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  type: AssetType;
  logoUrl?: string;
  trend: 'up' | 'down' | 'neutral';
  isGlobal?: boolean;
}

export interface ForexNews {
  id: string;
  time: string;
  currency: string;
  impact: 'low' | 'medium' | 'high' | 'danger';
  title: string;
  description: string;
}

export interface FavoriteContextType {
  favorites: string[];
  favoriteObjects: Asset[];
  toggleFavorite: (asset: Asset) => void;
  isFavorite: (id: string) => boolean;
}
