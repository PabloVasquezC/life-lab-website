"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="https://api.whatsapp.com/send?phone=+56926219977&text=Hola!%20Quiero%20más%20información%20sobre%20Life%20Lab"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </Link>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0 rounded-full bg-[#25D366]/30 -z-10"
      />
    </motion.div>
  );
}
