import * as d3 from 'd3'

// Preparing Margins
const margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 40
}, width = 800, height = 500

const xrange = [margin.left, width - margin.right], yrange = [height - margin.bottom, margin.top]

const csv =
`letter,frequency
A,0.08167
B,0.01492
C,0.02782
D,0.04253
E,0.12702
F,0.02288
G,0.02015
H,0.06094
I,0.06966
J,0.00153
K,0.00772
L,0.04025
M,0.02406
N,0.06749
O,0.07507
P,0.01929
Q,0.00095
R,0.05987
S,0.06327
T,0.09056
U,0.02758
V,0.00978
W,0.0236
X,0.0015
Y,0.01974
Z,0.00074`

const data = d3.csvParse(csv, d3.autoType)

const y = d3.scaleLinear()
.domain([0, d3.max(data, (d:any)=>d.frequency)])
.range(yrange)

const x = d3.scaleBand()
.domain(data.map((d:any)=>d.letter))
.rangeRound(xrange)
.padding(.1)


// Create Axes
const svg = d3.create('svg')
.attr('viewBox', [0, 0, width, height].toString())

svg.append('g')
.attr('transform', `translate(0, ${height - margin.bottom})`)
.call(d3.axisBottom(x))

svg.append("g")
.attr("transform", `translate(${margin.left},0)`)
.call(d3.axisLeft(y))

document.body.appendChild(svg.node()!)