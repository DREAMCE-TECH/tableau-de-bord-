import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  { name: "Légumes", icon: "🥬" },
  { name: "Fruits", icon: "🍌" },
  { name: "Épices", icon: "🌶" },
  { name: "Céréales", icon: "🌾" },
  { name: "Snacks", icon: "🥜" },
  { name: "Naturel", icon: "🍯" }
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

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Categories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Catégories
        </motion.h2>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              aria-label={`View ${category.name} category`}
            >
              <span className="text-4xl mb-2 block" role="img" aria-label={category.name}>
                {category.icon}
              </span>
              <span className="font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}