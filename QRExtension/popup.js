document.addEventListener('DOMContentLoaded', function() {

    //fills textfield with url of current tab
    chrome.tabs.getSelected(null,function(tab) {
        document.getElementById("qr-data").value = tab.url;

        //since chrome ids a new tab like this there's an if stateent to prevent that
        if(tab.url=="chrome://newtab/")
            document.getElementById("qr-data").value = "google.com";
    });

    //button that creates qr code
    var checkPageButton = document.getElementById('createQR');

    //stores old link
    var pastValue = null;

    //if button is clicked
    checkPageButton.addEventListener('click', function() {

        //get data of textfield
        var qrdata = document.getElementById("qr-data");
        
        //check that user isnt making a duplicate qr code
        if(pastValue==qrdata.value){}

        //replace old qr code if needed and then creates qrcode using import
        else{
            document.getElementById("qrcode").innerHTML = "";
            var qrcode = new QRCode(document.getElementById("qrcode"));
            qrcode.makeCode(qrdata.value);
            pastValue=qrdata.value;
        }
    });

  });