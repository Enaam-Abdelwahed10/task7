import { categories } from '../data/products'

export default function Filter({ category, setCategory, maxPrice, setMaxPrice }) {
  return (
    <aside className="h-fit rounded-lg border bg-white p-4 md:w-64">
      <h3 className="mb-3 text-lg font-semibold">Filter</h3>

      <p className="mb-2 font-medium">Category</p>
      {categories.map((c) => (
        <label key={c} className="mb-1 flex items-center gap-2">
          <input
            type="radio"
            name="category"
            checked={category === c}
            onChange={() => setCategory(c)}
          />
          {c}
        </label>
      ))}

      <p className="mb-2 mt-4 font-medium">Max price: ${maxPrice}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="w-full"
      />
    </aside>
  )
}