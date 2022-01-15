function showColumn(ev)
{
    var g = ev.target.value;
    console.log("showing group " + g);
    showNamedColumn(g);
}

function showNamedColumn(g)
{
    var vals = cumulcases[g];
    var tb = document.getElementById("tableBody");
    removeChildren(tb);
    tr = document.createElement("tr");
    td = document.createElement("th");
    td.innerHTML = g;
    
    for(var v of vals) {
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	tr.appendChild(td);
	td.innerHTML = v;
	tb.appendChild(tr);
    }
}

function removeChildren(obj)
{
    while(obj.firstChild)
	obj.removeChild(obj.firstChild);
}

function mkSelection() {
var sel = document.getElementById("groupSel");
//sel.removeChildren();
 for( var k in cumulcases ) {
    var o = document.createElement("option");
    o.innerHTML = k;
    o.value = k;
    sel.appendChild(o);
 }
}