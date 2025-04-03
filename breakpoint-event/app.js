const output = document.getElementById('output')

document.addEventListener('keydown', function (event) {
  output.textContent = `押されたキー: ${event.key}`
  console.log(`キー: ${event.key}, コード: ${event.code}`)
})
