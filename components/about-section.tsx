"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as LucideIcons from "lucide-react";

interface AboutData {
  title: string;
  description: string;
  stats: { icon: string; value: string; label: string }[];
  values: { title: string; description: string }[];
}

export function AboutSection({ data }: { data: AboutData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = {
    title: data?.title || "TU LABORATORIO DE VIDA",
    description: data?.description || "En Life Lab creemos que cada persona tiene el potencial de transformar su vida. Somos más que un gimnasio, somos tu compañero en el camino hacia una vida más saludable.",
    stats: data?.stats || [],
    values: data?.values || [],
  };

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
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {content.description}
          </p>
        </motion.div>

        {/* Stats */}
        {content.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
          >
            {content.stats.map((stat, index) => {
              const Icon = (LucideIcons as any)[stat.icon] || LucideIcons.Target;
              return (
                <motion.div
                  key={stat.label || index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="relative p-6 lg:p-8 rounded-2xl bg-background border border-border text-center group hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-[var(--font-display)] text-3xl lg:text-4xl text-foreground mb-1 tracking-wide">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Values */}
        {content.values.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.values.map((value, index) => (
              <motion.div
                key={value.title || index}
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
        )}
      </div>
    </section>
  );
}

