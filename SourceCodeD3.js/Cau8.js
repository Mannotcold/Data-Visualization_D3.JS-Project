const data = [
    { name: 'WW2 GLIDERS ASSTD', score: 48652 },
    { name: 'JUMBO BAG RED', score: 45237 },
    { name: 'POPCORN HOLDER', score: 36334 },
    { name: 'ASSORTED COLOUR BIRD', score: 34010 },
    { name: 'WHITE HANGING HEART', score: 31974 },
    { name: 'PACK OF 72 RETROSPOT CAKE', score: 31963 },
    { name: 'RABBIT NIGHT LIGHT', score: 30680 },
    { name: 'MINI PAINT SET VINTAGE', score: 23727 },
    { name: 'PACK OF 12 LONDON ', score: 23621 },
    { name: 'PACK OF 60 PINK  ', score: 23029 },
    { name: 'ASSORTED COLOUR', score: 22969 },
    { name: 'VICTORIAN GLASS ', score: 22552 },
    { name: 'BROCADE RING', score: 21902 },
    { name: 'JUMPO BAG RING', score: 20517 },
    { name: 'RED HARMONICA', score: 19640 },
    { name: 'LUNCH BAG RED', score: 18050 },
    { name: 'PARTY BUNTING', score: 17785 },
    { name: 'SMALL POPCORN', score: 17385 },
    {name: '60 TEATIME FAIRY', score: 16453 },
    {name: 'PAPER CHAIN KIT', score: 16449 },
  ];
  
  const width = 2500;
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
  