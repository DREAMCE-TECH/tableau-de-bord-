import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  region: string;
  category: string;
}

export default function ProductCard({ name, price, image, region, category }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
    >
      <div className="relative h-48 group">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <motion.div 
          className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-sm"
          whileHover={{ scale: 1.05 }}
        >
          {category}
        </motion.div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md transition-colors"
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart 
            className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">Région: {region}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">{price.toLocaleString()} FCFA</span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 ${
              isLoading 
                ? 'bg-green-500 cursor-wait' 
                : 'bg-green-600 hover:bg-green-700'
            } text-white px-4 py-2 rounded-full text-sm transition-colors`}
            onClick={handleAddToCart}
            disabled={isLoading}
            aria-label="Add to cart"
          >
            {isLoading ? (
              <motion.div
                className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Ajouter
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}