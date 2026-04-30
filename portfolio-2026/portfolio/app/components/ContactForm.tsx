"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    company: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-2xl">
      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold tracking-widest text-gray-900">
          EMAIL <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#55CDED] focus:shadow-[0_0_0_3px_rgba(85,205,237,0.15)] hover:border-gray-300"
          placeholder="your@email.com"
        />
      </div>

      {/* Name & Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold tracking-widest text-gray-900">
            NAME <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#55CDED] focus:shadow-[0_0_0_3px_rgba(85,205,237,0.15)] hover:border-gray-300"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold tracking-widest text-gray-900">
            COMPANY <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#55CDED] focus:shadow-[0_0_0_3px_rgba(85,205,237,0.15)] hover:border-gray-300"
            placeholder="Your company"
          />
        </div>
      </div>

      {/* Project Description */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold tracking-widest text-gray-900">
          PROJECT DESCRIPTION <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#55CDED] focus:shadow-[0_0_0_3px_rgba(85,205,237,0.15)] hover:border-gray-300 resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="self-start px-8 py-3 rounded-xl bg-[#55CDED] text-white font-bold text-sm tracking-widest hover:bg-[#3bbfd9] hover:shadow-lg hover:shadow-[#55CDED]/20 transition-all duration-300 cursor-pointer active:scale-95"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
