import * as d3 from 'd3'

const csv = 
`name,value
Locke,4
Reyes,8
Ford,15
Jarrah,16
Shephard,23
Kwon,42`

const data = d3.csvParse(csv, d3.autoType), width = 420


const x = d3.scaleLinear().domain([0, d3.max(data, d=>{
  return (d as any).value
})]).range([0, width])

const y = d3.scaleBand().domain(data.map(d=>{
  return (d as any).name
})).range([0, 20*data.length])

// create svg
const svg = d3.create('svg')
    .attr('width', width)
    .attr('height', y.range()[1])
    .attr('font-size', '10')
    .attr('text-anchor', 'end')

const bar = svg.selectAll('g')
    .data(data)
    .join('g')
      .attr('transform', d=>`translate(0, ${y((d as any).name)})`)

bar.append('rect')
    .attr('fill', 'steelblue')
    .attr('width', d=>x((d as any).value))
    .attr('height', y.bandwidth() - 1)

bar.append('text')
    .attr('fill', 'white')
    .attr('x', d=>x((d as any).value) - 3)
    .attr('y', y.bandwidth() / 2 + 3)
    .text(d=>(d as any).value)

document.body.appendChild(svg.node()!)
