const data = [
  { name: 'WW2 GLIDERS ASSTD', score: 53847 },
  { name: 'JUMBO BAG RED', score: 47363 },
  { name: 'ASSORTED COLOUR BIRD', score: 36381 },
  { name: 'POPCORN HOLDER', score: 36334 },
  { name: 'PACK OF 72 RETROSPOT CAKE', score: 36039 },
  { name: 'WHITE HANGING HEART', score: 35317 },
  { name: 'RABBIT NIGHT LIGHT', score: 30680 },
  { name: 'MINI PAINT SET VINTAGE', score: 26437 },
  { name: 'PACK OF 72 LONDON ', score: 26315 },
  { name: 'PACK OF 60 PINK  ', score: 24753 },
];



const width = 1500;
const height = 450;
const margin = { top: 50, bottom: 50, left: 50, right: 50 };

const svg = d3.select('#d3-container')
  .append('svg')
  .attr('width', width - margin.left - margin.right)
  .attr('height', height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

const x = d3.scaleBand()
  .domain(d3.range(data.length))
  .range([margin.left, width - margin.right])
  .padding(0.1)

const y = d3.scaleLinear()
  .domain([0, 60000])
  .range([height - margin.bottom, margin.top])

svg
  .append("g")
  .attr("fill", 'royalblue')
  .selectAll("rect")
  .data(data.sort((a, b) => d3.descending(a.score, b.score)))
  .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.score))
    .attr('title', (d) => d.score)
    .attr("class", "rect")
    .attr("height", d => y(0) - y(d.score))
    .attr("width", x.bandwidth());

function yAxis(g) {
  g.attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y).ticks(null, data.format))
    .attr("font-size", '10px')
}

function xAxis(g) {
  g.attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].name))
    .attr("font-size", '10px')
}


svg.append("g").call(xAxis);
svg.append("g").call(yAxis);
svg.node();
