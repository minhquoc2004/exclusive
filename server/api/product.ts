import { productDatabase } from '~/resources/data/product';

export default defineEventHandler((event) => {
  const query = getQuery(event);

  const category = query.category as string;
  const page = parseInt(query.page as string) || 1;
  const limit = parseInt(query.limit as string) || 20;

  let filteredProducts = productDatabase;
  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category === category);
  }

  const start = (page - 1) * limit;
  const paginatedProducts = filteredProducts.slice(start, start + limit);
  
  return {
    products: paginatedProducts,
    total: filteredProducts.length,
  };
})