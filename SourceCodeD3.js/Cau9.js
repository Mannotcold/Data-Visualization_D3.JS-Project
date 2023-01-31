const data = [
    { name: 'PRINTING SMUDGES', score: 28258 },
    { name: 'UNSALEABLE', score: 15644 },
    { name: 'NULL', score: 12512 },
    { name: 'CHECK', score: 12109 },
    { name: 'DAMAGED', score: 9173 },
    { name: 'INCORRECT STOCK', score: 5760 },
    { name: 'THROWAWAY', score: 5368 },
    { name: 'DAMAGES', score: 4344 },
    { name: 'THROWNAWAY', score: 4110  },
    { name: 'WRONGLY MARKED', score: 3100 },
    { name: 'DAMAGES WAX', score: 2844},
    { name: 'MOULDY,THROWNAWAY', score: 2600 },
    { name: 'THROWNAWAY-CANT', score: 2472 },
    { name: 'SOLDASSET', score: 2393 },
    { name: 'THROWAWAY RUSTY', score: 2376 },
    { name: '?MISSING', score: 2331 },
    { name: '??', score: 1849 },
    { name: 'MOULDY,UNSALEABLE', score: 1681 },
    { name: 'WETPALLET', score: 1608 },
    { name: 'DAMAGES/CREDITS', score: 1512 }
  ];
  
  const width = 1750;
  const height = 500;
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
  