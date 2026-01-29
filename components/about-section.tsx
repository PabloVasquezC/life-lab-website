"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Clientes Activos" },
  { icon: Award, value: "10+", label: "Años de Experiencia" },
  { icon: Target, value: "95%", label: "Satisfacción" },
  { icon: Clock, value: "6AM-10PM", label: "Horario" },
];

const values = [
  {
    title: "Compromiso",
    description:
      "Nos comprometemos con tu bienestar y trabajamos contigo para alcanzar tus metas de salud y fitness.",
  },
  {
    title: "Profesionalismo",
    description:
      "Equipo de profesionales certificados en kinesiología, nutrición y entrenamiento deportivo.",
  },
  {
    title: "Personalización",
    description:
      "Cada persona es única. Diseñamos programas adaptados a tus necesidades y objetivos específicos.",
  },
  {
    title: "Resultados",
    description:
      "Nos enfocamos en resultados medibles y sostenibles que transforman tu calidad de vida.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
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
            Sobre Nosotros
          </span>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wide">
            TU LABORATORIO DE VIDA
          </h2>
          <p className="text-lg text-muted-foreground">
            En Life Lab creemos que cada persona tiene el potencial de
            transformar su vida. Somos más que un gimnasio, somos tu compañero
            en el camino hacia una vida más saludable.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="relative p-6 lg:p-8 rounded-2xl bg-background border border-border text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-[var(--font-display)] text-3xl lg:text-4xl text-foreground mb-1 tracking-wide">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <h3 className="font-[var(--font-display)] text-xl lg:text-2xl text-foreground mb-2 tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
