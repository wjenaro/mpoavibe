import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

import './PhoneVerification.css';


const countryCodes = {
  AF: "+93",  // Afghanistan
  AL: "+355", // Albania
  DZ: "+213", // Algeria
  AS: "+1-684", // American Samoa
  AD: "+376", // Andorra
  AO: "+244", // Angola
  AI: "+1-264", // Anguilla
  AQ: "+672", // Antarctica
  AG: "+1-268", // Antigua and Barbuda
  AR: "+54",  // Argentina
  AM: "+374", // Armenia
  AW: "+297", // Aruba
  AU: "+61",  // Australia
  AT: "+43",  // Austria
  AZ: "+994", // Azerbaijan
  BS: "+1-242", // Bahamas
  BH: "+973", // Bahrain
  BD: "+880", // Bangladesh
  BB: "+1-246", // Barbados
  BY: "+375", // Belarus
  BE: "+32",  // Belgium
  BZ: "+501", // Belize
  BJ: "+229", // Benin
  BM: "+1-441", // Bermuda
  BT: "+975", // Bhutan
  BO: "+591", // Bolivia
  BA: "+387", // Bosnia and Herzegovina
  BW: "+267", // Botswana
  BR: "+55",  // Brazil
  IO: "+246", // British Indian Ocean Territory
  BN: "+673", // Brunei
  BG: "+359", // Bulgaria
  BF: "+226", // Burkina Faso
  BI: "+257", // Burundi
  CV: "+238", // Cabo Verde
  KH: "+855", // Cambodia
  CM: "+237", // Cameroon
  CA: "+1",   // Canada
  KY: "+1-345", // Cayman Islands
  CF: "+236", // Central African Republic
  TD: "+235", // Chad
  CL: "+56",  // Chile
  CN: "+86",  // China
  CO: "+57",  // Colombia
  KM: "+269", // Comoros
  CD: "+243", // Congo, Democratic Republic of the
  CG: "+242", // Congo, Republic of the
  CK: "+682", // Cook Islands
  CR: "+506", // Costa Rica
  HR: "+385", // Croatia
  CU: "+53",  // Cuba
  CW: "+599", // Curaçao
  CY: "+357", // Cyprus
  CZ: "+420", // Czech Republic
  DK: "+45",  // Denmark
  DJ: "+253", // Djibouti
  DM: "+1-767", // Dominica
  DO: "+1-809", // Dominican Republic
  EC: "+593", // Ecuador
  EG: "+20",  // Egypt
  SV: "+503", // El Salvador
  GQ: "+240", // Equatorial Guinea
  ER: "+291", // Eritrea
  EE: "+372", // Estonia
  SZ: "+268", // Eswatini
  ET: "+251", // Ethiopia
  FJ: "+679", // Fiji
  FI: "+358", // Finland
  FR: "+33",  // France
  GA: "+241", // Gabon
  GM: "+220", // Gambia
  GE: "+995", // Georgia
  DE: "+49",  // Germany
  GH: "+233", // Ghana
  GI: "+350", // Gibraltar
  GR: "+30",  // Greece
  GL: "+299", // Greenland
  GD: "+1-473", // Grenada
  GP: "+590", // Guadeloupe
  GU: "+1-671", // Guam
  GT: "+502", // Guatemala
  GG: "+44-1481", // Guernsey
  GN: "+224", // Guinea
  GW: "+245", // Guinea-Bissau
  GY: "+592", // Guyana
  HT: "+509", // Haiti
  HM: "+672", // Heard Island and McDonald Islands
  VA: "+379", // Holy See
  HN: "+504", // Honduras
  HK: "+852", // Hong Kong
  HU: "+36",  // Hungary
  IS: "+354", // Iceland
  IN: "+91",  // India
  ID: "+62",  // Indonesia
  IR: "+98",  // Iran
  IQ: "+964", // Iraq
  IE: "+353", // Ireland
  IM: "+44-1624", // Isle of Man
  IL: "+972", // Israel
  IT: "+39",  // Italy
  JM: "+1-876", // Jamaica
  JP: "+81",  // Japan
  JE: "+44-1534", // Jersey
  JO: "+962", // Jordan
  KZ: "+7",   // Kazakhstan
  KE: "+254", // Kenya
  KI: "+686", // Kiribati
  KP: "+850", // Korea, North
  KR: "+82",  // Korea, South
  KW: "+965", // Kuwait
  KG: "+996", // Kyrgyzstan
  LA: "+856", // Laos
  LV: "+371", // Latvia
  LB: "+961", // Lebanon
  LS: "+266", // Lesotho
  LR: "+231", // Liberia
  LY: "+218", // Libya
  LI: "+423", // Liechtenstein
  LT: "+370", // Lithuania
  LU: "+352", // Luxembourg
  MO: "+853", // Macau
  MG: "+261", // Madagascar
  MW: "+265", // Malawi
  MY: "+60",  // Malaysia
  MV: "+960", // Maldives
  ML: "+223", // Mali
  MT: "+356", // Malta
  MH: "+692", // Marshall Islands
  MQ: "+596", // Martinique
  MR: "+222", // Mauritania
  MU: "+230", // Mauritius
  YT: "+262", // Mayotte
  MX: "+52",  // Mexico
  FM: "+691", // Micronesia
  MD: "+373", // Moldova
  MC: "+377", // Monaco
  MN: "+976", // Mongolia
  ME: "+382", // Montenegro
  MS: "+1-664", // Montserrat
  MA: "+212", // Morocco
  MZ: "+258", // Mozambique
  MM: "+95",  // Myanmar
  NA: "+264", // Namibia
  NR: "+674", // Nauru
  NP: "+977", // Nepal
  NL: "+31",  // Netherlands
  NC: "+687", // New Caledonia
  NZ: "+64",  // New Zealand
  NI: "+505", // Nicaragua
  NE: "+227", // Niger
  NG: "+234", // Nigeria
  NU: "+683", // Niue
  NF: "+672", // Norfolk Island
  MP: "+1-670", // Northern Mariana Islands
  NO: "+47",  // Norway
  OM: "+968", // Oman
  PK: "+92",  // Pakistan
  PW: "+680", // Palau
  PS: "+970", // Palestine
  PA: "+507", // Panama
  PG: "+675", // Papua New Guinea
  PY: "+595", // Paraguay
  PE: "+51",  // Peru
  PH: "+63",  // Philippines
  PL: "+48",  // Poland
  PT: "+351", // Portugal
  PR: "+1-787", // Puerto Rico
  QA: "+974", // Qatar
  RE: "+262", // Réunion
  RO: "+40",  // Romania
  RU: "+7",   // Russia
  RW: "+250", // Rwanda
  BL: "+590", // Saint Barthélemy
  KN: "+1-869", // Saint Kitts and Nevis
  LC: "+1-758", // Saint Lucia
  MF: "+590", // Saint Martin
  PM: "+508", // Saint Pierre and Miquelon
  VC: "+1-784", // Saint Vincent and the Grenadines
  WS: "+685", // Samoa
  SM: "+378", // San Marino
  ST: "+239", // São Tomé and Príncipe
  SA: "+966", // Saudi Arabia
  SN: "+221", // Senegal
  RS: "+381", // Serbia
  SC: "+248", // Seychelles
  SL: "+232", // Sierra Leone
  SG: "+65",  // Singapore
  SX: "+1-721", // Sint Maarten
  SK: "+421", // Slovakia
  SI: "+386", // Slovenia
  SB: "+677", // Solomon Islands
  SO: "+252", // Somalia
  ZA: "+27",  // South Africa
  GS: "+500", // South Georgia and the South Sandwich Islands
  SS: "+211", // South Sudan
  ES: "+34",  // Spain
  LK: "+94",  // Sri Lanka
  SD: "+249", // Sudan
  SR: "+597", // Suriname
  SJ: "+47",  // Svalbard and Jan Mayen
  SZ: "+268", // Swaziland
  SE: "+46",  // Sweden
  CH: "+41",  // Switzerland
  SY: "+963", // Syria
  TW: "+886", // Taiwan
  TJ: "+992", // Tajikistan
  TZ: "+255", // Tanzania
  TH: "+66",  // Thailand
  TL: "+670", // Timor-Leste
  TG: "+228", // Togo
  TK: "+690", // Tokelau
  TO: "+676", // Tonga
  TT: "+1-868", // Trinidad and Tobago
  TN: "+216", // Tunisia
  TR: "+90",  // Turkey
  TM: "+993", // Turkmenistan
  TC: "+1-649", // Turks and Caicos Islands
  TV: "+688", // Tuvalu
  UG: "+256", // Uganda
  UA: "+380", // Ukraine
  AE: "+971", // United Arab Emirates
  GB: "+44",  // United Kingdom
  US: "+1",   // United States
  UY: "+598", // Uruguay
  UZ: "+998", // Uzbekistan
  VU: "+678", // Vanuatu
  VE: "+58",  // Venezuela
  VN: "+84",  // Vietnam
  WF: "+681", // Wallis and Futuna
  EH: "+212", // Western Sahara
  YE: "+967", // Yemen
  ZM: "+260", // Zambia
  ZW: "+263", // Zimbabwe
};

const PhoneVerification = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [countryCode, setCountryCode] = useState("+1"); // Default to US
  const [countrySelect, setCountrySelect] = useState("US");

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        const { country_code } = response.data;

        if (country_code && countryCodes[country_code]) {
          setCountryCode(countryCodes[country_code]);
          setCountrySelect(country_code);
        } else {
          console.warn("Country code not found, defaulting to US");
          setCountryCode("+1");
          setCountrySelect("US");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setCountryCode("+1"); // Fallback
        setCountrySelect("US");
      }
    };

    getLocation();
  }, []);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    console.log(`Sending verification code to ${countryCode} ${phoneNumber}`);
    setIsCodeSent(true);
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    if (verificationCode === "123456") {
      navigate("/complete-signup");
    } else {
      alert("Invalid code");
    }
  };

  return (
    <div className="phone-verification bg-purple-900 h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-green-300 font-love mb-6">Phone Verification</h1>
      {!isCodeSent ? (
        <form onSubmit={handlePhoneSubmit} className="flex flex-col gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <select
              value={countrySelect}
              onChange={(e) => {
                setCountrySelect(e.target.value);
                setCountryCode(countryCodes[e.target.value]);
              }}
              className="bg-gray-200 py-2 px-4 rounded-l-lg"
            >
              {Object.keys(countryCodes).map((code) => (
                <option key={code} value={code}>
                  {code} ({countryCodes[code]})
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="py-2 px-4 w-full focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
          >
            Send Verification Code
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerificationSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
          >
            Verify and Continue
          </button>
        </form>
      )}
    </div>
  );
};

export default PhoneVerification;
