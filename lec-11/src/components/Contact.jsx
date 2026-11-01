import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form) // لاحقاً بتربطيها مع backend أو خدمة إيميل
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass = 'w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold">Contact Us</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=gaza&output=embed"
            className="h-80 w-full rounded-lg border md:h-full"
            loading="lazy"
          />

          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className={inputClass} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className={inputClass} />
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Message" required className={inputClass} />
            <button className="rounded-lg bg-indigo-600 px-6 py-2 font-semibold text-white hover:bg-indigo-700">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}