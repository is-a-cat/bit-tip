//HTML bits
document.getElementById("donate").innerHTML="<a href='http://chart.apis.google.com/chart?cht=qr&chs=400x400&chl=<script>document.write(address)</script>&chld=H|0' target='_blank'><img id='jar' src='http://bittip.net78.net/tip/0.png' width='50px'/></a><p class='speech'><a id='bit'>Loading	</a> donated so far.<a id='x'>X</a><a id='don'>Donate to:<br><span id='add'><input type='text' id='tb'  size='42px' onfocus='this.select()' onMouseUp='return false' value='"+address+"' /></a></span></p>";
//load Jquery externally.
(function() {
  var jQuery;
  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
      "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () {
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          scriptLoadHandler();
        }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
  } else {
    jQuery = window.jQuery;
    main();
  }
  function scriptLoadHandler() {
    jQuery = window.jQuery.noConflict(true);
    main(); 
  }
//start jq
function main() { 
  jQuery(document).ready(function($) { 
    		//load css
       $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'http://bittip.net78.net/bittip.css') );
    	//deal with the fades
      $('#jar').mouseover(function() {
        document.getElementById("jar").src="http://chart.apis.google.com/chart?cht=qr&chs=100x100&chl="+address+"&chld=H|0";
        $('.speech').fadeIn(500, function() {
        });
      });
      $('#x').click(function() {
       $('.speech').fadeOut(500, function() {
        
       });
       document.getElementById("jar").src="http://bittip.net78.net/tip/"+fill+".png";
     });
    });
}
})(); //end jq
// Get Bitcoin Value from blockchain.
var xhr = new XMLHttpRequest();
var fill
xhr.open( 'GET', 'http://blockchain.info/q/getreceivedbyaddress/'+address+'?cors=true', true );
xhr.onload = function () {
	var mbtc=xhr.responseText/100000;
	fill=Math.round((mbtc/max)/10*24);
	document.getElementById("bit").innerHTML=mbtc+" mBTC";
	document.getElementById("jar").src="http://bittip.net78.net/tip/"+fill+".png";
}
xhr.send();