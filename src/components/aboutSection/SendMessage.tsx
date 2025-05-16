'use client'
import React, { useState, useRef } from "react";

const EnvelopeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block align-middle ml-2 text-[#222] rotate-12"
    style={{ verticalAlign: "-0.2em" }}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Spinner = () => (
  <svg className="animate-spin h-6 w-6 text-white mx-auto" viewBox="0 0 24 24">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

const initialForm = { name: "", email: "", message: "" };

const SendMessage = () => {
  const [form, setForm] = useState(initialForm);
  const [buttonState, setButtonState] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
  const [error, setError] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setButtonState('loading');
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }
      setButtonState('success');
      setForm(initialForm);
      timeoutRef.current = setTimeout(() => setButtonState('idle'), 5000);
    } catch (err: any) {
      setError(err.message || "Failed to send message");
      setButtonState('error');
      timeoutRef.current = setTimeout(() => setButtonState('idle'), 5000);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#9aae92] py-10 px-2">
      <form
        className="w-full max-w-md bg-[#9aae92] rounded-xl flex flex-col items-center px-8 py-10"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[2.5rem] font-bold font-playfair-important text-[#2b3029] mb-8 text-center flex items-center justify-center">
          Contactez-nous <EnvelopeIcon />
        </h2>
        <div className="w-full mb-4">
          <label htmlFor="name" className="block text-[15px] text-[#2b3029] mb-1 font-medium">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:border-white focus:ring-2 focus:ring-white/30 outline-none text-white placeholder:text-white transition"
            placeholder=""
            required
            value={form.name}
            onChange={handleChange}
            disabled={buttonState === 'loading'}
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="email" className="block text-[15px] text-[#2b3029] mb-1 font-medium">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:border-white focus:ring-2 focus:ring-white/30 outline-none text-white placeholder:text-white transition"
            placeholder=""
            required
            value={form.email}
            onChange={handleChange}
            disabled={buttonState === 'loading'}
          />
        </div>
        <div className="w-full mb-6">
          <label htmlFor="message" className="block text-[15px] text-[#2b3029] mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:border-white focus:ring-2 focus:ring-white/30 outline-none text-white placeholder:text-white transition resize-none"
            placeholder="Your message..."
            required
            value={form.message}
            onChange={handleChange}
            disabled={buttonState === 'loading'}
          />
        </div>
        {error && <div className="w-full text-center text-red-200 mb-4">{error}</div>}
        <button
          type="submit"
          className="w-full bg-[#222] text-white rounded-md py-2 font-semibold hover:bg-[#333] transition mt-2 flex items-center justify-center min-h-[44px]"
          disabled={buttonState === 'loading'}
        >
          {buttonState === 'loading' && <Spinner />}
          {buttonState === 'idle' && 'Envoyer'}
          {buttonState === 'error' && 'Try again'}
          {buttonState === 'success' && 'Thanks'}
        </button>
      </form>
    </section>
  );
};

export default SendMessage;