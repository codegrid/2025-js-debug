function sum(arr) {
  const _sum = arr.reduce((a, b) => {
    return a + b
  })

  return _sum
}

function average(arr) {
  const _sum = sum(arr)
  const _avg = _sum / arr.length

  return _avg
}

const avg = average([1, 2, 3, 4, 5])
console.log(avg)
