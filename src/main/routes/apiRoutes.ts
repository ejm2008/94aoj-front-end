const baseUrl = "https://burgerlivery-api.vercel.app";

export const apiRoutes = {
  login: `${baseUrl}/user/login`,
  categories: `${baseUrl}/categories`,
  hamburgers: `${baseUrl}/hamburgers`,
  appetizers: `${baseUrl}/appetizers`,
  desserts: `${baseUrl}/desserts`,
  beverages: `${baseUrl}/beverages`,
  payment: `${baseUrl}/payment/options`,
  createOrder: `${baseUrl}/order/create-order`,
};
