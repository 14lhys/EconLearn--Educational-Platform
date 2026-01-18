
import React, { createContext, useContext, useState, useEffect } from 'react';
import { FavoriteContextType, Asset } from '../types';

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteObjects, setFavoriteObjects] = useState<Asset[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('econlearn_favorite_objects');
    if (stored) {
      try {
        setFavoriteObjects(JSON.parse(stored));
      } catch (e) {
        setFavoriteObjects([]);
      }
    }
  }, []);

  const toggleFavorite = (asset: Asset) => {
    setFavoriteObjects(prev => {
      const exists = prev.find(item => item.id === asset.id);
      let next;
      if (exists) {
        next = prev.filter(item => item.id !== asset.id);
      } else {
        next = [...prev, asset];
      }
      localStorage.setItem('econlearn_favorite_objects', JSON.stringify(next));
      return next;
    });
  };

  const isFavorite = (id: string) => favoriteObjects.some(item => item.id === id);
  const favorites = favoriteObjects.map(f => f.id);

  return (
    <FavoriteContext.Provider value={{ favorites, favoriteObjects, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) throw new Error('useFavorites must be used within FavoriteProvider');
  return context;
};
