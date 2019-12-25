Vue.component('abbreviation-autocomplete', {
  data: function() {
    return {
      input: ''
    }
  },
  props: {
    data: Array
  },
  computed: {
    searchList: function() {
      return this.input.length ? this.data.filter((elem) => {
        return elem.meaning.toLowerCase().indexOf(this.input.toLowerCase()) !== -1
      }) : []
    }
  },
  template: `
<div class="abbreviation-autocomplete">
  <input type="text" v-model="input">
  <ul>
    <li v-for="element in searchList"><span>{{ element.abbreviation }}</span><span> ({{ element.meaning }})</span></li>
  </ul>
</div>
`,
  mounted: function() {
  }
})
