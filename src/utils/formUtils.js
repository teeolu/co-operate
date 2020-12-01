export const regexPatterns = {
  email: "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*",
  password: "[0-9]{11}",
  bvn: "[0-9]"
};

export const errorMessages = {
  email: "Input should be a valid email address",
  bvn: "BVN are numbers with 11 digits"
};
