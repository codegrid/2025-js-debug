const invalidJson = 'foo'

try {
  JSON.parse(invalidJson)
} catch (e) {
  console.log(e)
}

JSON.parse(invalidJson)
