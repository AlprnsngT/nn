"use client";
import { useState } from "react";

interface ContactFormProps {
  compact?: boolean;
  id?: string;
}

export default function ContactForm({ compact = false, id }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Form gönderildi! En kısa sürede size dönüş yapacağız.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form id={id} onSubmit={handleSubmit} className={`bg-white dark:bg-red-100 rounded-2xl border border-red-200/60 dark:border-red-300/40 p-6 shadow-lg ${compact ? "" : "max-w-2xl"}`}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-red-900 mb-1">
              Ad Soyad *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-red-200/60 dark:border-red-300/40 bg-white dark:bg-red-50 text-gray-900 dark:text-red-900 placeholder-gray-500 dark:placeholder-red-600 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              placeholder="Adınız ve soyadınız"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-red-900 mb-1">
              E-posta *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-red-200/60 dark:border-red-300/40 bg-white dark:bg-red-50 text-gray-900 dark:text-red-900 placeholder-gray-500 dark:placeholder-red-600 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              placeholder="ornek@email.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-red-900 mb-1">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-red-200/60 dark:border-red-300/40 bg-white dark:bg-red-50 text-gray-900 dark:text-red-900 placeholder-gray-500 dark:placeholder-red-600 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              placeholder="+90 5XX XXX XX XX"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-red-900 mb-1">
              Şirket
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-red-200/60 dark:border-red-300/40 bg-white dark:bg-red-50 text-gray-900 dark:text-red-900 placeholder-gray-500 dark:placeholder-red-600 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              placeholder="Şirket adı"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-red-900 mb-1">
            Mesaj *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={compact ? 3 : 5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-red-200/60 dark:border-red-300/40 bg-white dark:bg-red-50 text-gray-900 dark:text-red-900 placeholder-gray-500 dark:placeholder-red-600 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Projeniz hakkında bilgi verin..."
          />
        </div>
        
        <button
          type="submit"
          className="w-full btn btn-primary"
        >
          Teklif Al
        </button>
      </div>
    </form>
  );
}


