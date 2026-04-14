import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-04-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function uploadImage(imagePath) {
  if (!imagePath) return null;
  const fullPath = path.join(process.cwd(), 'public', imagePath.replace(/^\//, ''));
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    return null;
  }
  const buffer = fs.readFileSync(fullPath);
  const asset = await client.assets.upload('image', buffer, {
    filename: path.basename(fullPath),
  });
  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: asset._id,
    },
  };
}

async function migrate() {
  console.log('Starting migration...');

  // 1. Hero
  console.log('Migrating Hero...');
  const heroImage = await uploadImage('/images/hero-new.png');
  await client.createOrReplace({
    _id: 'hero-main',
    _type: 'hero',
    title: 'LIFE LAB',
    subtitle: 'CENTRO DE ENTRENAMIENTO & SALUD',
    description: 'Entrenamiento personalizado y asesorías expertas. Transforma tu vida con nuestro equipo de profesionales en fitness, kinesiología y nutrición.',
    backgroundImage: heroImage,
    ctaText: 'Comenzar Ahora',
    ctaLink: 'https://api.whatsapp.com/send?phone=+56926219977&text=Hola!%20Quiero%20más%20información',
  });

  // 2. Services
  console.log('Migrating Services...');
  const servicesData = [
    {
      title: "Gimnasio",
      description: "Equipamiento de última generación y espacios diseñados para optimizar tu entrenamiento. Ambiente motivador para alcanzar tus metas.",
      image: "/images/training-new.png",
      icon: "Dumbbell",
      features: ["Equipos modernos", "Zonas especializadas", "Horarios flexibles"],
      order: 1
    },
    {
      title: "Kinesiología",
      description: "Rehabilitación y tratamiento profesional para lesiones deportivas y condiciones crónicas. Recupera tu movilidad y calidad de vida.",
      image: "/images/kinesiology-new.png",
      icon: "Heart",
      features: ["Rehabilitación deportiva", "Tratamiento de lesiones", "Terapia manual"],
      order: 2
    },
    {
      title: "Nutrición",
      description: "Planes nutricionales personalizados para complementar tu entrenamiento. Alimentación inteligente para resultados óptimos.",
      image: "/images/nutrition-new.png",
      icon: "Apple",
      features: ["Planes personalizados", "Control de peso", "Suplementación"],
      order: 3
    },
    {
      title: "Entrenamiento Personalizado",
      description: "Programas de entrenamiento diseñados específicamente para ti. Seguimiento continuo y ajustes para maximizar resultados.",
      image: "/images/hero-new.png",
      icon: "TrendingUp",
      features: ["Programas a medida", "Seguimiento continuo", "Resultados medibles"],
      order: 4
    }
  ];

  for (const service of servicesData) {
    const imgAsset = await uploadImage(service.image);
    await client.create({
      _type: 'service',
      title: service.title,
      description: service.description,
      image: imgAsset,
      icon: service.icon,
      features: service.features,
      order: service.order,
    });
  }

  // 3. About
  console.log('Migrating About...');
  await client.createOrReplace({
    _id: 'about-main',
    _type: 'about',
    title: 'TU LABORATORIO DE VIDA',
    description: 'En Life Lab creemos que cada persona tiene el potencial de transformar su vida. Somos más que un gimnasio, somos tu compañero en el camino hacia una vida más saludable.',
    stats: [
      { icon: 'Users', value: '500+', label: 'Clientes Activos' },
      { icon: 'Award', value: '10+', label: 'Años de Experiencia' },
      { icon: 'Target', value: '95%', label: 'Satisfacción' },
      { icon: 'Clock', value: '6AM-10PM', label: 'Horario' },
    ],
    values: [
      { title: 'Compromiso', description: 'Nos comprometemos con tu bienestar y trabajamos contigo para alcanzar tus metas de salud y fitness.' },
      { title: 'Profesionalismo', description: 'Equipo de profesionales certificados en kinesiología, nutrición y entrenamiento deportivo.' },
      { title: 'Personalización', description: 'Cada persona es única. Diseñamos programas adaptados a tus necesidades y objetivos específicos.' },
      { title: 'Resultados', description: 'Nos enfocamos en resultados medibles y sostenibles que transforman tu calidad de vida.' },
    ]
  });

  // 4. Gallery
  console.log('Migrating Gallery...');
  for (let i = 1; i <= 6; i++) {
    const imgPath = `/images/gallery-${i}.png`;
    const imgAsset = await uploadImage(imgPath);
    if (imgAsset) {
      await client.create({
        _type: 'gallery',
        title: `Galería ${i}`,
        image: imgAsset,
        order: i,
      });
    }
  }

  // 5. Settings
  console.log('Migrating Settings...');
  await client.createOrReplace({
    _id: 'settings-main',
    _type: 'settings',
    siteName: 'Life Lab',
    whatsapp: '+56926219977',
    phone: '+56 9 2621 9977',
    email: 'centrolifelab.spa@gmail.com',
    address: 'Braulio Arenas 760, Curicó, Chile',
    instagram: 'https://www.instagram.com/centrolifelab/',
    schedule: [
      { day: 'Lunes a Viernes', hours: '6:00 AM - 10:00 PM' },
      { day: 'Sábado', hours: '8:00 AM - 2:00 PM' },
      { day: 'Domingo', hours: 'Cerrado' },
    ],
    seo: {
      title: 'Life Lab - Centro de Entrenamiento & Salud',
      description: 'Entrenamiento personalizado, kinesiología y nutrición en Curicó, Chile.',
    }
  });

  console.log('Migration completed successfully!');
}

migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
