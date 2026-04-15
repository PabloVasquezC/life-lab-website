import { Header } from "@/components/header";
import { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { N8nChat } from "@/components/N8n";
import { HERO_QUERY, SERVICES_QUERY, ABOUT_QUERY, GALLERY_QUERY, SETTINGS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({ query: SETTINGS_QUERY });
  return {
    title: settings?.seo?.title || 'Life Lab | Centro de Entrenamiento & Salud',
    description: settings?.seo?.description || 'Gym, Kinesiología, Nutrición. Entrenamiento personalizado y asesorías expertas.',
  }
}

export const revalidate = 5; // revalidate every 5 seconds


export default async function Home() {
  const [
    { data: hero },
    { data: services },
    { data: about },
    { data: gallery },
    { data: settings }
  ] = await Promise.all([
    sanityFetch({ query: HERO_QUERY }),
    sanityFetch({ query: SERVICES_QUERY }),
    sanityFetch({ query: ABOUT_QUERY }),
    sanityFetch({ query: GALLERY_QUERY }),
    sanityFetch({ query: SETTINGS_QUERY }),
  ]);

  return (
    <main className="min-h-screen bg-background">
      <Header settings={settings} />
      <HeroSection data={hero} />
      <ServicesSection data={services} />
      <AboutSection data={about} />
      <GallerySection data={gallery} />
      <ContactSection settings={settings} />
      <Footer settings={settings} />
      <N8nChat />
    </main>
  );
}

