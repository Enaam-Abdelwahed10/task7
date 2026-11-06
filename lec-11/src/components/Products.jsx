import { useState } from 'react'
import { products } from '../data/products'
import Filter from './Filter'
import ProductCard from './productCard'

export default function Products() {
  const [category, setCategory] = useState('All')
  const [maxPrice, setMaxPrice] = useState(100)

  const filtered = products.filter(
    (p) => (category === 'All' || p.category === category) && p.price <= maxPrice
  )

  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-8 text-3xl font-bold">Our Products</h2>
      <div className="flex flex-col gap-6 md:flex-row">
        <Filter
          category={category}
          setCategory={setCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
        <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length ? (
            filtered.map((p) => <ProductCard key={p.id} name={p.name} image={p.image} price={p.price} category={p.category} description={p.description} />)
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </section>
  )
}