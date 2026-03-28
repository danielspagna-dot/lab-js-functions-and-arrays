function maxOfTwoNumbers(a, b) {
  return a > b ? a : b
}

function findLongestWord(words) {
  if (words.length === 0) return null

  let longest = words[0]
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i]
    }
  }
  return longest
}

function sumNumbers(numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

function averageNumbers(numbers) {
  if (numbers.length === 0) return null
  return sumNumbers(numbers) / numbers.length
}

function doesWordExist(words, word) {
  if (words.length === 0) return null

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) return true
  }
  return false
}