export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-xl font-bold text-indigo-600">MyShop</a>
        <nav className="flex gap-6 text-gray-700">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#products" className="hover:text-indigo-600">Products</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}