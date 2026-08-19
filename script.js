const standings=[
["1","Pittsburgh Penguins",12,9,2,1,19],
["2","Ottawa Senators",12,8,3,1,17],
["3","San Jose Sharks",12,7,4,1,15],
["4","Colorado Avalanche",12,6,5,1,13],
["5","New York Rangers",12,6,5,1,13]
];

document.getElementById("standingsBody").innerHTML=standings.map(r=>"<tr>"+r.map(x=>"<td>"+x+"</td>").join("")+"</tr>").join("");

const games=[
["FRI • 8:00 PM EST","Ottawa Senators","Pittsburgh Penguins"],
["FRI • 8:30 PM EST","San Jose Sharks","Colorado Avalanche"],
["SAT • 8:00 PM EST","Toronto Maple Leafs","Tampa Bay Lightning"],
["SUN • 8:00 PM EST","New York Rangers","Philadelphia Flyers"]
];

document.getElementById("gamesGrid").innerHTML=games.map(g=>`<div class="game"><b>${g[0]}</b><h3>${g[1]} <small>VS</small> ${g[2]}</h3><small>REGULAR SEASON • 4V4</small></div>`).join("");

const teams=[
"Pittsburgh Penguins","Ottawa Senators","San Jose Sharks","Colorado Avalanche",
"New York Rangers","Philadelphia Flyers","Toronto Maple Leafs","Tampa Bay Lightning"
];

document.getElementById("teamsGrid").innerHTML=teams.map(t=>`<div class="team"><div class="circle">${t.split(" ").map(x=>x[0]).slice(0,2).join("")}</div><h3>${t}</h3><p>Team roster coming soon</p></div>`).join("");

const stats=[
["1","Player 01","Pittsburgh Penguins",12,10,12,22],
["2","Player 02","Ottawa Senators",12,9,10,19],
["3","Player 03","San Jose Sharks",12,8,9,17],
["4","Player 04","Colorado Avalanche",12,7,8,15],
["5","Player 05","New York Rangers",12,6,8,14]
];

document.getElementById("statsBody").innerHTML=stats.map(r=>"<tr>"+r.map(x=>"<td>"+x+"</td>").join("")+"</tr>").join("");
