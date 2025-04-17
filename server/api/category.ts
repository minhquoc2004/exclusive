import { categoryDatabase } from '~/resources/data/cateory';

export default defineEventHandler((event) => {
  return {
    categories: categoryDatabase,
  };
})