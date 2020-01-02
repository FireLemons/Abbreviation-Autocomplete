const autocomplete = new Vue({
  el: '#app',
  data: {
    abbreviations: [
      {
        def: 'Afghanistan',
        a: 'AF'
      },
      {
        def: 'Albania',
        a: 'AL'
      },
      {
        def: 'Algeria',
        a: 'DZ'
      },
      {
        def: 'American Samoa',
        a: 'AS'
      },
      {
        def: 'Andorra',
        a: 'AD'
      },
      {
        def: 'Angola',
        a: 'AO'
      },
      {
        def: 'Anguilla',
        a: 'AI'
      },
      {
        def: 'Antarctica',
        a: 'AQ'
      },
      {
        def: 'Antigua and Barbuda',
        a: 'AG'
      },
      {
        def: 'Argentina',
        a: 'AR'
      },
      {
        def: 'Armenia',
        a: 'AM'
      },
      {
        def: 'Aruba',
        a: 'AW'
      },
      {
        def: 'Australia',
        a: 'AU'
      },
      {
        def: 'Austria',
        a: 'AT'
      },
      {
        def: 'Azerbaijan',
        a: 'AZ'
      },
      {
        def: 'Bahamas',
        a: 'BS'
      },
      {
        def: 'Bahrain',
        a: 'BH'
      },
      {
        def: 'Bangladesh',
        a: 'BD'
      },
      {
        def: 'Barbados',
        a: 'BB'
      },
      {
        def: 'Belarus',
        a: 'BY'
      },
      {
        def: 'Belgium',
        a: 'BE'
      },
      {
        def: 'Belize',
        a: 'BZ'
      },
      {
        def: 'Benin',
        a: 'BJ'
      },
      {
        def: 'Bermuda',
        a: 'BM'
      },
      {
        def: 'Bhutan',
        a: 'BT'
      },
      {
        def: 'Bolivia',
        a: 'BO'
      },
      {
        def: 'Bonaire, Sint Eustatius and Saba',
        a: 'BQ'
      },
      {
        def: 'Bosnia and Herzegovina',
        a: 'BA'
      },
      {
        def: 'Botswana',
        a: 'BW'
      },
      {
        def: 'Bouvet Island',
        a: 'BV'
      },
      {
        def: 'Brazil',
        a: 'BR'
      },
      {
        def: 'British Indian Ocean Territory',
        a: 'IO'
      },
      {
        def: 'Brunei Darussalam',
        a: 'BN'
      },
      {
        def: 'Bulgaria',
        a: 'BG'
      },
      {
        def: 'Burkina Faso',
        a: 'BF'
      },
      {
        def: 'Burundi',
        a: 'BI'
      },
      {
        def: 'Cabo Verde',
        a: 'CV'
      },
      {
        def: 'Cambodia',
        a: 'KH'
      },
      {
        def: 'Cameroon',
        a: 'CM'
      },
      {
        def: 'Canada',
        a: 'CA'
      },
      {
        def: 'Cayman Islands',
        a: 'KY'
      },
      {
        def: 'Central African Republic',
        a: 'CF'
      },
      {
        def: 'Chad',
        a: 'TD'
      },
      {
        def: 'Chile',
        a: 'CL'
      },
      {
        def: 'China',
        a: 'CN'
      },
      {
        def: 'Christmas Island',
        a: 'CX'
      },
      {
        def: 'Cocos (Keeling) Islands',
        a: 'CC'
      },
      {
        def: 'Colombia',
        a: 'CO'
      },
      {
        def: 'Comoros',
        a: 'KM'
      },
      {
        def: 'Congo (Democratic Republic of the)',
        a: 'CD'
      },
      {
        def: 'Congo',
        a: 'CG'
      },
      {
        def: 'Cook Islands',
        a: 'CK'
      },
      {
        def: 'Costa Rica',
        a: 'CR'
      },
      {
        def: 'Croatia',
        a: 'HR'
      },
      {
        def: 'Cuba',
        a: 'CU'
      },
      {
        def: 'Curacao',
        a: 'CW'
      },
      {
        def: 'Cyprus',
        a: 'CY'
      },
      {
        def: 'Czechia',
        a: 'CZ'
      },
      {
        def: "Cote d'Ivoire",
        a: 'CI'
      },
      {
        def: 'Denmark',
        a: 'DK'
      },
      {
        def: 'Djibouti',
        a: 'DJ'
      },
      {
        def: 'Dominica',
        a: 'DM'
      },
      {
        def: 'Dominican Republic',
        a: 'DO'
      },
      {
        def: 'Ecuador',
        a: 'EC'
      },
      {
        def: 'Egypt',
        a: 'EG'
      },
      {
        def: 'El Salvador',
        a: 'SV'
      },
      {
        def: 'Equatorial Guinea',
        a: 'GQ'
      },
      {
        def: 'Eritrea',
        a: 'ER'
      },
      {
        def: 'Estonia',
        a: 'EE'
      },
      {
        def: 'Eswatini',
        a: 'SZ'
      },
      {
        def: 'Ethiopia',
        a: 'ET'
      },
      {
        def: 'Falkland Islands [Malvinas]',
        a: 'FK'
      },
      {
        def: 'Faroe Islands',
        a: 'FO'
      },
      {
        def: 'Fiji',
        a: 'FJ'
      },
      {
        def: 'Finland',
        a: 'FI'
      },
      {
        def: 'France',
        a: 'FR'
      },
      {
        def: 'French Guiana',
        a: 'GF'
      },
      {
        def: 'French Polynesia',
        a: 'PF'
      },
      {
        def: 'French Southern Territories',
        a: 'TF'
      },
      {
        def: 'Gabon',
        a: 'GA'
      },
      {
        def: 'Gambia',
        a: 'GM'
      },
      {
        def: 'Georgia',
        a: 'GE'
      },
      {
        def: 'Germany',
        a: 'DE'
      },
      {
        def: 'Ghana',
        a: 'GH'
      },
      {
        def: 'Gibraltar',
        a: 'GI'
      },
      {
        def: 'Greece',
        a: 'GR'
      },
      {
        def: 'Greenland',
        a: 'GL'
      },
      {
        def: 'Grenada',
        a: 'GD'
      },
      {
        def: 'Guadeloupe',
        a: 'GP'
      },
      {
        def: 'Guam',
        a: 'GU'
      },
      {
        def: 'Guatemala',
        a: 'GT'
      },
      {
        def: 'Guernsey',
        a: 'GG'
      },
      {
        def: 'Guinea',
        a: 'GN'
      },
      {
        def: 'Guinea-Bissau',
        a: 'GW'
      },
      {
        def: 'Guyana',
        a: 'GY'
      },
      {
        def: 'Haiti',
        a: 'HT'
      },
      {
        def: 'Heard Island and McDonald Islands',
        a: 'HM'
      },
      {
        def: 'Holy See',
        a: 'VA'
      },
      {
        def: 'Honduras',
        a: 'HN'
      },
      {
        def: 'Hong Kong',
        a: 'HK'
      },
      {
        def: 'Hungary',
        a: 'HU'
      },
      {
        def: 'Iceland',
        a: 'IS'
      },
      {
        def: 'India',
        a: 'IN'
      },
      {
        def: 'Indonesia',
        a: 'ID'
      },
      {
        def: 'Iran',
        a: 'IR'
      },
      {
        def: 'Iraq',
        a: 'IQ'
      },
      {
        def: 'Ireland',
        a: 'IE'
      },
      {
        def: 'Isle of Man',
        a: 'IM'
      },
      {
        def: 'Israel',
        a: 'IL'
      },
      {
        def: 'Italy',
        a: 'IT'
      },
      {
        def: 'Jamaica',
        a: 'JM'
      },
      {
        def: 'Japan',
        a: 'JP'
      },
      {
        def: 'Jersey',
        a: 'JE'
      },
      {
        def: 'Jordan',
        a: 'JO'
      },
      {
        def: 'Kazakhstan',
        a: 'KZ'
      },
      {
        def: 'Kenya',
        a: 'KE'
      },
      {
        def: 'Kiribati',
        a: 'KI'
      },
      {
        def: 'North Korea',
        a: 'KP'
      },
      {
        def: 'South Korea',
        a: 'KR'
      },
      {
        def: 'Kuwait',
        a: 'KW'
      },
      {
        def: 'Kyrgyzstan',
        a: 'KG'
      },
      {
        def: 'Laos',
        a: 'LA'
      },
      {
        def: 'Latvia',
        a: 'LV'
      },
      {
        def: 'Lebanon',
        a: 'LB'
      },
      {
        def: 'Lesotho',
        a: 'LS'
      },
      {
        def: 'Liberia',
        a: 'LR'
      },
      {
        def: 'Libya',
        a: 'LY'
      },
      {
        def: 'Liechtenstein',
        a: 'LI'
      },
      {
        def: 'Lithuania',
        a: 'LT'
      },
      {
        def: 'Luxembourg',
        a: 'LU'
      },
      {
        def: 'Macao',
        a: 'MO'
      },
      {
        def: 'Madagascar',
        a: 'MG'
      },
      {
        def: 'Malawi',
        a: 'MW'
      },
      {
        def: 'Malaysia',
        a: 'MY'
      },
      {
        def: 'Maldives',
        a: 'MV'
      },
      {
        def: 'Mali',
        a: 'ML'
      },
      {
        def: 'Malta',
        a: 'MT'
      },
      {
        def: 'Marshall Islands',
        a: 'MH'
      },
      {
        def: 'Martinique',
        a: 'MQ'
      },
      {
        def: 'Mauritania',
        a: 'MR'
      },
      {
        def: 'Mauritius',
        a: 'MU'
      },
      {
        def: 'Mayotte',
        a: 'YT'
      },
      {
        def: 'Mexico',
        a: 'MX'
      },
      {
        def: 'Micronesia (Federated States of)',
        a: 'FM'
      },
      {
        def: 'Moldova',
        a: 'MD'
      },
      {
        def: 'Monaco',
        a: 'MC'
      },
      {
        def: 'Mongolia',
        a: 'MN'
      },
      {
        def: 'Montenegro',
        a: 'ME'
      },
      {
        def: 'Montserrat',
        a: 'MS'
      },
      {
        def: 'Morocco',
        a: 'MA'
      },
      {
        def: 'Mozambique',
        a: 'MZ'
      },
      {
        def: 'Myanmar',
        a: 'MM'
      },
      {
        def: 'Namibia',
        a: 'NA'
      },
      {
        def: 'Nauru',
        a: 'NR'
      },
      {
        def: 'Nepal',
        a: 'NP'
      },
      {
        def: 'Netherlands',
        a: 'NL'
      },
      {
        def: 'New Caledonia',
        a: 'NC'
      },
      {
        def: 'New Zealand',
        a: 'NZ'
      },
      {
        def: 'Nicaragua',
        a: 'NI'
      },
      {
        def: 'Niger',
        a: 'NE'
      },
      {
        def: 'Nigeria',
        a: 'NG'
      },
      {
        def: 'Niue',
        a: 'NU'
      },
      {
        def: 'Norfolk Island',
        a: 'NF'
      },
      {
        def: 'North Macedonia',
        a: 'MK'
      },
      {
        def: 'Northern Mariana Islands',
        a: 'MP'
      },
      {
        def: 'Norway',
        a: 'NO'
      },
      {
        def: 'Oman',
        a: 'OM'
      },
      {
        def: 'Pakistan',
        a: 'PK'
      },
      {
        def: 'Palau',
        a: 'PW'
      },
      {
        def: 'Palestine, State of',
        a: 'PS'
      },
      {
        def: 'Panama',
        a: 'PA'
      },
      {
        def: 'Papua New Guinea',
        a: 'PG'
      },
      {
        def: 'Paraguay',
        a: 'PY'
      },
      {
        def: 'Peru',
        a: 'PE'
      },
      {
        def: 'Philippines',
        a: 'PH'
      },
      {
        def: 'Pitcairn',
        a: 'PN'
      },
      {
        def: 'Poland',
        a: 'PL'
      },
      {
        def: 'Portugal',
        a: 'PT'
      },
      {
        def: 'Puerto Rico',
        a: 'PR'
      },
      {
        def: 'Qatar',
        a: 'QA'
      },
      {
        def: 'Romania',
        a: 'RO'
      },
      {
        def: 'Russian Federation',
        a: 'RU'
      },
      {
        def: 'Rwanda',
        a: 'RW'
      },
      {
        def: 'Réunion',
        a: 'RE'
      },
      {
        def: 'Saint Barthélemy',
        a: 'BL'
      },
      {
        def: 'Saint Helena, Ascension and Tristan da Cunha',
        a: 'SH'
      },
      {
        def: 'Saint Kitts and Nevis',
        a: 'KN'
      },
      {
        def: 'Saint Lucia',
        a: 'LC'
      },
      {
        def: 'Saint Martin (French part)',
        a: 'MF'
      },
      {
        def: 'Saint Pierre and Miquelon',
        a: 'PM'
      },
      {
        def: 'Saint Vincent and the Grenadines',
        a: 'VC'
      },
      {
        def: 'Samoa',
        a: 'WS'
      },
      {
        def: 'San Marino',
        a: 'SM'
      },
      {
        def: 'Sao Tome and Principe',
        a: 'ST'
      },
      {
        def: 'Saudi Arabia',
        a: 'SA'
      },
      {
        def: 'Senegal',
        a: 'SN'
      },
      {
        def: 'Serbia',
        a: 'RS'
      },
      {
        def: 'Seychelles',
        a: 'SC'
      },
      {
        def: 'Sierra Leone',
        a: 'SL'
      },
      {
        def: 'Singapore',
        a: 'SG'
      },
      {
        def: 'Sint Maarten (Dutch part)',
        a: 'SX'
      },
      {
        def: 'Slovakia',
        a: 'SK'
      },
      {
        def: 'Slovenia',
        a: 'SI'
      },
      {
        def: 'Solomon Islands',
        a: 'SB'
      },
      {
        def: 'Somalia',
        a: 'SO'
      },
      {
        def: 'South Africa',
        a: 'ZA'
      },
      {
        def: 'South Georgia and the South Sandwich Islands',
        a: 'GS'
      },
      {
        def: 'South Sudan',
        a: 'SS'
      },
      {
        def: 'Spain',
        a: 'ES'
      },
      {
        def: 'Sri Lanka',
        a: 'LK'
      },
      {
        def: 'Sudan',
        a: 'SD'
      },
      {
        def: 'Suriname',
        a: 'SR'
      },
      {
        def: 'Svalbard and Jan Mayen',
        a: 'SJ'
      },
      {
        def: 'Sweden',
        a: 'SE'
      },
      {
        def: 'Switzerland',
        a: 'CH'
      },
      {
        def: 'Syrian Arab Republic',
        a: 'SY'
      },
      {
        def: 'Taiwan (Province of China)',
        a: 'TW'
      },
      {
        def: 'Tajikistan',
        a: 'TJ'
      },
      {
        def: 'Tanzania, the United Republic of',
        a: 'TZ'
      },
      {
        def: 'Thailand',
        a: 'TH'
      },
      {
        def: 'Timor-Leste',
        a: 'TL'
      },
      {
        def: 'Togo',
        a: 'TG'
      },
      {
        def: 'Tokelau',
        a: 'TK'
      },
      {
        def: 'Tonga',
        a: 'TO'
      },
      {
        def: 'Trinidad and Tobago',
        a: 'TT'
      },
      {
        def: 'Tunisia',
        a: 'TN'
      },
      {
        def: 'Turkey',
        a: 'TR'
      },
      {
        def: 'Turkmenistan',
        a: 'TM'
      },
      {
        def: 'Turks and Caicos Islands',
        a: 'TC'
      },
      {
        def: 'Tuvalu',
        a: 'TV'
      },
      {
        def: 'Uganda',
        a: 'UG'
      },
      {
        def: 'Ukraine',
        a: 'UA'
      },
      {
        def: 'United Arab Emirates',
        a: 'AE'
      },
      {
        def: 'United Kingdom',
        a: 'GB'
      },
      {
        def: 'United States Minor Outlying Islands',
        a: 'UM'
      },
      {
        def: 'United States of America',
        a: 'US'
      },
      {
        def: 'Uruguay',
        a: 'UY'
      },
      {
        def: 'Uzbekistan',
        a: 'UZ'
      },
      {
        def: 'Vanuatu',
        a: 'VU'
      },
      {
        def: 'Venezuela',
        a: 'VE'
      },
      {
        def: 'Viet Nam',
        a: 'VN'
      },
      {
        def: 'Virgin Islands (British)',
        a: 'VG'
      },
      {
        def: 'Virgin Islands (U.S.)',
        a: 'VI'
      },
      {
        def: 'Wallis and Futuna',
        a: 'WF'
      },
      {
        def: 'Western Sahara',
        a: 'EH'
      },
      {
        def: 'Yemen',
        a: 'YE'
      },
      {
        def: 'Zambia',
        a: 'ZM'
      },
      {
        def: 'Zimbabwe',
        a: 'ZW'
      },
      {
        def: 'Aland Islands',
        a: 'AX'
      }
    ]
  }
})
