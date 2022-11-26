var unrealisticPhoneNumberRegex = /^[a-zA-Z0-9\-().\s]{10,15}$/;
var fullNameRegex = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;

export const phoneValidation = (e) => {
  return unrealisticPhoneNumberRegex.test(e);
};

export const fullNameValidation = (e) => {
  return fullNameRegex.test(e);
};
