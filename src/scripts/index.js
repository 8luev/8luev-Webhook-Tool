document.addEventListener("DOMContentLoaded", function() {
    const webhook = document.getElementById('webhook');
    const submit = document.getElementById('button');
    
    submit.addEventListener('click', function() {
        const webhookUrl = webhook.value;
        fetch(webhookUrl, {
            method: 'DELETE',
        })
        .then(response => {
            if(response.ok) {
                window.alert('Webhook deleted successfully!');
            } else {
                window.alert('Webhook is invalid or something else');
            }
        })
        .catch(error => {
            console.error(error);
        });
    });
});