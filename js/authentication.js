
    
    //Success/error window func
    function globalMessage(template_string, result) {
        var message_box = document.getElementById('global_message');
        var message = template_string;
        message_box.classList.add(result);
        message_box.innerHTML = message;
        setTimeout(function(){
            message_box.classList.remove(result);
        }, 3000);
    };

    //SUBSCRIBERS

    

    function subscribersSave(email){
        var subscribers = [];
        var exists = false;
        db.collection("subscribers").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item = doc.data();
                if (item.email === email) {
                    exists = true;
                }
                subscribers.push(item);
            });
            return email;
        }).catch(function(error){
            throw error;
        }).then(function(){
            if (exists) {
                console.error('Вы уже подписаны!');
                globalMessage("<ion-icon name=\"close\"></ion-icon><span>You had already subscribed!</span>", 'error');
            } else {
                db.collection("subscribers").add({
                    email: email
                }).then(function(){
                    console.log('Подписан');
                    globalMessage("<ion-icon name=\"checkmark\"></ion-icon><span>Thank you for subscribing!</span>", 'success');
                });         
            }
        }); 
   
    };
    
    var subscribe_form = document.querySelector('#subscribe_form');
        if(subscribe_form){
            subscribe_form.addEventListener('submit', function(e) {
                e.preventDefault();
                var subscriber_email = subscribe_form.elements["subscriber_email"].value;
                console.log(subscriber_email);
                subscribersSave(subscriber_email);
            });
        }
        

