import * as d3 from 'd3'

const data = [4, 8, 15, 16, 23, 42]

// create an Element
const div = document.createElement('div')
div.innerHTML = 'Hello, world!'
document.body.appendChild(div)

// d3 create an Element
const d3div = d3.create('div')
  .html('Hello world, d3 div')
  .style('color', 'tomato')
  .node()

console.log( d3div )
