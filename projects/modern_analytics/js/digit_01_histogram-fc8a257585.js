(function(){var t,a,r,e,n,s,i,d,o,c,l,p,u;for(s={top:40,right:20,bottom:30,left:60},d=800-s.left-s.right,t=400-s.top-s.bottom,l=[],a=r=0;20>r;a=++r)l[a]=~~(75124*a/20);o=d3.scale.ordinal().rangeRoundBands([0,d],.1).domain(d3.range(0,20)),n=d3.scale.ordinal().rangeRoundBands([0,d],.1).domain(l),p=d3.scale.linear().range([t,0]),c=d3.svg.axis().scale(o).orient("bottom"),u=d3.svg.axis().scale(p).orient("left").ticks(10),e=d3.svg.axis().scale(n).orient("bottom"),i=d3.select("div#digitHistogram").append("svg").attr("width",d+s.left+s.right).attr("height",t+s.top+s.bottom).append("g").attr("transform","translate("+s.left+","+s.top+")"),d3.text("assets/data/0_1_binary_stats-e95d0b3934.csv",function(a,r){var n,s,c,l;if(a)throw a;return n=d3.csv.parseRows(r)[0].map(Number),c=d3.csv.parseRows(r)[1].map(Number),s=n.reduce(function(t,a,r,e){return t+a}),l=c.reduce(function(t,a,r,e){return t+a}),p.domain([0,1.1*d3.max(c)]),i.append("g").attr("class","x axis").attr("transform","translate(0,"+t+")").call(e),i.append("g").attr("class","y axis").call(u).append("text").attr("transform","rotate(-90)").attr("y",6).attr("x",-12).attr("dy",".71em").style("text-anchor","end").text("Count"),i.selectAll(".genuine.bar").data(n).enter().append("rect").attr("class","bar genuine").attr("x",function(t,a){return o(a)}).attr("width",o.rangeBand()/2).attr("y",function(t){return p(t)}).attr("height",function(a){return t-p(a)}),i.selectAll(".imposter.bar").data(c).enter().append("rect").attr("class","bar imposter").attr("x",function(t,a){return o(a)+o.rangeBand()/2}).attr("width",o.rangeBand()/2).attr("y",function(t){return p(t)}).attr("height",function(a){return t-p(a)}),i.append("rect").attr("class","bar imposter").attr("x",d-200).attr("y",20).attr("width",40).attr("height",20),i.append("rect").attr("class","bar genuine").attr("x",d-200).attr("y",50).attr("width",40).attr("height",20),i.append("text").attr("x",d-140).attr("y",54).style("text-anchor","start").attr("dy",".71em").text("genuine"),i.append("text").attr("x",d-140).attr("y",24).style("text-anchor","start").attr("dy",".71em").text("imposter")})}).call(this);