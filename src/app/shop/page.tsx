'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const products = [
  {
    id: 1,
    name: 'Developer T-Shirt',
    description: 'Premium cotton t-shirt with Deadwood logo',
    price: 29.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical keyboard with custom keycaps',
    price: 129.99,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['RGB Backlight', 'Mechanical Switches', 'USB-C']
  },
  {
    id: 3,
    name: 'Developer Hoodie',
    description: 'Comfortable hoodie with Deadwood branding',
    price: 49.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    colors: ['Black', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4,
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse for developers',
    price: 59.99,
    category: 'Gadgets',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Wireless', 'Ergonomic Design', 'Long Battery Life']
  },
  {
    id: 5,
    name: 'Developer Mug',
    description: 'Ceramic mug with Deadwood logo',
    price: 14.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    colors: ['White', 'Black']
  },
  {
    id: 6,
    name: 'Laptop Stand',
    description: 'Adjustable aluminum laptop stand',
    price: 39.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Adjustable Height', 'Aluminum Construction']
  }
]

const categories = [
  { name: 'All', count: products.length },
  { name: 'Clothing', count: products.filter(p => p.category === 'Clothing').length },
  { name: 'Gadgets', count: products.filter(p => p.category === 'Gadgets').length },
  { name: 'Accessories', count: products.filter(p => p.category === 'Accessories').length }
]

export default function ShopPage() {
  return (
    <motion.div 
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 min-h-screen"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      {/* Hero Section */}
      <motion.div 
        className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20"
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Developer Shop
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Premium gear and accessories for developers. From comfortable clothing to essential gadgets, find everything you need to enhance your development experience.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8"
        variants={sectionVariants}
      >
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-indigo-600 transition-colors"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div 
        className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32"
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative bg-gray-800/50 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <HeartIcon className="h-6 w-6 text-white" />
                    </button>
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <ShoppingCartIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-300">{product.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-bold text-white">${product.price}</p>
                  {product.colors && (
                    <div className="flex space-x-1">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="inline-block h-4 w-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.toLowerCase() }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                {product.sizes && (
                  <div className="mt-2 flex space-x-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className="px-2 py-1 text-xs rounded border border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-500"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="relative isolate mt-0 px-6 py-12 sm:mt-0 sm:py-16 lg:px-8 bg-gray-800/50"
        variants={sectionVariants}
      >
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need Custom Gear?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-300">
            Contact us for custom merchandise and bulk orders for your team or event.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
            <a href="#learn-more" className="text-sm font-semibold leading-6 text-gray-300">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 