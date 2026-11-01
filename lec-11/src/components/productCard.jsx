export default function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="mt-1 font-bold text-indigo-600">${product.price}</p>
      </div>
    </div>
  )
}