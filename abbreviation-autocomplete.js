Vue.component('abbreviation-autocomplete', {
  data: function() {
    return {
      focused: false,
      input: ''
    }
  },
  props: {
    data: Array,
    'min-input-length': Number
  },
  computed: {
    searchList: function() {
      return this.input.length >= this.minInputLength ? this.data.filter((elem) => {
        return elem.def.toLowerCase().indexOf(this.input.toLowerCase()) !== -1
      }) : []
    }
  },
  template: `
<div class="abbreviation-autocomplete">
  <input type="text" v-model="input" @focus="focused = true" @blur="focused = false">
  <ul v-show="focused">
    <li v-for="element in searchList"><span>{{ element.a }}</span><span> ({{ element.def }})</span></li>
  </ul>
</div>
`,
  mounted: function() {
  }
})
