import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';

const products = [
  {
    id: 1,
    name: "Ndolé frais",
    price: 2500,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3",
    region: "Littoral",
    category: "Légumes"
  },
  {
    id: 2,
    name: "Arachides grillées",
    price: 1000,
    image: "https://images.unsplash.com/photo-1573051929991-71f3b761c5fb?ixlib=rb-4.0.3",
    region: "Nord",
    category: "Snacks"
  },
  {
    id: 3,
    name: "Plantains mûrs",
    price: 1500,
    image: "https://images.unsplash.com/photo-1603052875302-d376b7c0638a?ixlib=rb-4.0.3",
    region: "Sud-Ouest",
    category: "Fruits"
  },
  {
    id: 4,
    name: "Poivre blanc de Penja",
    price: 5000,
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3",
    region: "Littoral",
    category: "Épices"
  },
  {
    id: 5,
    name: "Miel naturel",
    price: 3500,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3",
    region: "Adamaoua",
    category: "Naturel"
  },
  {
    id: 6,
    name: "Safou frais",
    price: 2000,
    image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3",
    region: "Centre",
    category: "Fruits"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProductGrid() {
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Nos Produits Populaires
      </motion.h2>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>
      )}
    </div>
  );
}