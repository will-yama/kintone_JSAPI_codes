// This script posts a message into Slack by utilizing Slack's webhook
// Create a webhook on Slack through https://www.slack.com/services/new/incoming-webhook
// Copy and paste the webhook URL in the appripriate place of this script
// Message will be posted into slack, when the Workflow (process management) status of the kintone app reaches "Submitted"
// If you don't know how to set up process managemnt, have a look here https://help.kintone.com/en/k/user/whatsprocess.html
// All credits to Ryo Kadoya https://github.com/ryokdy , the master of kintone customization. I just localized his idea into English.

(function() {
    "use strict";
    kintone.events.on("app.record.detail.process.proceed", function(e) {
        if (e.nextStatus.value == 'Submitted') { //replace with your own Workflow status
            var thisUrl = "https://kintonemeetup.kintone.com/k/" + kintone.app.getId() + "/show#record=" + kintone.app.record.getId();
            var webhookUrl = 'https://hooks.slack.com/services/xxxxxxxxxxxxxxxxxxxxxx'; //replace with your own webhook url
            var payload = {
                "text": "Expense Report<" + thisUrl + "|[" + e.record.business_purpose.value + "]> has been submitted"
            };
            return new kintone.Promise(function(resolve, reject) {
                kintone.proxy(webhookUrl, 'POST', {}, payload, function(body, status, headers) {
                    console.log(status, body);            
                    resolve(e);
                });
            });
        }
    });
})();
