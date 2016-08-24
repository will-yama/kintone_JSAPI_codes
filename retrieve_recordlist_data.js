//This script runs on the record list page of an app
//This script outputs the event object into the console log of the browser.
//This event object is returned when the Record List event runs.
//This script also outputs all of the elements of fields with field code of "dest" into the console log of the browser

(function () {
    
        //Set the Record List event
	kintone.events.on("app.record.index.show", function(ev) {
   
        //Show the contents of the Record List object
        console.log(ev);
    		
    	//Retrieve elements of the field with the field code of "dest"
        var text = kintone.app.getFieldElements("dest");
        console.log(text);

	});
})();
