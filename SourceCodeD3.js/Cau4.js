const data = [
    { name: 'RABBIT NIGHT LIGHT', score: 25500 },
    { name: 'POPCORN HOLDER', score: 24222 },
    { name: 'WW2 GLIDERS ASSTD DESIGNS', score: 19301 },
    { name: 'JUMPBO BAG RED RETROSPOT', score: 13826 },
    { name: 'ASSORTED COLOUR BIRD ORNAMENT', score: 11691 },
    { name: 'WHITE HANGING HEART T-LIGHT HOLDER', score: 10758 },
    { name: 'MINI PAINT SET VINTAGE', score: 9319 },
    { name: 'PACK OF 72 RETROSPOT', score: 9183 },
    { name: 'PACK OF 12 LONDON TISSUES', score: 7840 },
    { name: 'PACK OF 60 PINK PAISLEY CAKE CASE', score: 4777 },
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
    .domain([0, 30000])
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
  