(this["webpackJsonpteam-rolodex"]=this["webpackJsonpteam-rolodex"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"team":[{"id":1,"name":"Bjarne Stroustrup","website":"https://www.stroustrup.com"},{"id":2,"name":"Elon Musk","website":"https://www.tesla.com/elon-musk"},{"id":3,"name":"Bernardo Kastrup","website":"https://www.bernardokastrup.com"},{"id":4,"name":"Linus B. Torvalds","website":"https://www.bernardokastrup.com"},{"id":5,"name":"Barbara Liskov","website":"https://www.csail.mit.edu/person/barbara-liskov"},{"id":6,"name":"Donald E. Knuth","website":"https://www-cs-faculty.stanford.edu/~knuth"},{"id":7,"name":"Dennis Ritchie","website":"https://www.bell-labs.com/usr/dmr/www"},{"id":8,"name":"Robert E. Kahn","website":"https://www.cnri.reston.va.us/bios/kahn.html"},{"id":9,"name":"Tim Berners-Lee","website":"https://www.w3.org/People/Berners-Lee"},{"id":10,"name":"Guido van Rossum","website":"https://gvanrossum.github.io"},{"id":11,"name":"Brendan Eich","website":"https://brendaneich.com"},{"id":12,"name":"Marvin Minsky","website":"https://web.media.mit.edu/~minsky"},{"id":13,"name":"Alan Kay","website":"https://en.wikipedia.org/wiki/Alan_Kay"}]}')},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),i=a.n(s),o=(a(13),a(3)),c=a(4),m=a(7),l=a(6),h=(a(14),function(e){var t=e.person;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"person",src:"https://robohash.org/".concat(t.id,"?set=set1&size=180x180")}),r.a.createElement("h2",null,t.name),r.a.createElement("a",{href:t.website,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{type:"button"},"Learn more")))}),u=(a(15),function(e){return r.a.createElement("div",{className:"card-list"},e.team.map((function(e){return r.a.createElement(h,{key:e.id,person:e})})))}),w=(a(16),function(e){var t=e.placeholder,a=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:a})}),d=(a(17),a(5)),p=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleSearchChange=function(t){e.setState({search:t.target.value})},e.state={team:d.team,search:""},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.team,a=e.search,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"h1"},"Greatest minds"),r.a.createElement(w,{placeholder:"search great minds",handleChange:this.handleSearchChange}),r.a.createElement(u,{team:n}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.4e2dd15d.chunk.js.map