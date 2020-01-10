// Inserts an element into a sorted array containing a limited range of integers
//  @param {array} arrReduced The array represented in the form:
//    [e1: [a1, b1], e2: [a2, b2]]
//    where
//      eX is an element of the array
//      aX is the first index that contains eX in the array
//      bX is the last index that contains eX in the array
//  @param {integer} elem The integer to be inserted into "arrReduced"
//  @throws {TypeError} for incorrect parameter types
function countingSort (arrReduced, elem) {
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

  if (elemRange) { // Increase elem's ending index
    elemRange[1]++
  } else { // Create elem's indicies because it's not in arrReduced yet
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

// Inserts an element into an array sorted into categories that are also sorted
//  @param {array} arr The sorted array
//  @param {array} range The range of indicies of the category elem is first sorted into
//    range is in the form [a, b]
//    where
//      a is the first index of an element of the category elem belongs to
//      b is the last index of an element of the category elem belongs to including elem
//  @param {function} compare(a, b) The comparison to determine the sorted order within each category
//    @param  {object} a The first element to be compared
//    @param  {object} b The second element to be compared
//    @return {number} A negative number if "b" comes before "a", 0 if "a" is equal to "b", a positive number if "a" comes before "b"
//  @param {object} elem The element to be inserted into "arr"
//  @throws {TypeError} for incorrect parameter types
//  @throws {ReferenceError} for incorrect parameter formats
function insert (arr, range, compare, elem) {
  if (!(arr instanceof Array)) {
    throw new TypeError('1st param "arr" must be an array')
  }

  if (!(range instanceof Array)) {
    throw new TypeError('2nd param "range" must be an array')
  } else if (range.length < 2) {
    throw new ReferenceError('2nd param "range" must have at least 2 elements')
  } else if (range[0] !== Math.floor(range[0]) || range[1] !== Math.floor(range[1])) {
    throw new ReferenceError('2nd param "range" must have starting and ending indicies of a category "elem" belongs to')
  }

  if (!(compare instanceof Function)) {
    throw new TypeError('3rd param "compare" must be a function')
  }

  if (range[0] === range[1]) {
    arr.splice(range[0], 0, elem)
  } else {
    let lowerIndex = range[0]
    let upperIndex = range[1] - 1
    let middleIndex = Math.floor((upperIndex + lowerIndex) / 2)

    while (lowerIndex < upperIndex) {
      switch (compare(arr[middleIndex], elem)) {
        case 1: // elem comes before middle
          upperIndex = middleIndex - 1
          break
        case 0: // obvious
          arr.splice(middleIndex, 0, elem)

          return
        case -1: // elem comes after middle
          lowerIndex = middleIndex + 1
          break
      }

      middleIndex = Math.floor((upperIndex + lowerIndex) / 2)
    }

    // guarantee middleIndex is within the bounds of arr
    middleIndex = Math.min(arr.length - 1, Math.max(0, middleIndex))

    if (compare(arr[middleIndex], elem) > 0) {
      arr.splice(middleIndex, 0, elem)
    } else {
      arr.splice(middleIndex + 1, 0, elem)
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
        const countingSortData = []
        const relatedResults = []

        this.data.forEach((elem) => {
          const index = elem.def.toLowerCase().indexOf(this.input.toLowerCase())

          // if user input is a substring of this definition
          if (index >= 0) {
            countingSort(countingSortData, index)
            insert(relatedResults, countingSortData[index], (a, b) => a.def.localeCompare(b.def), elem)
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
    <li v-for="(element, index) in searchList" :class="{ selected: index === selected }" @mouseover="setSelected(index)">
      <span>{{ element.a }}</span>
      <span> ({{ element.def.substr(0, element.substrIndex) }}</span><span class="highlight">{{ input }}</span><span>{{ element.def.substr(element.substrIndex + input.length) }})</span>
    </li>
  </ul>
</div>
`
})
