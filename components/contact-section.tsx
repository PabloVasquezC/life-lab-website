"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Braulio Arenas 760, Curicó, Chile",
    href: "https://www.google.com/maps/search/?api=1&query=Braulio+Arenas+760+Curicó+Chile",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+56 9 2621 9977",
    href: "tel:+56926219977",
  },
  {
    icon: Mail,
    label: "Email",
    value: "centrolifelab.spa@gmail.com",
    href: "mailto:centrolifelab.spa@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@centrolifelab",
    href: "https://www.instagram.com/centrolifelab/",
  },
];

const scheduleInfo = [
  { day: "Lunes a Viernes", hours: "6:00 AM - 10:00 PM" },
  { day: "Sábado", hours: "8:00 AM - 2:00 PM" },
  { day: "Domingo", hours: "Cerrado" },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Contacto
          </span>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wide">
            COMIENZA HOY
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos listos para ayudarte a alcanzar tus metas. Contáctanos y da
            el primer paso hacia una vida más saludable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-[var(--font-display)] text-2xl text-foreground mb-6 tracking-wide">
                INFORMACIÓN DE CONTACTO
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="text-foreground font-medium">
                        {item.value}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-[var(--font-display)] text-2xl text-foreground tracking-wide">
                  HORARIOS
                </h3>
              </div>
              <div className="space-y-3">
                {scheduleInfo.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground">{item.day}</span>
                    <span className="text-muted-foreground">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col"
          >
            <div className="flex-1 p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-primary/30 via-card to-primary/10 border border-primary/30 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-[var(--font-display)] text-3xl lg:text-4xl text-foreground mb-4 tracking-wide">
                ¿LISTO PARA COMENZAR?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Escríbenos por WhatsApp y recibe información personalizada sobre
                nuestros servicios. Nuestro equipo está listo para resolver
                todas tus dudas.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full text-lg py-6" asChild>
                  <Link
                    href="https://api.whatsapp.com/send?phone=+56926219977&text=Hola!%20Quiero%20más%20información%20sobre%20Life%20Lab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contactar por WhatsApp
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-lg py-6 bg-transparent"
                  asChild
                >
                  <Link href="tel:+56926219977">
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Ahora
                  </Link>
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 h-48 rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.8!2d-71.24!3d-34.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU4JzQ4LjAiUyA3McKwMTQnMjQuMCJX!5e0!3m2!1ses!2scl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Life Lab"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
