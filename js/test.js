//$(document).ready(function(){
//function User(first, last, email, pass){
//    this.first = first;
//    this.last = last;
//    this.email = email;
//    this.pass = pass;
//};
//function createUser(){
//    var first = document.querySelector('#first').value;
//    var last = document.querySelector('#last').value;
//    var _email = document.querySelector('#email').value;
//    var pass = document.querySelector('#pass').value;
//    
//    
//    var newUser = new User(first, last, _email, pass);
//    console.log(newUser);
//
//    var users = JSON.parse(localStorage.getItem('users'));
//    
//    users[_email] = newUser;
//    JSON.stringify(localStorage.setItem('users', users));
//}
//$(".first_name_registr").on("submit", function(e){
//    e.preventDefault();
//    createUser();
//});
//    
//});


//$(document).ready(function(){
//function User(first, last, email, pass){
//    this.first = first;
//    this.last = last;
//    this.email = email;
//    this.pass = pass;
//};
//function createUser(){
//    var first = document.querySelector('#first').value;
//    var last = document.querySelector('#last').value;
//    var _email = document.querySelector('#email').value;
//    var pass = document.querySelector('#pass').value;
//    //    var confirm_pass = document.querySelector('#confirm_pass').value;
////     if (pass.value === confirm_pass.value){
////         
////     }
//    
//    var newUser = new User(first, last, _email, pass);
//    console.log(newUser);
//    var users = {};
//    
//    if (localStorage.getItem("users") === null) {
//            localStorage.setItem("users", JSON.stringify(users));
//        }
//        else{
//            users = JSON.parse(localStorage.getItem('users'));
//        }
//        users[_email] = newUser;
//        localStorage.setItem('users', JSON.stringify(users));
//};
//    
//function sign_in(){
//    var login_sign = document.querySelector('#input_login').value;
//    var password = document.querySelector('#input_password').value;
//    var authUser = JSON.parse(localStorage.getItem('users'));
//    if (!authUser) {
//        throw "User doesn't exist";
//    } else {
//       if(authUser != null && authUser[login_sign] != undefined){
//        if(authUser[login_sign].pass  === password){
//            //sessionStorage.setItem("authUser", JSON.stringify(authUser[login_sign]));
//            localStorage.setItem("authUser", JSON.stringify(authUser[login_sign]));
//            }
//        }
//    }
//    
//};
//function authDetect() {
//    if(localStorage.getItem('authUser')) {
//        location.replace('file:///D:/HTML/test_js/profile_test.html');
//    }
//}
//$('#something').on("submit", function(e){
//    e.preventDefault();
//    sign_in();
//});
//$(".first_name_registr").on("submit", function(e){
//    e.preventDefault();
//    createUser();
//});
//     
//});
/* add user */
function registerUser(data) {
    var store = localStorage.getItem('users');
    if (store) {
        store = JSON.parse(store);
    } else {
        store = {};
        localStorage.setItem('users', JSON.stringify(store));
    }

    if (!store[data.email]) {
        store[data.email] = data;
        localStorage.setItem('users', JSON.stringify(store));
    } else {
        alert('User ' + data.email + ' already exists');
    }

};

/* auth user */
function authUser(data) {
    var store = localStorage.getItem('users');
    
    if (!store) {
        throw "User doesn't exist";
    } else {
        store = JSON.parse(store);
    }

    if (store[data.email]) {
        if (store[data.email].pass === data.pass) {
            localStorage.setItem('authuser', JSON.stringify(store[data.email]))
            alert('User was authorised');
        } else {
            alert('Login or password incorrect');
        }
    } else {
        throw "User doesn't exist";
    }
    
};

/* detect auth user */
function authDetect() {
    if (localStorage.getItem('authuser')) {
        location.replace('/profile.html');
    }
};


/* get profile user */

$('#sign_out_btn').on('click', function () {
    alert("You logged out");
    localStorage.removeItem('authuser');
    location.replace('/auth.html');
});

//$(document).ready(function(){
//function Product(id, title, price, description, currency, images){
//    this.id = id;
//    this.title = title;
//    this.price = price;
//    this.description = description;
//    this.currency = currency;
//    this.images = images;
//}
//var products = [new Product(
//        "prod1",
//        "Sport Absorber High Tec BMW Mini Cooper",
//        "$ 21.00",
//       
//        "So, if you like listening to the sound of your engine, or if you like the smell of burning rubber of your wheels, you are in the right place. Even if you don’t like speed and power, racing and all this stuff, but you love your car, you are still in the right place because you might be interested in professional spare parts. Nowadays car is not just a vehicle, it is a part of you, it influences your style and your character. Car is a part of culture because we spend a significant amount of time of our lives by the steering wheel. We spend endless hours in traffic jams; we like to eat in a car, like to listen to music and so on. Our industry made a great number of legendary cars, and this is a true argument that it is essential part of our life. You know, psychologists claim that style of driving shows some striking features of character. And you know it is true. Car is more than a piece of a metal, it became a social phenomenon. Have you ever noticed that we often try to talk to the car as if it was a human?",
//        
//        [
//            {
//                name: 'Manufacturer',
//                value: 'China'
//            },
//            {
//                name: 'Item model number',
//                value: "EG4556"
//            },
//            {
//                name:'Construction year to',
//                value: "10.2010"
//            },
//            {
//                name: 'Submodel',
//                value: "Evolution MR"
//            },
//            {
//                name: 'Class',
//                value: "C"
//            },
//            {
//                name: 'Diameter',
//                value: "89 mm"
//            },
//            {
//                name: 'Location',
//                value: "Driver Side"
//            },
//            {
//                name: 'Shape',
//                value: "Square"
//            }
//        ],
//        [
//            {
//                src: "https://ld-magento.template-help.com/magento_62000/pub/media/catalog/product/cache/cc4974be1c303eaafb326ed210fe8c88/s/p/sport_shock_absorber_high_tec_bmw_mini_cooper_1_.png",
//                
//            },
//            {
//                src: "https://ld-magento.template-help.com/magento_62000/pub/media/catalog/product/cache/cc4974be1c303eaafb326ed210fe8c88/s/p/sport_shock_absorber_high_tec_bmw_mini_cooper_1_.png",
//                
//            },
//            {
//                src: "https://ld-magento.template-help.com/magento_62000/pub/media/catalog/product/cache/cc4974be1c303eaafb326ed210fe8c88/s/p/sport_shock_absorber_high_tec_bmw_mini_cooper_2_.png",
//                
//            },
//            {
//                src: "https://ld-magento.template-help.com/magento_62000/pub/media/catalog/product/cache/cc4974be1c303eaafb326ed210fe8c88/s/p/sport_shock_absorber_high_tec_bmw_mini_cooper_3_.png",
//                
//            },
//            {
//                src: "https://ld-magento.template-help.com/magento_62000/pub/media/catalog/product/cache/cc4974be1c303eaafb326ed210fe8c88/s/p/sport_shock_absorber_high_tec_bmw_mini_cooper_4_.png",
//                
//            },
//            {
//                src: "https://ld-magento.template-help.com/magento_62000/pub/media/catalog/product/cache/cc4974be1c303eaafb326ed210fe8c88/s/p/sport_shock_absorber_high_tec_bmw_mini_cooper_5_.png",
//                
//            },
//            {
//                src: "http://img.youtube.com/vi/xqds0B_meys/hqdefault.jpg",
//                
//            },
//        ]
//        )
//    ];
//    console.log(products);
//    console.log(products[0].id);
//
//    var product_link = document.querySelector("#name_product");
//    product_link.innerHTML = products[0].title;
//    });