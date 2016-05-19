//Either set your own App ID and Record ID, or retrieve values from the page you are looking at
appId = kintone.app.getId();
recordId = kintone.app.record.getId();

//Recursive function to fetch all comments in the record
function fetchComments(appId, recordId, opt_offset, opt_comments) {
	var offset = opt_offset || 0;
	var body = {
	    "app": appId,
	    "record": recordId,
	    "offset": offset
	};
	var comments = opt_comments || [];
	return kintone.api(kintone.api.url('/k/v1/record/comments', true), 'GET', body).then(function(resp) {
	    comments = comments.concat(resp.comments);
	    if (resp.older === true) {
	        return fetchComments(appId,recordId, offset + 10, comments);
	    }
	    return comments;
	});
}

//Initiate function
fetchComments(appId,recordId).then(function(comments) {
  console.log(comments);
});
