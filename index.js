customerName = 'bob';
const leastFavoriteCustomer = 'barb';

function upperCaseCustomerName() {
  customerName =  customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavorite() {
  leastFavoriteCustomer = 'not barb';
}

function attemptTwoFavoriteCustomers() {
  const favoriteCustomer = 'doug';
  favoriteCustomer = 'dog';
}