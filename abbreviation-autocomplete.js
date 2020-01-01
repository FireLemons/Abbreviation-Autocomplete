Vue.component('abbreviation-autocomplete', {
  data: function() {
    return {
      focused: false,
      input: '',
      selected: -1
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
  watch: {
    input: function() {
      this.selected = -1
    }
  },
  methods: {
    onUnfocus: function(){
      this.focused = false
    },

    select: function() {
      console.log(this.selected)
      if(this.selected !== -1) {
        this.input = this.searchList[this.selected].a
        this.focused = false
      }
    },

    selectDown: function() {
      this.selected = (this.selected + 1) % this.searchList.length
    },

    selectUp: function() {
      if(this.selected === -1){
        this.selected = 0
      }

      let searchLength = this.searchList.length
      this.selected = (this.selected + searchLength - 1) % searchLength
    },

    setSelected(index){
      this.selected = index
    }
  },
  template: `
<div class="abbreviation-autocomplete">
  <input type="text" v-model="input" @focus="focused = true" @blur="onUnfocus" @keyup.enter="select" @keydown.down="selectDown" @keydown.up="selectUp">
  <ul v-show="focused" @mousedown="select">
    <li v-for="(element, index) in searchList" :class="{ selected: index === selected }" @mouseover="setSelected(index)"><span>{{ element.a }}</span><span> ({{ element.def }})</span></li>
  </ul>
</div>
`
})
