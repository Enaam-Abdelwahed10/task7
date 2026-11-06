import { useState } from 'react'
export default function ProductCard({ name, image, price, category, description }) {
  const [quantity, setQuantity] = useState(1)
  const [liked, setLiked] = useState(false)
  const [message, setMessage] = useState('')

  const increase = () => setQuantity(quantity + 1)
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }
  const changeLike = () => setLiked(!liked)

  const addToCart = () => {
    setMessage(`Added ${quantity} x ${name} to cart`)
    setTimeout(() => setMessage(''), 3000)
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md">
      <div className="relative">
        <img src={image} alt={name} className="h-48 w-full object-cover" />

       <button
          onClick={changeLike}
     aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
       className="absolute right-2 top-2 rounded-full bg-white p-2 shadow transition hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    className={`h-6 w-6 ${liked ? 'text-red-500' : 'text-gray-400'}`}
    fill={liked ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="48"
    strokeLinejoin="round"
  >
    <path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" />
  </svg>
</button>
       
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="font-semibold">{name}</h3>
        <p className="mb-2 text-sm text-gray-500">{description}</p>
        <p className="mb-3 font-bold text-indigo-600">${price}</p>

        <div className="mb-3 flex items-center gap-3">
          <button onClick={decrease} className="h-8 w-8 rounded border hover:bg-gray-100">-</button>
          <span className="w-6 text-center">{quantity}</span>
          <button onClick={increase} className="h-8 w-8 rounded border hover:bg-gray-100">+</button>
        </div>

        <button
          onClick={addToCart}
          className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-700"
        >
          Add to cart 
        </button>

        {message && (
          <p className="mt-3 rounded bg-green-100 p-2 text-center text-sm text-green-700">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}