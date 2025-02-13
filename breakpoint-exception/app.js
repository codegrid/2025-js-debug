const invalidJson = 'foo'

try {
  JSON.parse(invalidJson)
} catch (e) {
  console.log(e)
}

throw new Error('bar')
