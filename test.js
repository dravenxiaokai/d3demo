var d3 = require('d3')
// var d3 = Object.assign({}, require("d3-format"), require("d3-geo"), require("d3-geo-projection"));

var dataset = [1, 2, 3, 4]

var chart = d3.select('#testId')
    .selectAll('p')
    .data(dataset, (d) => { return d })

chart
    .enter()
    .append()
    .text((d, i) => {
        return [d, i]
    })

chart.exit().remove()