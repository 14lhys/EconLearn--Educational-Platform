
import { useState, useEffect } from 'react';
import { Asset } from '../types';
import { ALL_ASSETS } from '../data/mockAssets';

export const useRealtimeData = () => {
  const [assets, setAssets] = useState<Asset[]>(ALL_ASSETS);

  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(prevAssets => 
        prevAssets.map(asset => {
          // สุ่มการเปลี่ยนแปลงเล็กน้อย -0.5% ถึง +0.5%
          const changePercent = (Math.random() - 0.5) * 0.1;
          const newPrice = asset.price * (1 + changePercent);
          const priceDiff = newPrice - asset.price;
          
          return {
            ...asset,
            price: newPrice,
            // คำนวณ change ใหม่สะสม (จำลอง)
            change: Number((asset.change + (priceDiff / asset.price * 100)).toFixed(2)),
            trend: priceDiff > 0 ? 'up' : priceDiff < 0 ? 'down' : asset.trend
          };
        })
      );
    }, 3000); // อัปเดตทุก 3 วินาที

    return () => clearInterval(interval);
  }, []);

  return assets;
};