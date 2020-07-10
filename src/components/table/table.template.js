const CODES = {
  A: 65,
  Z: 90,
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function toColumn(el) {
  return `
    <div class="column">${el}</div>
  `
}

function createRow(content, num = '') {
  return `
    <div class="row">
      <div class="row-info">${num}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount).fill('').map(toChar).map(toColumn).join('')
  const cell = new Array(colsCount).fill(createCell()).join('')

  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cell, i + 1))
  }

  return rows.join('')
}
