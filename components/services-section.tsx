"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dumbbell,
  Heart,
  Apple,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Dumbbell,
    title: "Gimnasio",
    description:
      "Equipamiento de última generación y espacios diseñados para optimizar tu entrenamiento. Ambiente motivador para alcanzar tus metas.",
    image: "/images/training.jpg",
    features: ["Equipos modernos", "Zonas especializadas", "Horarios flexibles"],
  },
  {
    icon: Heart,
    title: "Kinesiología",
    description:
      "Rehabilitación y tratamiento profesional para lesiones deportivas y condiciones crónicas. Recupera tu movilidad y calidad de vida.",
    image: "/images/kinesiology.jpg",
    features: [
      "Rehabilitación deportiva",
      "Tratamiento de lesiones",
      "Terapia manual",
    ],
  },
  {
    icon: Apple,
    title: "Nutrición",
    description:
      "Planes nutricionales personalizados para complementar tu entrenamiento. Alimentación inteligente para resultados óptimos.",
    image: "/images/nutrition.jpg",
    features: ["Planes personalizados", "Control de peso", "Suplementación"],
  },
  {
    icon: TrendingUp,
    title: "Entrenamiento Personalizado",
    description:
      "Programas de entrenamiento diseñados específicamente para ti. Seguimiento continuo y ajustes para maximizar resultados.",
    image: "/images/hero-gym.jpg",
    features: ["Programas a medida", "Seguimiento continuo", "Resultados medibles"],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="servicios"
      ref={ref}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
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
            Nuestros Servicios
          </span>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wide">
            TODO LO QUE NECESITAS
          </h2>
          <p className="text-lg text-muted-foreground">
            Un centro integral donde encontrarás todas las herramientas para
            transformar tu cuerpo y mejorar tu salud.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-[var(--font-display)] text-2xl lg:text-3xl text-foreground mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-primary hover:text-accent hover:bg-transparent"
                  asChild
                >
                  <Link
                    href="https://api.whatsapp.com/send?phone=+56926219977&text=Hola!%20Quiero%20más%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Más información
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ECNT Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 lg:p-12 rounded-2xl bg-gradient-to-r from-primary/20 via-card to-primary/20 border border-primary/30"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-[var(--font-display)] text-2xl lg:text-3xl text-foreground mb-2 tracking-wide">
                TRATAMIENTO DE ECNT
              </h3>
              <p className="text-muted-foreground max-w-xl">
                Programa especializado en Enfermedades Crónicas No Transmisibles.
                Abordaje integral con seguimiento médico, nutricional y de
                ejercicio físico.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link
                href="https://api.whatsapp.com/send?phone=+56926219977&text=Hola!%20Quiero%20información%20sobre%20el%20programa%20ECNT"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar Programa
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
