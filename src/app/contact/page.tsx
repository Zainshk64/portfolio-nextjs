"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Send } from "lucide-react";
import { useTheme } from "next-themes";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const router = useRouter();
    const { theme, setTheme } = useTheme();
  
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mkgpwypr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message sent successfully! 🎉");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => router.push("/"), 1500);
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center mx-auto  py-16 transition-colors duration-300">
      <div className="md:max-w-lg w-full bg-card shadow-lg rounded-2xl p-4 md:p-8 border border-border">
        <h1 className="text-3xl font-rubik font-bold text-center text-primary mb-2">
          Let’s Work Together 🚀
        </h1>
        <p className="text-center  text-muted-foreground mb-8">
          Have a project idea or want to collaborate? Send me a message below.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition"
              placeholder="your@email.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none transition resize-none"
              placeholder="Tell me about your project..."
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center  dark:bg-indigo-600 justify-center gap-2 py-2.5 rounded-lg text-white font-medium transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <Send className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </section>
  );
}
