var day = 0;
var i = 0;
var timer;
function setColor()
{
   var paths = document.evaluate("//svg:svg[@class = 'leaflet-zoom-animated']//svg:path", document, svgNSResolver, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE);
   

   var ca = paths.snapshotItem(0);
   console.log("setColor:" + day + " " + ca + " " + CACols["V1"][i]);
   ca.setAttribute("fill", CACols["V1"][i]);
   
   var ca1 = paths.snapshotItem(1);
   console.log("setColor:" + day + " " + ca1 + " " + CACols["V2"][i]);
   ca1.setAttribute("fill", CACols["V2"][i]);
   
      var ca2 = paths.snapshotItem(2);
   console.log("setColor:" + day + " " + ca2 + " " + CACols["V3"][i]);
   ca2.setAttribute("fill", CACols["V3"][i]);
   
   var ca3 = paths.snapshotItem(3);
   console.log("setColor:" + day + " " + ca3 + " " + CACols["V4"][i]);
   ca3.setAttribute("fill", CACols["V4"][i]);
   
      var ca4 = paths.snapshotItem(4);
   console.log("setColor:" + day + " " + ca4 + " " + CACols["V5"][i]);
   ca4.setAttribute("fill", CACols["V5"][i]);
   
   var ca5 = paths.snapshotItem(5);
   console.log("setColor:" + day + " " + ca5 + " " + CACols["V6"][i]);
   ca5.setAttribute("fill", CACols["V6"][i]);
   
      var ca6 = paths.snapshotItem(6);
   console.log("setColor:" + day + " " + ca6 + " " + CACols["V7"][i]);
   ca6.setAttribute("fill", CACols["V7"][i]);
   
   var ca7 = paths.snapshotItem(7);
   console.log("setColor:" + day + " " + ca7 + " " + CACols["V8"][i]);
   ca7.setAttribute("fill", CACols["V8"][i]);
   
      var ca8 = paths.snapshotItem(8);
   console.log("setColor:" + day + " " + ca8 + " " + CACols["V9"][i]);
   ca8.setAttribute("fill", CACols["V9"][i]);
   
   var ca9 = paths.snapshotItem(9);
   console.log("setColor:" + day + " " + ca9 + " " + CACols["V10"][i]);
   ca9.setAttribute("fill", CACols["V10"][i]);
   
      var ca10 = paths.snapshotItem(10);
   console.log("setColor:" + day + " " + ca10 + " " + CACols["V11"][i]);
   ca10.setAttribute("fill", CACols["V11"][i]);
   
   var ca11 = paths.snapshotItem(11);
   console.log("setColor:" + day + " " + ca11 + " " + CACols["V12"][i]);
   ca11.setAttribute("fill", CACols["V12"][i]);
   
      var ca12 = paths.snapshotItem(12);
   console.log("setColor:" + day + " " + ca12 + " " + CACols["V13"][i]);
   ca12.setAttribute("fill", CACols["V13"][i]);
   
   var ca13 = paths.snapshotItem(13);
   console.log("setColor:" + day + " " + ca13 + " " + CACols["V14"][i]);
   ca13.setAttribute("fill", CACols["V14"][i]);
   
      var ca14 = paths.snapshotItem(14);
   console.log("setColor:" + day + " " + ca14 + " " + CACols["V15"][i]);
   ca14.setAttribute("fill", CACols["V15"][i]);
   
   var ca15 = paths.snapshotItem(15);
   console.log("setColor:" + day + " " + ca15 + " " + CACols["V16"][i]);
   ca15.setAttribute("fill", CACols["V16"][i]);
   
      var ca16 = paths.snapshotItem(16);
   console.log("setColor:" + day + " " + ca16 + " " + CACols["V17"][i]);
   ca16.setAttribute("fill", CACols["V17"][i]);
   
   var ca17 = paths.snapshotItem(17);
   console.log("setColor:" + day + " " + ca17 + " " + CACols["V18"][i]);
   ca17.setAttribute("fill", CACols["V18"][i]);
   
      var ca18 = paths.snapshotItem(18);
   console.log("setColor:" + day + " " + ca18 + " " + CACols["V19"][i]);
   ca18.setAttribute("fill", CACols["V19"][i]);
   
   var ca19 = paths.snapshotItem(19);
   console.log("setColor:" + day + " " + ca19 + " " + CACols["V20"][i]);
   ca19.setAttribute("fill", CACols["V20"][i]);
   
   var ca20 = paths.snapshotItem(20);
   console.log("setColor:" + day + " " + ca20 + " " + CACols["V21"][i]);
   ca20.setAttribute("fill", CACols["V21"][i]);
   
   var ca21 = paths.snapshotItem(21);
   console.log("setColor:" + day + " " + ca21 + " " + CACols["V22"][i]);
   ca21.setAttribute("fill", CACols["V22"][i]);
   
      var ca22 = paths.snapshotItem(22);
   console.log("setColor:" + day + " " + ca22 + " " + CACols["V23"][i]);
   ca22.setAttribute("fill", CACols["V23"][i]);
   
      var ca23 = paths.snapshotItem(23);
   console.log("setColor:" + day + " " + ca23 + " " + CACols["V24"][i]);
   ca23.setAttribute("fill", CACols["V24"][i]);
   
      var ca24 = paths.snapshotItem(24);
   console.log("setColor:" + day + " " + ca24 + " " + CACols["V25"][i]);
   ca24.setAttribute("fill", CACols["V25"][i]);
   
      var ca25 = paths.snapshotItem(25);
   console.log("setColor:" + day + " " + ca25 + " " + CACols["V26"][i]);
   ca25.setAttribute("fill", CACols["V26"][i]);
   
      var ca26 = paths.snapshotItem(26);
   console.log("setColor:" + day + " " + ca26 + " " + CACols["V27"][i]);
   ca26.setAttribute("fill", CACols["V27"][i]);
   
      var ca27 = paths.snapshotItem(27);
   console.log("setColor:" + day + " " + ca27 + " " + CACols["V28"][i]);
   ca27.setAttribute("fill", CACols["V28"][i]);
    
   var ca28 = paths.snapshotItem(28);
   console.log("setColor:" + day + " " + ca28 + " " + CACols["V29"][i]);
   ca28.setAttribute("fill", CACols["V29"][i]);
   
   var ca29 = paths.snapshotItem(29);
   console.log("setColor:" + day + " " + ca29 + " " + CACols["V30"][i]);
   ca29.setAttribute("fill", CACols["V30"][i]);
   
      var ca30 = paths.snapshotItem(30);
   console.log("setColor:" + day + " " + ca30 + " " + CACols["V31"][i]);
   ca30.setAttribute("fill", CACols["V31"][i]);
   
   var ca31 = paths.snapshotItem(31);
   console.log("setColor:" + day + " " + ca31 + " " + CACols["V32"][i]);
   ca31.setAttribute("fill", CACols["V32"][i]);
   
      var ca32 = paths.snapshotItem(32);
   console.log("setColor:" + day + " " + ca32 + " " + CACols["V33"][i]);
   ca32.setAttribute("fill", CACols["V33"][i]);
   
   var ca33 = paths.snapshotItem(33);
   console.log("setColor:" + day + " " + ca33 + " " + CACols["V34"][i]);
   ca33.setAttribute("fill", CACols["V34"][i]);
   
   var ca34 = paths.snapshotItem(34);
   console.log("setColor:" + day + " " + ca34 + " " + CACols["V35"][i]);
   ca34.setAttribute("fill", CACols["V35"][i]);
   
   var ca35 = paths.snapshotItem(35);
   console.log("setColor:" + day + " " + ca35 + " " + CACols["V36"][i]);
   ca35.setAttribute("fill", CACols["V36"][i]);
   
      var c36 = paths.snapshotItem(36);
   console.log("setColor:" + day + " " + c36 + " " + CACols["V37"][i]);
   c36.setAttribute("fill", CACols["V37"][i]);
   
   var ca37 = paths.snapshotItem(37);
   console.log("setColor:" + day + " " + ca37 + " " + CACols["V38"][i]);
   ca37.setAttribute("fill", CACols["V38"][i]);
   
      var ca38 = paths.snapshotItem(38);
   console.log("setColor:" + day + " " + ca38 + " " + CACols["V39"][i]);
   ca38.setAttribute("fill", CACols["V39"][i]);
   
   var ca39 = paths.snapshotItem(39);
   console.log("setColor:" + day + " " + ca39 + " " + CACols["V40"][i]);
   ca39.setAttribute("fill", CACols["V40"][i]);
   
      var ca40 = paths.snapshotItem(40);
   console.log("setColor:" + day + " " + ca40 + " " + CACols["V41"][i]);
   ca40.setAttribute("fill", CACols["V41"][i]);
   
   var ca41 = paths.snapshotItem(41);
   console.log("setColor:" + day + " " + ca41 + " " + CACols["V42"][i]);
   ca41.setAttribute("fill", CACols["V42"][i]);
   
      var ca42 = paths.snapshotItem(42);
   console.log("setColor:" + day + " " + ca42 + " " + CACols["V43"][i]);
   ca42.setAttribute("fill", CACols["V43"][i]);
   
   var ca43 = paths.snapshotItem(43);
   console.log("setColor:" + day + " " + ca43 + " " + CACols["V44"][i]);
   ca43.setAttribute("fill", CACols["V44"][i]);
   
      var ca44 = paths.snapshotItem(44);
   console.log("setColor:" + day + " " + ca44 + " " + CACols["V45"][i]);
   ca44.setAttribute("fill", CACols["V45"][i]);
   
   var ca45 = paths.snapshotItem(45);
   console.log("setColor:" + day + " " + ca45 + " " + CACols["V46"][i]);
   ca45.setAttribute("fill", CACols["V46"][i]);
   
      var ca46 = paths.snapshotItem(46);
   console.log("setColor:" + day + " " + ca46 + " " + CACols["V47"][i]);
   ca46.setAttribute("fill", CACols["V47"][i]);
   
   var ca47 = paths.snapshotItem(47);
   console.log("setColor:" + day + " " + ca47 + " " + CACols["V48"][i]);
   ca47.setAttribute("fill", CACols["V48"][i]);
      var ca48 = paths.snapshotItem(48);
   console.log("setColor:" + day + " " + ca48 + " " + CACols["V49"][i]);
   ca48.setAttribute("fill", CACols["V49"][i]);
   
   var ca49 = paths.snapshotItem(49);
   console.log("setColor:" + day + " " + ca49 + " " + CACols["V50"][i]);
   ca49.setAttribute("fill", CACols["V50"][i]);
   
      var ca50 = paths.snapshotItem(50);
   console.log("setColor:" + day + " " + ca50 + " " + CACols["V51"][i]);
   ca50.setAttribute("fill", CACols["V51"][i]);
   
      var ca51 = paths.snapshotItem(51);
   console.log("setColor:" + day + " " + ca51 + " " + CACols["V52"][i]);
   ca51.setAttribute("fill", CACols["V52"][i]);
   
      var ca52 = paths.snapshotItem(52);
   console.log("setColor:" + day + " " + ca52 + " " + CACols["V53"][i]);
   ca52.setAttribute("fill", CACols["V53"][i]);
   
      var ca53 = paths.snapshotItem(53);
   console.log("setColor:" + day + " " + ca53 + " " + CACols["V54"][i]);
   ca53.setAttribute("fill", CACols["V54"][i]);
   
      var ca54 = paths.snapshotItem(54);
   console.log("setColor:" + day + " " + ca54 + " " + CACols["V55"][i]);
   ca54.setAttribute("fill", CACols["V55"][i]);
   
      var ca55 = paths.snapshotItem(55);
   console.log("setColor:" + day + " " + ca55 + " " + CACols["V56"][i]);
   ca55.setAttribute("fill", CACols["V56"][i]);
   
         var ca56 = paths.snapshotItem(56);
   console.log("setColor:" + day + " " + ca56 + " " + CACols["V57"][i]);
   ca56.setAttribute("fill", CACols["V57"][i]);
   
      var ca57 = paths.snapshotItem(57);
   console.log("setColor:" + day + " " + ca57 + " " + CACols["V58"][i]);
   ca57.setAttribute("fill", CACols["V58"][i]);

    i++;

    if(i == 285) {
	clearInterval(timer);
	timer = null;
    }
}


function svgNSResolver(prefix) { 
     if (prefix == 'svg') 
         return 'http://www.w3.org/2000/svg';
     return null;
}


