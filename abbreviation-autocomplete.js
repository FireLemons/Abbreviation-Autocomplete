// Inserts an element into a sorted array containing a limited range of integers
//  @param {array} arr The sorted array
//  @param {array} arrReduced The array represented in the form:
//    [e1: [a1, b1], e2: [a2, b2]]
//    where
//      eX is an element of the array
//      aX is the first index that contains eX in the array
//      bX is the last index that contains eX in the array
//  @param {integer} elem The integer to be inserted into "arrReduced"
//  @throws {TypeError} for incorrect parameter types
function countingSortInsert (arr, arrReduced, elem, elemGroup) {
  if (!(arr instanceof Array)) {
    throw new TypeError('1st param "arr" must be an array')
  }

  if (!(arrReduced instanceof Array)) {
    throw new TypeError('1st param "arrReduced" must be an array')
  }

  // Increase indicies for elements greater than elem
  for (let i = elemGroup + 1; i < arrReduced.length; i++) {
    const range = arrReduced[i]

    if (range) {
      range[0]++
      range[1]++
    }
  }

  const elemRange = arrReduced[elemGroup]

  if (elemRange) { // Increase elem's ending index
    elemRange[1]++
  } else { // Create elem's indicies because it's not in arrReduced yet
    for (var i = elemGroup - 1; i >= 0; i--) {
      const range = arrReduced[i]

      if (range) {
        const afterLastPosition = range[1] + 1
        arrReduced[elemGroup] = [afterLastPosition, afterLastPosition]
        break
      }
    }

    if (i < 0) {
      arrReduced[elemGroup] = [0, 0]
    }
  }

  arr.splice(arrReduced[elemGroup][1], 0, elem)
}

Vue.component('abbreviation-autocomplete', {
  data: function () {
    return {
      mutableSearchText: this.searchText,
      searchItemsVisible: false,
      recentlySelected: false,
      selected: -1
    }
  },
  props: {
    data: {
      required: true,
      type: Array
    },
    limit: {
      default: Infinity,
      type: Number
    },
    minSearchTextLength: {
      default: 1,
      type: Number
    },
    placeholder: String,
    searchText: {
      default: '',
      type: String
    }
  },
  computed: {
    searchList: function () {
      if (this.mutableSearchText.length >= this.minSearchTextLength) {
        const countingSortData = []
        const relatedResults = []

        this.data.forEach((elem) => {
          const index = elem.d.toLowerCase().indexOf(this.mutableSearchText.toLowerCase())

          // if search text is a substring of this definition
          if (index >= 0) {
            countingSortInsert(relatedResults, countingSortData, elem, index)
            elem.substrIndex = index
          }
        })

        return relatedResults.length <= this.limit ? relatedResults : relatedResults.slice(0, this.limit)
      } else {
        return []
      }
    }
  },
  watch: {
    mutableSearchText: function () {
      this.onSearchTextChange()
    }
  },
  methods: {
    onSearchTextChange: function () {
      if (this.recentlySelected) {
        this.recentlySelected = false
      } else {
        this.searchItemsVisible = true
        this.selected = -1
      }
    },

    select: function () {
      let selected

      if (this.selected !== -1) {
        this.searchItemsVisible = false
        delete this.searchList[this.selected]['substrIndex']
        selected = JSON.parse(JSON.stringify(this.searchList[this.selected]))
        this.mutableSearchText = this.searchList[this.selected].a
        this.recentlySelected = true
      }

      return selected
    },

    selectDown: function () {
      this.selected = (this.selected + 1) % this.searchList.length
    },

    selectUp: function () {
      if (this.selected === -1) {
        this.selected = 0
      }

      const searchLength = this.searchList.length
      this.selected = (this.selected + searchLength - 1) % searchLength
    }
  },
  template: `
<div class="abbreviation-autocomplete">
  <input type="text" :placeholder="placeholder" v-model="mutableSearchText" @focus="searchItemsVisible = true" @blur="searchItemsVisible = false" @keyup.enter="select" @keydown.down="selectDown" @keydown.up="selectUp">
  <ul v-show="searchItemsVisible" @mousedown="select">
    <li v-for="(element, index) in searchList" :class="{ selected: index === selected }" @mouseover="selected = index">
      <span>{{ element.a }}</span>
      <span> ({{ element.d.substr(0, element.substrIndex) }}</span><span class="highlight">{{ element.d.substr( element.substrIndex , mutableSearchText.length) }}</span><span>{{ element.d.substr(element.substrIndex + mutableSearchText.length) }})</span>
    </li>
  </ul>
</div>
`,
  created: function () {
    this.data.sort((a, b) => a.d.localeCompare(b.d))

    let listeners = this.$listeners

    // Only emit for listeners attached on creation
    if(listeners){
      if(listeners['update:search-text']) {
        let defaultOnSearchTextChange = this.onSearchTextChange

        this.onSearchTextChange = () => {
          defaultOnSearchTextChange()
          this.$emit('update:search-text', this.mutableSearchText)
        }
      }

      if(listeners.select) {
        defaultSelect = this.select
        this.select = () => {
          this.$emit('select', defaultSelect())
        }
      }
    }
  }
})
