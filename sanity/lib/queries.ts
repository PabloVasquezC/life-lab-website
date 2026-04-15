import { defineQuery } from "next-sanity";

export const HERO_QUERY = defineQuery(`*[_type == "hero"][0] {
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText,
  ctaLink
}`);

export const SERVICES_QUERY = defineQuery(`*[_type == "service"] | order(order asc) {
  title,
  description,
  image,
  icon,
  features,
  order
}`);

export const ABOUT_QUERY = defineQuery(`*[_type == "about"][0] {
  title,
  description,
  stats,
  values
}`);

export const GALLERY_QUERY = defineQuery(`*[_type == "gallery"] | order(order asc) {
  title,
  image,
  order
}`);

export const SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0] {
  siteName,
  whatsapp,
  phone,
  email,
  address,
  instagram,
  schedule,
  seo
}`);
