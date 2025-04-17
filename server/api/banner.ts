import { bannerDatabase } from '~/resources/data/banner';

export default defineEventHandler((event) => {
  return {
    banner: bannerDatabase,
  };
})