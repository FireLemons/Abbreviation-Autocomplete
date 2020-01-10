const autocomplete = new Vue({
  el: '#app',
  data: {
    abbreviations: [
      {
        a: 'AF',
        d: 'Afghanistan'
      },
      {
        a: 'AL',
        d: 'Albania'
      },
      {
        a: 'DZ',
        d: 'Algeria'
      },
      {
        a: 'AS',
        d: 'American Samoa'
      },
      {
        a: 'AD',
        d: 'Andorra'
      },
      {
        a: 'AO',
        d: 'Angola'
      },
      {
        a: 'AI',
        d: 'Anguilla'
      },
      {
        a: 'AQ',
        d: 'Antarctica'
      },
      {
        a: 'AG',
        d: 'Antigua and Barbuda'
      },
      {
        a: 'AR',
        d: 'Argentina'
      },
      {
        a: 'AM',
        d: 'Armenia'
      },
      {
        a: 'AW',
        d: 'Aruba'
      },
      {
        a: 'AU',
        d: 'Australia'
      },
      {
        a: 'AT',
        d: 'Austria'
      },
      {
        a: 'AZ',
        d: 'Azerbaijan'
      },
      {
        a: 'BS',
        d: 'Bahamas'
      },
      {
        a: 'BH',
        d: 'Bahrain'
      },
      {
        a: 'BD',
        d: 'Bangladesh'
      },
      {
        a: 'BB',
        d: 'Barbados'
      },
      {
        a: 'BY',
        d: 'Belarus'
      },
      {
        a: 'BE',
        d: 'Belgium'
      },
      {
        a: 'BZ',
        d: 'Belize'
      },
      {
        a: 'BJ',
        d: 'Benin'
      },
      {
        a: 'BM',
        d: 'Bermuda'
      },
      {
        a: 'BT',
        d: 'Bhutan'
      },
      {
        a: 'BO',
        d: 'Bolivia'
      },
      {
        a: 'BQ',
        d: 'Bonaire, Sint Eustatius and Saba'
      },
      {
        a: 'BA',
        d: 'Bosnia and Herzegovina'
      },
      {
        a: 'BW',
        d: 'Botswana'
      },
      {
        a: 'BV',
        d: 'Bouvet Island'
      },
      {
        a: 'BR',
        d: 'Brazil'
      },
      {
        a: 'IO',
        d: 'British Indian Ocean Territory'
      },
      {
        a: 'BN',
        d: 'Brunei Darussalam'
      },
      {
        a: 'BG',
        d: 'Bulgaria'
      },
      {
        a: 'BF',
        d: 'Burkina Faso'
      },
      {
        a: 'BI',
        d: 'Burundi'
      },
      {
        a: 'CV',
        d: 'Cabo Verde'
      },
      {
        a: 'KH',
        d: 'Cambodia'
      },
      {
        a: 'CM',
        d: 'Cameroon'
      },
      {
        a: 'CA',
        d: 'Canada'
      },
      {
        a: 'KY',
        d: 'Cayman Islands'
      },
      {
        a: 'CF',
        d: 'Central African Republic'
      },
      {
        a: 'TD',
        d: 'Chad'
      },
      {
        a: 'CL',
        d: 'Chile'
      },
      {
        a: 'CN',
        d: 'China'
      },
      {
        a: 'CX',
        d: 'Christmas Island'
      },
      {
        a: 'CC',
        d: 'Cocos (Keeling) Islands'
      },
      {
        a: 'CO',
        d: 'Colombia'
      },
      {
        a: 'KM',
        d: 'Comoros'
      },
      {
        a: 'CD',
        d: 'Congo (Democratic Republic of the)'
      },
      {
        a: 'CG',
        d: 'Congo'
      },
      {
        a: 'CK',
        d: 'Cook Islands'
      },
      {
        a: 'CR',
        d: 'Costa Rica'
      },
      {
        a: 'HR',
        d: 'Croatia'
      },
      {
        a: 'CU',
        d: 'Cuba'
      },
      {
        a: 'CW',
        d: 'Curacao'
      },
      {
        a: 'CY',
        d: 'Cyprus'
      },
      {
        a: 'CZ',
        d: 'Czechia'
      },
      {
        a: 'CI',
        d: "Cote d'Ivoire"
      },
      {
        a: 'DK',
        d: 'Denmark'
      },
      {
        a: 'DJ',
        d: 'Djibouti'
      },
      {
        a: 'DM',
        d: 'Dominica'
      },
      {
        a: 'DO',
        d: 'Dominican Republic'
      },
      {
        a: 'EC',
        d: 'Ecuador'
      },
      {
        a: 'EG',
        d: 'Egypt'
      },
      {
        a: 'SV',
        d: 'El Salvador'
      },
      {
        a: 'GQ',
        d: 'Equatorial Guinea'
      },
      {
        a: 'ER',
        d: 'Eritrea'
      },
      {
        a: 'EE',
        d: 'Estonia'
      },
      {
        a: 'SZ',
        d: 'Eswatini'
      },
      {
        a: 'ET',
        d: 'Ethiopia'
      },
      {
        a: 'FK',
        d: 'Falkland Islands [Malvinas]'
      },
      {
        a: 'FO',
        d: 'Faroe Islands'
      },
      {
        a: 'FJ',
        d: 'Fiji'
      },
      {
        a: 'FI',
        d: 'Finland'
      },
      {
        a: 'FR',
        d: 'France'
      },
      {
        a: 'GF',
        d: 'French Guiana'
      },
      {
        a: 'PF',
        d: 'French Polynesia'
      },
      {
        a: 'TF',
        d: 'French Southern Territories'
      },
      {
        a: 'GA',
        d: 'Gabon'
      },
      {
        a: 'GM',
        d: 'Gambia'
      },
      {
        a: 'GE',
        d: 'Georgia'
      },
      {
        a: 'DE',
        d: 'Germany'
      },
      {
        a: 'GH',
        d: 'Ghana'
      },
      {
        a: 'GI',
        d: 'Gibraltar'
      },
      {
        a: 'GR',
        d: 'Greece'
      },
      {
        a: 'GL',
        d: 'Greenland'
      },
      {
        a: 'GD',
        d: 'Grenada'
      },
      {
        a: 'GP',
        d: 'Guadeloupe'
      },
      {
        a: 'GU',
        d: 'Guam'
      },
      {
        a: 'GT',
        d: 'Guatemala'
      },
      {
        a: 'GG',
        d: 'Guernsey'
      },
      {
        a: 'GN',
        d: 'Guinea'
      },
      {
        a: 'GW',
        d: 'Guinea-Bissau'
      },
      {
        a: 'GY',
        d: 'Guyana'
      },
      {
        a: 'HT',
        d: 'Haiti'
      },
      {
        a: 'HM',
        d: 'Heard Island and McDonald Islands'
      },
      {
        a: 'VA',
        d: 'Holy See'
      },
      {
        a: 'HN',
        d: 'Honduras'
      },
      {
        a: 'HK',
        d: 'Hong Kong'
      },
      {
        a: 'HU',
        d: 'Hungary'
      },
      {
        a: 'IS',
        d: 'Iceland'
      },
      {
        a: 'IN',
        d: 'India'
      },
      {
        a: 'ID',
        d: 'Indonesia'
      },
      {
        a: 'IR',
        d: 'Iran'
      },
      {
        a: 'IQ',
        d: 'Iraq'
      },
      {
        a: 'IE',
        d: 'Ireland'
      },
      {
        a: 'IM',
        d: 'Isle of Man'
      },
      {
        a: 'IL',
        d: 'Israel'
      },
      {
        a: 'IT',
        d: 'Italy'
      },
      {
        a: 'JM',
        d: 'Jamaica'
      },
      {
        a: 'JP',
        d: 'Japan'
      },
      {
        a: 'JE',
        d: 'Jersey'
      },
      {
        a: 'JO',
        d: 'Jordan'
      },
      {
        a: 'KZ',
        d: 'Kazakhstan'
      },
      {
        a: 'KE',
        d: 'Kenya'
      },
      {
        a: 'KI',
        d: 'Kiribati'
      },
      {
        a: 'KP',
        d: 'North Korea'
      },
      {
        a: 'KR',
        d: 'South Korea'
      },
      {
        a: 'KW',
        d: 'Kuwait'
      },
      {
        a: 'KG',
        d: 'Kyrgyzstan'
      },
      {
        a: 'LA',
        d: 'Laos'
      },
      {
        a: 'LV',
        d: 'Latvia'
      },
      {
        a: 'LB',
        d: 'Lebanon'
      },
      {
        a: 'LS',
        d: 'Lesotho'
      },
      {
        a: 'LR',
        d: 'Liberia'
      },
      {
        a: 'LY',
        d: 'Libya'
      },
      {
        a: 'LI',
        d: 'Liechtenstein'
      },
      {
        a: 'LT',
        d: 'Lithuania'
      },
      {
        a: 'LU',
        d: 'Luxembourg'
      },
      {
        a: 'MO',
        d: 'Macao'
      },
      {
        a: 'MG',
        d: 'Madagascar'
      },
      {
        a: 'MW',
        d: 'Malawi'
      },
      {
        a: 'MY',
        d: 'Malaysia'
      },
      {
        a: 'MV',
        d: 'Maldives'
      },
      {
        a: 'ML',
        d: 'Mali'
      },
      {
        a: 'MT',
        d: 'Malta'
      },
      {
        a: 'MH',
        d: 'Marshall Islands'
      },
      {
        a: 'MQ',
        d: 'Martinique'
      },
      {
        a: 'MR',
        d: 'Mauritania'
      },
      {
        a: 'MU',
        d: 'Mauritius'
      },
      {
        a: 'YT',
        d: 'Mayotte'
      },
      {
        a: 'MX',
        d: 'Mexico'
      },
      {
        a: 'FM',
        d: 'Micronesia (Federated States of)'
      },
      {
        a: 'MD',
        d: 'Moldova'
      },
      {
        a: 'MC',
        d: 'Monaco'
      },
      {
        a: 'MN',
        d: 'Mongolia'
      },
      {
        a: 'ME',
        d: 'Montenegro'
      },
      {
        a: 'MS',
        d: 'Montserrat'
      },
      {
        a: 'MA',
        d: 'Morocco'
      },
      {
        a: 'MZ',
        d: 'Mozambique'
      },
      {
        a: 'MM',
        d: 'Myanmar'
      },
      {
        a: 'NA',
        d: 'Namibia'
      },
      {
        a: 'NR',
        d: 'Nauru'
      },
      {
        a: 'NP',
        d: 'Nepal'
      },
      {
        a: 'NL',
        d: 'Netherlands'
      },
      {
        a: 'NC',
        d: 'New Caledonia'
      },
      {
        a: 'NZ',
        d: 'New Zealand'
      },
      {
        a: 'NI',
        d: 'Nicaragua'
      },
      {
        a: 'NE',
        d: 'Niger'
      },
      {
        a: 'NG',
        d: 'Nigeria'
      },
      {
        a: 'NU',
        d: 'Niue'
      },
      {
        a: 'NF',
        d: 'Norfolk Island'
      },
      {
        a: 'MK',
        d: 'North Macedonia'
      },
      {
        a: 'MP',
        d: 'Northern Mariana Islands'
      },
      {
        a: 'NO',
        d: 'Norway'
      },
      {
        a: 'OM',
        d: 'Oman'
      },
      {
        a: 'PK',
        d: 'Pakistan'
      },
      {
        a: 'PW',
        d: 'Palau'
      },
      {
        a: 'PS',
        d: 'Palestine, State of'
      },
      {
        a: 'PA',
        d: 'Panama'
      },
      {
        a: 'PG',
        d: 'Papua New Guinea'
      },
      {
        a: 'PY',
        d: 'Paraguay'
      },
      {
        a: 'PE',
        d: 'Peru'
      },
      {
        a: 'PH',
        d: 'Philippines'
      },
      {
        a: 'PN',
        d: 'Pitcairn'
      },
      {
        a: 'PL',
        d: 'Poland'
      },
      {
        a: 'PT',
        d: 'Portugal'
      },
      {
        a: 'PR',
        d: 'Puerto Rico'
      },
      {
        a: 'QA',
        d: 'Qatar'
      },
      {
        a: 'RO',
        d: 'Romania'
      },
      {
        a: 'RU',
        d: 'Russian Federation'
      },
      {
        a: 'RW',
        d: 'Rwanda'
      },
      {
        a: 'RE',
        d: 'Réunion'
      },
      {
        a: 'BL',
        d: 'Saint Barthélemy'
      },
      {
        a: 'SH',
        d: 'Saint Helena, Ascension and Tristan da Cunha'
      },
      {
        a: 'KN',
        d: 'Saint Kitts and Nevis'
      },
      {
        a: 'LC',
        d: 'Saint Lucia'
      },
      {
        a: 'MF',
        d: 'Saint Martin (French part)'
      },
      {
        a: 'PM',
        d: 'Saint Pierre and Miquelon'
      },
      {
        a: 'VC',
        d: 'Saint Vincent and the Grenadines'
      },
      {
        a: 'WS',
        d: 'Samoa'
      },
      {
        a: 'SM',
        d: 'San Marino'
      },
      {
        a: 'ST',
        d: 'Sao Tome and Principe'
      },
      {
        a: 'SA',
        d: 'Saudi Arabia'
      },
      {
        a: 'SN',
        d: 'Senegal'
      },
      {
        a: 'RS',
        d: 'Serbia'
      },
      {
        a: 'SC',
        d: 'Seychelles'
      },
      {
        a: 'SL',
        d: 'Sierra Leone'
      },
      {
        a: 'SG',
        d: 'Singapore'
      },
      {
        a: 'SX',
        d: 'Sint Maarten (Dutch part)'
      },
      {
        a: 'SK',
        d: 'Slovakia'
      },
      {
        a: 'SI',
        d: 'Slovenia'
      },
      {
        a: 'SB',
        d: 'Solomon Islands'
      },
      {
        a: 'SO',
        d: 'Somalia'
      },
      {
        a: 'ZA',
        d: 'South Africa'
      },
      {
        a: 'GS',
        d: 'South Georgia and the South Sandwich Islands'
      },
      {
        a: 'SS',
        d: 'South Sudan'
      },
      {
        a: 'ES',
        d: 'Spain'
      },
      {
        a: 'LK',
        d: 'Sri Lanka'
      },
      {
        a: 'SD',
        d: 'Sudan'
      },
      {
        a: 'SR',
        d: 'Suriname'
      },
      {
        a: 'SJ',
        d: 'Svalbard and Jan Mayen'
      },
      {
        a: 'SE',
        d: 'Sweden'
      },
      {
        a: 'CH',
        d: 'Switzerland'
      },
      {
        a: 'SY',
        d: 'Syrian Arab Republic'
      },
      {
        a: 'TW',
        d: 'Taiwan (Province of China)'
      },
      {
        a: 'TJ',
        d: 'Tajikistan'
      },
      {
        a: 'TZ',
        d: 'Tanzania, the United Republic of'
      },
      {
        a: 'TH',
        d: 'Thailand'
      },
      {
        a: 'TL',
        d: 'Timor-Leste'
      },
      {
        a: 'TG',
        d: 'Togo'
      },
      {
        a: 'TK',
        d: 'Tokelau'
      },
      {
        a: 'TO',
        d: 'Tonga'
      },
      {
        a: 'TT',
        d: 'Trinidad and Tobago'
      },
      {
        a: 'TN',
        d: 'Tunisia'
      },
      {
        a: 'TR',
        d: 'Turkey'
      },
      {
        a: 'TM',
        d: 'Turkmenistan'
      },
      {
        a: 'TC',
        d: 'Turks and Caicos Islands'
      },
      {
        a: 'TV',
        d: 'Tuvalu'
      },
      {
        a: 'UG',
        d: 'Uganda'
      },
      {
        a: 'UA',
        d: 'Ukraine'
      },
      {
        a: 'AE',
        d: 'United Arab Emirates'
      },
      {
        a: 'GB',
        d: 'United Kingdom'
      },
      {
        a: 'UM',
        d: 'United States Minor Outlying Islands'
      },
      {
        a: 'US',
        d: 'United States of America'
      },
      {
        a: 'UY',
        d: 'Uruguay'
      },
      {
        a: 'UZ',
        d: 'Uzbekistan'
      },
      {
        a: 'VU',
        d: 'Vanuatu'
      },
      {
        a: 'VE',
        d: 'Venezuela'
      },
      {
        a: 'VN',
        d: 'Viet Nam'
      },
      {
        a: 'VG',
        d: 'Virgin Islands (British)'
      },
      {
        a: 'VI',
        d: 'Virgin Islands (U.S.)'
      },
      {
        a: 'WF',
        d: 'Wallis and Futuna'
      },
      {
        a: 'EH',
        d: 'Western Sahara'
      },
      {
        a: 'YE',
        d: 'Yemen'
      },
      {
        a: 'ZM',
        d: 'Zambia'
      },
      {
        a: 'ZW',
        d: 'Zimbabwe'
      },
      {
        a: 'AX',
        d: 'Aland Islands'
      }
    ]
  }
})
