const host = 'http://localhost:3035';

const customerRoute = '/api/customers';
const bikerRoute = '/api/bikers';
const foodVendorRoute = '/api/foodVendors';

const customerRegistrationRoute = `${host}${customerRoute}/register-customer`;
const customerLoginRoute = `${host}${customerRoute}/login-customer`;
const CustomerEmailVerificationRoute = `${host}${customerRoute}/verify-customer`;
const BikerVerificationRoute = `${host}${bikerRoute}/verify-biker`;
const foodVendorVerificationRoute = `${host}${foodVendorRoute}/verify-foodVendor`;

export {
  customerRegistrationRoute,
  CustomerEmailVerificationRoute,
  foodVendorVerificationRoute,
  BikerVerificationRoute,
  customerLoginRoute,
};
