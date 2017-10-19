// This example script runs on the record list view. 
// This example specifically looks through all the records in the list view for fields with field code of "dest"
// It then adds a rainbox effect (and other styles) to the fields that specifically have the value "Florida" inside
// Functions for creating the rainbow effect was taken from http://www.javascriptkit.com/script/script2/rainbowtext.shtml
// Credit to Matt Hedgecoe for rainbow effect of the text

(function () {
	kintone.events.on("app.record.index.show", function(ev) {

		var speed=50;
		var hex=new Array("00","14","28","3C","50","64","78","8C","A0","B4","C8","DC","F0");
		var r=1;
		var g=1;
		var b=1;
		var seq=1;

		function changetext(){
			rainbow="#"+hex[r]+hex[g]+hex[b];

			//get field elements for fields with field codes of "dest"
			var text = kintone.app.getFieldElements("dest"); 

			//if the field value is "Florida", make it stand out!
			for(i=0;i<text.length;i++){
				if (ev.records[i].dest.value == "Florida"){ 
					text[i].style.color=rainbow;
					text[i].style.fontSize ="xx-large";
					text[i].style.fontWeight ="bold";
				}
			}
		}

		//A JavaScript function to make a rainbow effect
		function change(){
			if (seq==6){
				b--;
				if (b==0)
				seq=1;
			}
			if (seq==5){
				r++;
				if (r==12)
				seq=6;
			}
			if (seq==4){
				g--;
				if (g==0)
				seq=5;
			}
			if (seq==3){
				b++;
				if (b==12)
			seq=4;
			}
			if (seq==2){
				r--;
				if (r==0)
				seq=3;
			}
			if (seq==1){
				g++;
				if (g==12)
				seq=2;
			}
			changetext()
		}

		//A JavaScript function to give the target a dynamic color change effect
		function starteffect(){
			setInterval(change,speed);
		}
		starteffect()
	});
})();

//
