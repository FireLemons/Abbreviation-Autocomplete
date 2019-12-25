Vue.component('abbreviation-autocomplete', {
  props: {
    data: Array
  },
  template: `
<div class="abbreviation-autocomplete">
  <input type="text">
  <ul>
    <li v-for="element in data">{{ element.abbreviation }}</li>
  </ul>
</div>
`
})
