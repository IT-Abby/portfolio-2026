"use client";

import { useState, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    title: "",
    description: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAIL_JS!);
  }, []);

  const sendEmail = async () => {
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          title: form.title,
          message: form.description,
        }
      );
      setStatus("success");
      setForm({ email: "", name: "", title: "", description: "" });
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
        setStatus("idle");
      }, 3500);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return; 
    sendEmail();
  };

  const buttonLabel: Record<Status, string> = {
    idle: "SEND MESSAGE",
    sending: "SENDING…",
    success: "SENT ✓",
    error: "FAILED — TRY AGAIN",
  };

  const buttonStyles: Record<Status, string> = {
    idle: "bg-[#55CDED] hover:bg-[#3bbfd9] hover:shadow-lg hover:shadow-[#55CDED]/20 cursor-pointer",
    sending: "bg-[#55CDED]/70 cursor-not-allowed",
    success: "bg-emerald-500 cursor-default",
    error: "bg-red-500 hover:bg-red-600 cursor-pointer",
  };

  return (
    <>
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

      {/* Name & Title */}
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
            TITLE <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none transition-all duration-300 focus:border-[#55CDED] focus:shadow-[0_0_0_3px_rgba(85,205,237,0.15)] hover:border-gray-300"
            placeholder="Subject of your message"
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
        disabled={status === "sending"}
        className={`self-start px-8 py-3 rounded-xl text-white font-bold text-sm tracking-widest transition-all duration-300 active:scale-95 ${buttonStyles[status]}`}
      >
        {buttonLabel[status]}
      </button>
    </form>

      {/* ── Success Overlay ── */}
      {showOverlay && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => { setShowOverlay(false); setStatus("idle"); }}
        >
          <div
            className="flex flex-col items-center gap-3 px-10 py-8 rounded-3xl bg-white border border-gray-100 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-44 h-44">
              <DotLottieReact
                src="https://lottie.host/bd425cda-0a0e-4c8f-b77f-e2f74bb8962c/76nIA3n9UX.lottie"
                autoplay
                loop={false}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <p className="text-gray-900 text-xl font-bold tracking-wider">Message Sent!</p>
            <p className="text-gray-500 text-sm text-center max-w-xs">Your message has been received. I&apos;ll get back to you as soon as possible!</p>
            <button
              type="button"
              onClick={() => { setShowOverlay(false); setStatus("idle"); }}
              className="mt-3 px-6 py-2 rounded-xl text-sm font-semibold tracking-widest text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

