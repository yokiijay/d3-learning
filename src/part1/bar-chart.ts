import * as d3 from 'd3'
import { style } from 'd3'

const data = [40, 8, 15, 16, 23, 42]

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

// coding a chart
const chartDiv = d3.create('div')
      .style('font', '20px sans-serif')
      .style('text-align', 'right')
      .style('color', 'white')
      // .style('text-align', 'right')
      // .style('color', 'white')


chartDiv.selectAll('div')
  .data(data)
  .join('div')
    .style('background', 'steelblue')
    .style('padding', '8px')
    .style('margin', '8px')
    .style('border-radius', '10px')
    .style('width', d=>d*10+'px')
    .text(d=>d)

document.body.appendChild(chartDiv.node()!)

console.log( chartDiv )
