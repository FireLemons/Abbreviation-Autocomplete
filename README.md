# Abbreviation-Autocomplete
A vue.js component that autocompletes abbreviations/acronyms by description rather than the abbreviation text.

![autocomplete_screenshot](https://user-images.githubusercontent.com/8918762/72185093-e6280380-33e9-11ea-92ca-d0651b09771f.png)

## Props
##### data
The autocomplete options

The options are an array of objects in the form

    {
      a: "Abbreviation or Acronym",
      d: "Definition or Description"
    }

e.g.

    [
      {
        a: "ATL",
        d: "Hartsfield–Jackson Atlanta International Airport"
      },
      {
        a: "LAX",
        d: "Los Angeles International Airport"
      }
    ]

##### limit(Optional)
The autocomplete results limit  
`Infinity` by default
##### min-input-length(Optional)
The minimum number of characters typed before autocomplete results are displayed  
1 by default

## Example
##### JS
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
          }
        ]
      }
    })
##### Template
    <abbreviation-autocomplete :data="abbreviations" :limit="10" :min-input-length="2"></abbreviation-autocomplete>
