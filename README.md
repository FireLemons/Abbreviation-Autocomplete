# Abbreviation-Autocomplete
An autocomplete for abbreviations/acronyms searching by description rather than the abbreviation text.

![autocomplete_screenshot](https://raw.githubusercontent.com/FireLemons/DocumentationMaterials/3adbd2389ba4b9750b4c2cf03a855c3ed31f3b80/img/screenshot.png)

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
##### min-search-text-length(Optional)
The minimum number of characters typed before autocomplete results are displayed  
1 by default
##### placeholder
Placeholder text for the search text input

## Events  
##### @update:search-text
Triggered whenever the search text changes
Emits the text of the autocomplete search

##### @select
Triggered after selecting an option in the dropdown  
Emits the object representing the option selected

### [Example](https://firelemons.github.io/AutocompleteExample/)
