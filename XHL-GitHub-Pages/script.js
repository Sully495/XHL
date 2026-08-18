/* ========================= XHL EDITOR DATA =========================
   Update the values in this section whenever games are played.
   GitHub Pages needs no server: save, commit, and the site refreshes.
==================================================================== */
const XHL = {
  cupDate: '2026-12-12T20:00:00-05:00',
  gameOfNight: { away:'Penguins', awayCode:'PIT', home:'Senators', homeCode:'OTT', time:'Tonight · 8:00 PM ET', headline:'A rivalry game with first place on the line.' },
  playerOfWeek: { name:'Jaxon Cole', team:'Pittsburgh Penguins', position:'Center', initials:'JC', goals:6, assists:5, points:11, games:4, note:'Scored the winner in back-to-back overtime games.' },
  standings: [
    {team:'Pittsburgh Penguins', code:'PIT', gp:18,w:14,l:3,otl:1,gf:74,ga:43}, {team:'Ottawa Senators',code:'OTT',gp:18,w:12,l:5,otl:1,gf:65,ga:49}, {team:'Colorado Avalanche',code:'COL',gp:17,w:10,l:5,otl:2,gf:61,ga:55}, {team:'New York Rangers',code:'NYR',gp:18,w:9,l:7,otl:2,gf:58,ga:56}, {team:'Seattle Kraken',code:'SEA',gp:17,w:7,l:8,otl:2,gf:51,ga:61}, {team:'Vegas Golden Knights',code:'VGK',gp:18,w:5,l:12,otl:1,gf:46,ga:71}
  ],
  rankings: [
    {team:'Pittsburgh Penguins', move:'↑ 1', direction:'up', note:'Eight wins in their last ten.'}, {team:'Ottawa Senators',move:'↓ 1',direction:'down',note:'Still dangerous at both ends.'}, {team:'Colorado Avalanche',move:'↑ 2',direction:'up',note:'A huge week from the top line.'}, {team:'New York Rangers',move:'—',direction:'',note:'Finding consistency.'}, {team:'Seattle Kraken',move:'↑ 1',direction:'up',note:'Climbing back into the race.'}
  ],
  teams: [
    {name:'Pittsburgh Penguins',code:'PIT',owner:'IceKing87',record:'14–3–1',history:'Founding XHL club and reigning regular-season leader.',roster:'Jaxon Cole, Mason Hart, Luca King',next:'vs OTT · Tonight · 8:00 PM'},
    {name:'Ottawa Senators',code:'OTT',owner:'SenatorsElite',record:'12–5–1',history:'Built on relentless forecheck and clutch goaltending.',roster:'Noah Brooks, Carter Young, Elias Frost',next:'at PIT · Tonight · 8:00 PM'},
    {name:'Colorado Avalanche',code:'COL',owner:'MileHighXHL',record:'10–5–2',history:'Fast-break specialists with a championship mindset.',roster:'Aiden Stone, Theo Park, Logan West',next:'vs NYR · Friday · 9:00 PM'},
    {name:'New York Rangers',code:'NYR',owner:'BroadwayBlue',record:'9–7–2',history:'A historic club looking for its first XHL Cup.',roster:'Owen Price, Kai Rivers, Ben Morgan',next:'at COL · Friday · 9:00 PM'},
    {name:'Seattle Kraken',code:'SEA',owner:'SoundWave',record:'7–8–2',history:'An expansion club that never stops competing.',roster:'Nico Blake, Evan Ross, Liam Shaw',next:'vs VGK · Saturday · 8:30 PM'},
    {name:'Vegas Golden Knights',code:'VGK',owner:'NeonKnight',record:'5–12–1',history:'Reloading now, ready to spoil every opponent.',roster:'Ryder Dean, Cole James, Max Turner',next:'at SEA · Saturday · 8:30 PM'}
  ],
  games: [
    {id:'pit-ott',away:'Pittsburgh Penguins',awayCode:'PIT',awayScore:'—',home:'Ottawa Senators',homeCode:'OTT',homeScore:'—',status:'TONIGHT · 8:00 PM ET',notes:['Pittsburgh is 8–2 in its last ten games.','Ottawa owns the league’s best penalty kill.','Watch the top two teams battle for first place.']},
    {id:'col-nyr',away:'New York Rangers',awayCode:'NYR',awayScore:3,home:'Colorado Avalanche',homeCode:'COL',homeScore:4,status:'FINAL · OT',notes:['Aiden Stone scored the overtime winner.','Colorado outshot New York 33–27.','Three stars: Stone, Price, Park.']},
    {id:'sea-vgk',away:'Seattle Kraken',awayCode:'SEA',awayScore:2,home:'Vegas Golden Knights',homeCode:'VGK',homeScore:1,status:'FINAL',notes:['Seattle held on after a late Vegas push.','Nico Blake: 1 goal, 1 assist.','Goaltender Evan Ross made 31 saves.']}
  ],
  bracket: [
    {round:'Quarterfinals',series:[{teams:'PIT vs SEA',score:'PIT leads 2–0',detail:'Pittsburgh has controlled the opening two games with 11 total goals.'},{teams:'OTT vs VGK',score:'OTT leads 1–1',detail:'The Senators answered a Game 1 upset with a shutout win.'}]},
    {round:'Semifinals',series:[{teams:'COL vs NYR',score:'COL leads 1–0',detail:'Colorado took Game 1 in overtime. Series continues Friday.'},{teams:'TBD vs TBD',score:'Awaiting results',detail:'This series will populate when quarterfinals are complete.'}]},
    {round:'XHL Cup Final',series:[{teams:'TBD vs TBD',score:'Cup Final',detail:'The XHL Cup Final starts December 12 at 8:00 PM ET.'}]}
  ],
  news: [
    {date:'DEC 02',title:'Penguins surge to the top of the standings',text:'Pittsburgh’s winning streak has put the league on notice.'},{date:'DEC 01',title:'Game of the Night: PIT vs OTT',text:'The two best teams meet with first place on the line.'},{date:'NOV 29',title:'Avalanche win an overtime thriller',text:'Colorado edged New York in a playoff-preview atmosphere.'}
  ],
  vote:{question:'Who should be Player of the Week?',options:['Jaxon Cole — PIT','Noah Brooks — OTT','Aiden Stone — COL']},
  hall:[{label:'XHL CUP CHAMPION',name:'Pittsburgh Penguins',text:'Season 1 Champions'},{label:'FINALS MVP',name:'Jaxon Cole',text:'9 points in 6 playoff games'},{label:'ALL-TIME GOALS',name:'Jaxon Cole',text:'47 career goals'},{label:'ALL-TIME POINTS',name:'Noah Brooks',text:'81 career points'}]
};

const $ = (id) => document.getElementById(id);
const escapeHtml = (text) => String(text).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
function render(){
  $('ticker-text').textContent = `${XHL.gameOfNight.awayCode} vs ${XHL.gameOfNight.homeCode} tonight · ${XHL.playerOfWeek.name} named Player of the Week · Playoff race is heating up.`;
  $('game-of-night').innerHTML = `<div class="team-score"><div class="crest">${XHL.gameOfNight.awayCode}</div><strong>${escapeHtml(XHL.gameOfNight.away)}</strong></div><div class="versus">VS<small>${escapeHtml(XHL.gameOfNight.time)}</small></div><div class="team-score"><div class="crest">${XHL.gameOfNight.homeCode}</div><strong>${escapeHtml(XHL.gameOfNight.home)}</strong></div>`;
  const p=XHL.playerOfWeek; $('player-of-week').innerHTML=`<div class="potw-person"><div class="avatar">${p.initials}</div><div><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.team)} · ${escapeHtml(p.position)}</p><p>${escapeHtml(p.note)}</p></div></div><div class="stat-row"><div><b>${p.goals}</b><span>Goals</span></div><div><b>${p.assists}</b><span>Assists</span></div><div><b>${p.points}</b><span>Points</span></div><div><b>${p.games}</b><span>Games</span></div></div>`;
  $('power-rankings').innerHTML=XHL.rankings.map((r,i)=>`<div class="rank"><b class="rank-number">${i+1}</b><div class="rank-team">${escapeHtml(r.team)}<small> · ${escapeHtml(r.note)}</small></div><span class="movement ${r.direction}">${r.move}</span></div>`).join('');
  $('standings-body').innerHTML=XHL.standings.slice().sort((a,b)=>(b.w*2+b.otl)-(a.w*2+a.otl)).map(t=>{let pts=t.w*2+t.otl;return `<tr><td><div class="table-team"><span class="table-crest">${t.code}</span>${escapeHtml(t.team)}</div></td><td>${t.gp}</td><td>${t.w}</td><td>${t.l}</td><td>${t.otl}</td><td><b>${pts}</b></td><td>${t.gf}</td><td>${t.ga}</td><td>${t.gf-t.ga>0?'+':''}${t.gf-t.ga}</td></tr>`}).join('');
  $('teams-grid').innerHTML=XHL.teams.map((t,i)=>`<button class="team-card" data-team="${i}"><b>${t.code}</b><strong>${escapeHtml(t.name)}</strong><span>${escapeHtml(t.record)} · Owner: ${escapeHtml(t.owner)}</span></button>`).join('');
  $('playoff-bracket').innerHTML=XHL.bracket.map(r=>`<div class="round"><h3>${r.round}</h3>${r.series.map(s=>`<button class="series" data-detail="${escapeHtml(s.detail)}"><div class="series-row"><span>${escapeHtml(s.teams)}</span></div><small>${escapeHtml(s.score)}</small></button>`).join('')}</div>`).join('');
  $('news-list').innerHTML=XHL.news.map(n=>`<article class="news-item"><time>${escapeHtml(n.date)}</time><h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.text)}</p></article>`).join('');
  $('vote-question').textContent=XHL.vote.question; $('vote-options').innerHTML=XHL.vote.options.map((o,i)=>`<button class="vote-option" data-vote="${i}"><span>${escapeHtml(o)}</span><span>VOTE →</span></button>`).join('');
  $('hall-grid').innerHTML=XHL.hall.map(h=>`<article class="hall-card"><span>${escapeHtml(h.label)}</span><h3>${escapeHtml(h.name)}</h3><p>${escapeHtml(h.text)}</p></article>`).join('');
  renderGameTabs(0); bindInteractions();
}
function showTeam(index){const t=XHL.teams[index];$('team-detail').className='team-detail show';$('team-detail').innerHTML=`<h3>${escapeHtml(t.name)} <span>· ${t.code}</span></h3><div class="detail-grid"><div><p>OWNER</p><strong>${escapeHtml(t.owner)}</strong></div><div><p>RECORD</p><strong>${escapeHtml(t.record)}</strong></div><div><p>NEXT GAME</p><strong>${escapeHtml(t.next)}</strong></div></div><p>${escapeHtml(t.history)}</p><p><b>Roster:</b> ${escapeHtml(t.roster)}</p>`;document.querySelectorAll('.team-card').forEach((card,i)=>card.classList.toggle('active',i===index));}
function renderGameTabs(active){$('game-tabs').innerHTML=XHL.games.map((g,i)=>`<button class="game-tab ${i===active?'active':''}" data-game="${i}">${g.awayCode} @ ${g.homeCode}</button>`).join('');const g=XHL.games[active];$('game-center-content').innerHTML=`<div class="game-box"><div class="scoreboard"><div class="game-status">${escapeHtml(g.status)}</div><div class="scoreboard-row"><span>${g.awayCode}</span><span>${g.awayScore}</span></div><div class="scoreboard-row"><span>${g.homeCode}</span><span>${g.homeScore}</span></div></div><div class="game-notes"><h3>${escapeHtml(g.away)} at ${escapeHtml(g.home)}</h3><ul>${g.notes.map(n=>`<li>${escapeHtml(n)}</li>`).join('')}</ul></div></div>`;document.querySelectorAll('[data-game]').forEach(b=>b.addEventListener('click',()=>renderGameTabs(+b.dataset.game)));}
function bindInteractions(){document.querySelectorAll('[data-team]').forEach(b=>b.addEventListener('click',()=>showTeam(+b.dataset.team)));document.querySelectorAll('.series').forEach(b=>b.addEventListener('click',()=>{$('bracket-detail').textContent=b.dataset.detail;}));document.querySelectorAll('[data-vote]').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem('xhlVote',b.dataset.vote);$('vote-result').textContent=`Your vote for ${XHL.vote.options[+b.dataset.vote]} has been saved. Thanks!`; }));const saved=localStorage.getItem('xhlVote');if(saved!==null)$('vote-result').textContent=`Your saved vote: ${XHL.vote.options[+saved]}.`;}
function updateCountdown(){const diff=new Date(XHL.cupDate)-new Date();if(diff<=0){$('countdown-label').textContent='The XHL Cup is here!';$('countdown').innerHTML='';return;}const parts=[['DAYS',Math.floor(diff/864e5)],['HRS',Math.floor(diff/36e5)%24],['MIN',Math.floor(diff/6e4)%60],['SEC',Math.floor(diff/1e3)%60]];$('countdown-label').textContent='Until puck drop';$('countdown').innerHTML=parts.map(([l,n])=>`<div><b>${String(n).padStart(2,'0')}</b><small>${l}</small></div>`).join('');}
document.querySelector('.menu-toggle').addEventListener('click',()=>{const h=document.querySelector('.site-header');h.classList.toggle('menu-open');document.querySelector('.menu-toggle').setAttribute('aria-expanded',h.classList.contains('menu-open'));});
render();updateCountdown();setInterval(updateCountdown,1000);
