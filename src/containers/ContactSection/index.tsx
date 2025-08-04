"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUser,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
  FaPaperPlane,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Updated interface with index signature for EmailJS compatibility
interface TemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{ type: string; message: string }>({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setStatus({ type: "", message: "" });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = async (
    templateParams: TemplateParams
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log("Email sent:", result);
      return { success: true };
    } catch (error) {
      console.error("Email failed:", error);
      if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        return { success: false, error: (error as { message: string }).message };
      }
      return { success: false, error: "Unknown error occurred" };
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      setIsSubmitting(false);
      return;
    }

    if (formData.message.length < 10) {
      setStatus({ type: "error", message: "Message must be at least 10 characters long." });
      setIsSubmitting(false);
      return;
    }

    const templateParams: TemplateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || `New message from ${formData.name}`,
      message: formData.message,
      to_email: "razasubul@gmail.com",
    };

    const result = await sendEmail(templateParams);

    if (result.success) {
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly.",
      });
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/subulraza", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/subulraza", label: "LinkedIn" },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Mouse Glow */}
      <div
        className="absolute pointer-events-none w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl transition-all duration-300"
        style={{ left: mousePosition.x - 192, top: mousePosition.y - 192 }}
      />

      {/* Stars */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Contact Content */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 text-transparent bg-clip-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s collaborate and create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Box */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Let&apos;s Connect</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-medium">razasubul@gmail.com</p>
                    <p className="text-white font-medium">subul9010@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Response Time</p>
                    <p className="text-white font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-gray-300 mb-4">Follow me</p>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-110"
                      aria-label={label}
                    >
                      <Icon className="text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white/80">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input-style"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white/80">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="input-style"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white/80">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  className="input-style"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white/80">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="input-style resize-none"
                  disabled={isSubmitting}
                />
                <p className="text-xs text-gray-400 mt-1">{formData.message.length}/500 characters</p>
              </div>

              {status.message && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-400"
                      : "bg-red-500/20 border border-red-500/30 text-red-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  ) : (
                    <FaExclamationCircle className="text-red-400 flex-shrink-0" />
                  )}
                  <span className="text-sm font-medium">{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Prefer email? Contact me at{" "}
            <a
              href="mailto:razasubul@gmail.com"
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              razasubul@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;