// Inserts an element into a sorted array containing a limited range of integers
//  @param {array} arrReduced The array represented in the form:
//    [e1: [a1, b1], e2: [a2, b2]]
//    where
//      eX is an element of the array
//      aX is the first index that contains eX in the array
//      bX is the last index that contains eX in the array
//  @param {integer} elem The integer to be inserted into "arrReduced"
//  @throws {TypeError} for incorrect parameter types
function countingSortArray (arrReduced, elem) {
  if (!(arrReduced instanceof Array)) {
    throw new TypeError('1st param "arrReduced" must be an array')
  }

  // Increase indicies for elements greater than elem
  for (let i = elem + 1; i < arrReduced.length; i++) {
    const range = arrReduced[i]

    if (range) {
      range[0]++
      range[1]++
    }
  }

  const elemRange = arrReduced[elem]

  if (elemRange) {// Increase elem's ending index
    elemRange[1]++
  } else {// Create elem's indicies because it's not in arrReduced yet
    for (let i = elem - 1; i >= 0; i--) {
      const range = arrReduced[i]

      if (range) {
        const afterLastPosition = range[1] + 1
        arrReduced[elem] = [afterLastPosition, afterLastPosition]
        return
      }
    }

    arrReduced[elem] = [0, 0]
  }
}

// Inserts an element into a sorted array
//  @param {array} arr The sorted array
//  @param {function} compare(a, b)
//    @param  {object} a The first element to be compared
//    @param  {object} b The second element to be compared
//    @return {number} A negative number if "b" comes before "a", 0 if "a" is equal to "b", a positive number if "a" comes before "b"
//  @param {object} elem The element to be inserted into "arr"
//  @throws {TypeError} for incorrect parameter types
function insert (arr, compare, elem) {
  if (!(arr instanceof Array)) {
    throw new TypeError('1st param "arr" must be an array')
  }

  if (!(compare instanceof Function)) {
    throw new TypeError('2nd param "compare" must be a function')
  }

  if (!arr.length) {
    arr.push(elem)
  } else {
    let lowerIndex = 0
    let middleIndex = Math.floor(arr.length / 2)
    let upperIndex = arr.length

    while (lowerIndex < upperIndex) {
      
    }
  }
}

Vue.component('abbreviation-autocomplete', {
  data: function () {
    return {
      focused: false,
      input: '',
      recentlySelected: false,
      selected: -1
    }
  },
  props: {
    data: Array,
    limit: {
      default: Infinity,
      type: Number
    },
    'min-input-length': {
      default: 1,
      type: Number
    }
  },
  computed: {
    searchList: function () {
      if (this.input.length >= this.minInputLength) {
        const relatedResults = []

        this.data.forEach((elem) => {
          const index = elem.def.indexOf(this.input)

          if (index >= 0) {

          }
        })

        return relatedResults
      } else {
        return []
      }
    }
  },
  watch: {
    input: function () {
      if (this.recentlySelected) {
        this.recentlySelected = false
      } else {
        this.focused = true
        this.selected = -1
      }
    }
  },
  methods: {
    onUnfocus: function () {
      this.focused = false
    },

    select: function () {
      if (this.selected !== -1) {
        this.focused = false
        this.input = this.searchList[this.selected].a
        this.recentlySelected = true
      }
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
    },

    setSelected (index) {
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
`,
  created: function () {
    this.data.sort((e1, e2) => e1.def.toLowerCase().localeCompare(e2.def.toLowerCase()))
  }
})
