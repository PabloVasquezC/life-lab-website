import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './hero'
import { serviceType } from './service'
import { aboutType } from './about'
import { galleryType } from './gallery'
import { settingsType } from './settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, serviceType, aboutType, galleryType, settingsType],
}
