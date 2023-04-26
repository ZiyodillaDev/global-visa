var telegram_bot_id = "6063613815:AAHnabqjXh_KH3oLq0_I-AHtKqckktFajKE"; 
//bot id 1215206645
//kanal id -1001942242842
var chat_id = -1001942242842; 
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    u_lastname = document.getElementById("surname").value;
    phone = document.getElementById("phone").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nFamilyasi: " + u_lastname  + "\nTelfon nomeri: " + phone + "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};
