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
  data () {
    return {
      focused: false,
      listener: {
        searchTextEnabled: false,
        selectEnabled: false
      },
      recentlySelected: false,
      selected: -1,
      unprintableKeys: [
        'Alt',
        'ArrowDown',
        'ArrowLeft',
        'ArrorRight',
        'ArrowUp',
        'CapsLock',
        'ContextMenu',
        'Control',
        'Delete',
        'End',
        'Escape',
        'F1',
        'F2',
        'F3',
        'F4',
        'F5',
        'F6',
        'F7',
        'F8',
        'F9',
        'F10',
        'F11',
        'F12',
        'Home',
        'Insert',
        'NumLock',
        'PageUp',
        'PageDown',
        'Shift',
        'Tab'
      ]
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
    dataSorted () {
      let dataCopy = this.data.slice()

      dataCopy.forEach((str, index) => {
        dataCopy[index] = {option: str}
      })
      this.sortData(dataCopy)

      return dataCopy
    },

    searchList () {
      if (this.searchText.length >= this.minSearchTextLength) {
        const countingSortData = []
        const relatedResults = []

        this.dataSorted.forEach((elem) => {
          const index = elem.option.toLowerCase().indexOf(this.searchText.toLowerCase())
          
          // if search text is a substring of this definition
          if (index >= 0) {
            let optionText = elem.option
            let searchTextLength = this.searchText.length
            let substrIndex = index

            let dropDownOption = {
              leftText: optionText.substr(0, substrIndex),
              highlight: optionText.substr(substrIndex, searchTextLength),
              rightText: optionText.substr(substrIndex + searchTextLength),

              option: optionText,
              substrIndex: substrIndex
            }

            countingSortInsert(relatedResults, countingSortData, dropDownOption, index)
          }
        })

        return relatedResults.length <= this.limit ? relatedResults : relatedResults.slice(0, this.limit)
      } else {
        return []
      }
    }
  },
  methods: {
    onSearchTextType (keyPress) {
      if (!this.unprintableKeys.includes(keyPress.key)) {
        if (this.recentlySelected) {
          this.recentlySelected = false
        } else {
          this.focused = true
          this.selected = -1
        }

        if (this.listener.searchTextEnabled) {
          this.$emit('update:searchText', this.searchText)
        }
      }
    },

    onUnfocus () {
      this.focused = false
    },

    select () {
      if (this.selected !== -1) {
        this.focused = false

        if (this.listener.selectEnabled) {
          // Delete the key used for sorting autocomplete results before emitting
          delete this.searchList[this.selected].substrIndex
          this.$emit('select', this.searchList[this.selected])
        }

        this.searchText = this.searchList[this.selected].option
        this.recentlySelected = true
      }
    },

    selectDown () {
      this.selected = (this.selected + 1) % this.searchList.length
    },

    selectUp () {
      if (this.selected === -1) {
        this.selected = 0
      }

      const searchLength = this.searchList.length
      this.selected = (this.selected + searchLength - 1) % searchLength
    },

    setSelected (index) {
      this.selected = index
    },

    sortData (arr) {
      arr.sort((a, b) => a.option.localeCompare(b.option))
    }
  },
  template: `
<div class="abbreviation-autocomplete">
  <input type="text" :placeholder="placeholder" v-model="searchText" @focus="focused = true" @blur="onUnfocus" @keyup.enter="select" @keyup="onSearchTextType" @keydown.down="selectDown" @keydown.up="selectUp">
  <ul v-show="focused" @mousedown="select">
    <li v-for="(element, index) in searchList" :class="{ selected: index === selected }" @mouseover="setSelected(index)">
      <span> {{ element.leftText }}</span><span class="highlight">{{ element.highlight }}</span><span>{{ element.rightText }}</span>
    </li>
  </ul>
</div>
`,
  created () {
    if(!(this.data instanceof Array)){
      throw new TypeError('ERROR: The autocomplete data must be an array')
    } else {
      this.data.forEach((elem) => {
        if (typeof elem !== 'string') {
          throw new TypeError('ERROR: The autocomplete data array can only contain strings')
        }
      })
    }

    let listeners = this.$listeners

    // Only emit for listeners attached on creation
    if(listeners){
      if(listeners['update:searchText']) {
        this.listener.searchTextEnabled = true
      }

      if(listeners && listeners.select) {
        this.listener.selectEnabled = true
      }
    }
  }
})
