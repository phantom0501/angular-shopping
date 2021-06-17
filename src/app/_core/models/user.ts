export interface User {
  id: 0;
  email: String;
  username: String;
  password: String;
  name: {
    firstname: String;
    lastname: String;
  };
  address: {
    city: String;
    street: String;
    number: Number;
    zipcode: String;
    geolocation: {
      lat: String;
      long: String;
    };
  };
  phone: String;
}
