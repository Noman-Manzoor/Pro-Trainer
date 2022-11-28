var unrealisticPhoneNumberRegex = /^[a-zA-Z0-9\-().\s]{10,15}$/;
var fullNameRegex = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;

export const phoneValidation = (e) => {
  return unrealisticPhoneNumberRegex.test(e);
};

export const fullNameValidation = (e) => {
  return fullNameRegex.test(e);
};
