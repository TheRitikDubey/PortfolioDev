import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  CheckCircle,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from 'lucide-react';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL = 'ritik.dubeyy20@gmail.com';
const PHONE = '+91 8340613998';

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/theritik-dubey/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/TheRitikDubey', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/The_RitikDubey', label: 'X (Twitter)' },
  { icon: Instagram, href: 'https://www.instagram.com/the_ritikdubey/', label: 'Instagram' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const inputClasses = (hasError: boolean) =>
  `mt-1.5 block w-full rounded-lg bg-gray-900/70 border px-3.5 py-2.5 text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 ${
    hasError ? 'border-red-500/70' : 'border-gray-700'
  }`;

function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const BASE_URL = import.meta.env.VITE_API_URL;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/sendMail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          userEmail: formData.email,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      toast.success('Message sent successfully!');
    } catch {
      toast.error('Failed to send message. Please try again later');
    } finally {
      setIsLoading(false);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    toast.success('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-20">
      {/* Heading */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Let's Work Together
        </h2>
        <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto"></div>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Have a project, a role, or just want to say hi? My inbox is always
          open — pick whichever way works for you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left — direct contact methods */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="md:col-span-2 flex flex-col gap-4"
        >
          <motion.a
            href={`mailto:${EMAIL}`}
            whileHover={{ x: 4 }}
            className="flex items-center gap-4 bg-gray-800/70 border border-gray-700/60 rounded-2xl p-4 hover:border-blue-500/50 transition-colors group"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-gray-400">Email me at</p>
              <p className="text-white font-medium truncate">{EMAIL}</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                copyEmail();
              }}
              aria-label="Copy email address"
              className="ml-auto p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/60 transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </motion.a>

          <motion.a
            href={`tel:${PHONE.replace(/\s/g, '')}`}
            whileHover={{ x: 4 }}
            className="flex items-center gap-4 bg-gray-800/70 border border-gray-700/60 rounded-2xl p-4 hover:border-blue-500/50 transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Call or WhatsApp</p>
              <p className="text-white font-medium">{PHONE}</p>
            </div>
          </motion.a>

          <div className="flex items-center gap-4 bg-gray-800/70 border border-gray-700/60 rounded-2xl p-4">
            <div className="w-11 h-11 rounded-xl bg-violet-500/15 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Based in</p>
              <p className="text-white font-medium">India (IST) · Remote friendly</p>
            </div>
          </div>

          {/* Response-time trust signal */}
          <div className="flex items-center gap-2.5 px-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <p className="text-sm text-gray-400">
              Usually replies within <span className="text-gray-200">24 hours</span>
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-3 mt-auto pt-2">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                whileHover={{ y: -4 }}
                className="w-11 h-11 rounded-xl bg-gray-800/70 border border-gray-700/60 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="md:col-span-3 bg-gray-800/70 border border-gray-700/60 rounded-2xl p-6 md:p-8"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="text-center py-14"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                >
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Thanks for reaching out!
                </h3>
                <p className="text-gray-400">
                  Your message is in my inbox — I'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-blue-400 hover:text-blue-300 font-medium"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses(!!errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, role, or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses(!!errors.message)} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-sm text-gray-500">
                  Prefer email? Write to me directly at{' '}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {EMAIL}
                  </a>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactSection;
