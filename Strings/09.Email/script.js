function getMail(text) {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

var text = "I have one email in gmail. It is somegmailmail@gmail.com and two more emails: They are somerandommail@yahoo.co.uk and anotherrandommail@gotin.com.";

console.log('Task 9. -> E-mails: ' + extractEmails(text));

function showResult() {
    var text = document.getElementById('input').value;
    document.getElementById('result').value = getMail(text);
}