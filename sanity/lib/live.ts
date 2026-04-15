import { client } from './client'

export const sanityFetch = async ({ query, params = {} }: { query: string; params?: any }) => {
  const data = await client.fetch(query, params, {
    // Esto asegura que use la configuración de revalidación de la página
    next: { revalidate: 5 } 
  });
  return { data };
};

