const data = [
  { name: 'United Kingdom', score: 8187806 },
  { name: 'Netherlands', score: 284662 },
  { name: 'EIRE', score: 263277 },
  { name: 'Germany', score: 221698 },
  { name: 'France', score: 197404 },
  { name: 'Austalia', score: 137077 },
  { name: 'Switzerland', score: 56385 },
  { name: 'Spain', score: 54775 },
  { name: 'Belgium', score: 40911 },
  { name: 'Sweden', score: 36596 },
  { name: 'Japan', score: 35341 },
  { name: 'Norway', score: 35631 },
  { name: 'Portugal', score: 35163 },
  { name: 'Finland', score: 29367 },
  { name: 'Channel Islands', score: 22327 },
  { name: 'Denmarks', score: 20086 },
  { name: 'Italy', score: 18768 },
  { name: 'Cyprus', score: 16891 },
  { name: 'Austria', score: 12946 },
  { name: 'Hongkong', score: 10117 },
  { name: 'Singapores', score: 9120 },
  { name: 'Israel', score: 7908 } ,
  { name: 'Poland', score: 7213 },
  { name: 'Unspecified', score: 4750 },
  { name: 'Greece', score: 4711 },
  { name: 'Iceland', score: 4310 },
  { name: 'Canada', score: 3666 },
  { name: 'Malta', score: 2505 },
  { name: 'United Arab Emirates', score: 1902 },
  { name: 'USA', score: 1731 },
  { name: 'Lebanon', score: 1694 },
  { name: 'Lithunia', score: 1661 },
  { name: 'European Community', score: 1292 },
  { name: 'Brazil', score: 1144 },
  { name: 'RSA', score: 1002 },
  { name: 'Czech Republic', score: 708 },
  { name: 'Bahrain', score: 548 },
  { name: 'Saudi Arabia', score: 131 },
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
    .domain([0, 8300000])
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
  