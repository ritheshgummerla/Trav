export const SYSTEM_CONSTANTS = {
  BASE_URL: process.env.REACT_APP_API_URL,
  APP_NAME: process.env.REACT_APP_NAME,
  OKTA_ISSUER: process.env.REACT_OKTA_ISSUER,
  OKTA_CLIENTID: process.env.REACT_OKTA_CLIENTID,
};

export const PROJECT_CONST = {
  PAGINATION_PARAM: [10, 20, 50, 100],
};
export const LOB_CONST_LIST = [
  {
    id: 'BSI',
    name: 'Bond & Specialty Insurance',
  },
  {
    id: 'BI',
    name: 'Business Insurance',
  },
  {
    id: 'Canada',
    name: 'Canada',
  },
  {
    id: 'Canada Claim',
    name: 'Canada Claim',
  },
  {
    id: 'CSS',
    name: 'Corporate Claim',
  },
  {
    id: 'Cybersecurity',
    name: 'Cyber Security',
  },
  {
    id: 'DE',
    name: 'Digital Enablement',
  },
  {
    id: 'ED&A',
    name: 'Enterprise Data & Analystics',
  },
  {
    id: 'Europe',
    name: 'Enterprise Data & Analytics',
  },
  {
    id: 'Europe',
    name: 'Europe',
  },
  {
    id: 'DE',
    name: 'Digital Enablement',
  },
  {
    id: 'ICS',
    name: 'Infrastructure & Cloud Service',
  },
  {
    id: 'PI',
    name: 'Personal Insurance',
  },
];

// export const SYSTEM_CONSTANTS = {
//   BASE_URL: process.env.REACT_APP_API_URL,
//   PUBLIC_URL: process.env.PUBLIC_URL,
//   BASE_ENVIRONMENT: process.env.REACT_APP_ENV,
//   LOGOUT_URL: process.env.REACT_APP_API_URL,
//   APP_NAME: process.env.REACT_APP_NAME,
// };

// export const APP_CONSTANTS = {
//   DATE_FORMAT0: "HH:mm",
//   DATE_FORMAT1: "Do MMM, hh:mm a", // shows date like Monday, June 1st  // this is for timer tooltip date format
//   DATE_FORMAT3: "DD/MM/YYYY hh:mm a", // day month year
//   DATE_FORMAT6: "MM/DD/YYYY HH:mm:ss Z", //"07/23/2021 19:00:00 PDT",  // this is for timer date formate,
//   DATE_FORMAT7: "MM/DD/YYYY hh:mm A", // this is for Activity Stream

//   HOURS_IN12_FORMATE: "hh",
//   HOURS_IN24_FORMATE: "HH",
//   DEFAULT_DATE_FORMATE: "DD/MM/YYYY",
//   DEFAULT_DATE_FORMATE_FOR_CREATED_UPDATED: "MM/DD/YYYY",
//   DEFAULT_PAGE_SIZE: 25,
//   DEFAULT_PAGE_THRESHOLD: 3,
//   TOAST_WARNING: "warning",
//   TOAST_ERROR: "error",
//   TOAST_INFO: "info",
//   TOAST_SUCCESS: "success",
//   ACTIVEBID_REFRESH_INTERVAL: 1000 * 60 * 1,
//   REFRESH_INTERVAL_THIRTY_MINUTES: 1000 * 60 * 30,
//   ONLY_BLANK_SPACES_NOT_ALLOWED_REGEX: new RegExp(/.*[^ ].*/), // not allow to only space atleas 1 character is needed
//   ALLOW_ONLY_ALPHANUMERIC_REGEX: new RegExp(/^(?!\s*$)[-a-zA-Z0-9 \s]*$/), // allow alphanumeric but not only spaces
//   EMAIL_REGEX: new RegExp(
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   ),
//   EXTENSION_REGEX: new RegExp(/^[0-9]{0,8}$/),
//   PASSWORD_VALIDATION_REGEX: new RegExp(
//     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,20}$/
//   ), // Password must have one uppercase , one lowercase and one special character
//   ONLY_NUMERIC_REGEX: new RegExp("^[0-9]+$"),
//   ALLOW_ONLY_ALPHANUMERIC_AND_SPACE_REGEX: new RegExp(/^[-a-zA-Z0-9 ]*$/), // validation will be pass for only spaces
//   LOCALE_LANGUAGE_NAME: "en-US",
//   LOCALE_CURRENCY_TYPE: "USD",
//   LOCALE_CURRENCY_SYMBOL: "$",
//   NOW: "Now",
//   SOON: "Soon",
//   ANYTIME: "Anytime",
//   MANHEIM_DIRECT: "Manheim Direct",
//   ADESA_DIRECT: "Adesa Direct",
//   ASCENDING: "ASC",
//   DESCENDING: "DESC",
//   MSRP: "msrp",
//   MILEAGE: "mileage",
//   INVALID_ZIP_NUMBER: "Invalid Zip number",
//   CREATED_ON: "created_on",
//   IN_PROGRESS: "inProgress",
//   SUBMISSION_DATE: "Submission Date",
//   LAST_UPDATED: "Last Updated",
//   APPROVED_DATE: "Approved Date",
//   FUNDED_DATE: "Funded Date",
//   IN_NEGOTIATION: "inNegotiation",
//   READY_FOR_CHECKOUT: "readyForCheckout",
//   TITLE_PENDING: "titlePending",
//   UPDATED_ON: "updated_on",
//   APPROVED_ON: "approved_on",
//   FUNDED_ON: "funded_on",
//   STATUS_F: "status_f",
// };
