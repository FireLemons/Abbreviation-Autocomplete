Vue.component('abbreviation-autocomplete', {
  data: function () {
    return {
    }
  },
  template: `
<div class="abbreviation-autocomplete">
  <input type="text">
  <ul>
    <li></li>
  </ul>
</div>
`
})

const autocomplete = new Vue({
  el: '#app',
  data: {}
})
