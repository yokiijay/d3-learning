import * as d3 from 'd3'

const data = [4, 8, 15, 16, 23, 42], width=420

const x = d3.scaleLinear().domain([0, d3.max(data)!]).range([0, width])

// split into 6 pieces, 120/6 each one.
const y = d3.scaleBand()
.domain(d3.range(data.length).map(item=>item+''))
.range([0, 20 * data.length])

// create svg element
const svg = d3.create('svg')
      .attr('width', width)
      .attr('height', y.range()[1])
      .attr('font-family', 'sans-serif')
      .attr('font-size', '10')
      .attr('text-anchor', 'end')

// create g element
const bar = svg.selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', (d,i)=>`translate(0, ${y(i.toString())})`)

// append rect info every g
bar.append('rect')
    .attr('fill', 'steelblue')
    .attr('width', d=>x(d))
    .attr('height', y.bandwidth() - 1)

// append text info every g
bar.append('text')
    .attr('fill', 'white')
    .attr('x', d=>x(d)-3)
    .attr('y', y.bandwidth()/2)
    .attr('dy', '0.35em')
    .text(d=>d)

console.log( y.bandwidth(), y('2') )

document.body.appendChild(svg.node()!)