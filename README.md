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

## [Example](https://firelemons.github.io/AutocompleteExample/)

## Debounce

If the autocomplete data is large enough to cause noticably poor performance, lodash's `debounce` can delay fetching of autocomplete results until the user stops typing. 

For the debounced version, checkout the `lodash` branch, load lodash.js and set the `debounce-wait` prop

##### debounce-wait(Optional)
The time in milliseconds since the last character typed until the user is considered to have finished typing

##### [Example with debounce](https://firelemons.github.io/AutocompleteDebounceExample/)
