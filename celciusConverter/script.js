function convert() {
  const celValue = Number(document.getElementById('input').value)
  const fahValue = (celValue * 1.8) + 32
  const result = document.getElementById('result')
  result.innerHTML = fahValue +'\n' + 'Fahrenheit'
}