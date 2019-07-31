var EventEmitter = require('events').EventEmitter;  
let someome = "Name";
var server = new EventEmitter;  
  
server.on('login', function(text) {  
    console.log(text);  
});  
server.on('logout', function(text) {  
    console.log(text);  
});  
server.on('back', function(text) {  
    console.log(text);  
});
server.on('move', function(text) {  
    console.log(text);  
}); 
server.on('exit', function(text) {  
    console.log(text);  
}); 
  
setTimeout(() =>{
    server.emit('login', someome + ' вошел на сайт');
}, 1000);
setTimeout(() =>{
    server.emit('logout', someome + ' вышел c сайта');
}, 2000);
setTimeout(() =>{
    server.emit('back', someome + ' вернулся сайта');
}, 3000);
setTimeout(() =>{
    server.emit('move', someome + ' начал двигать мышкой');
}, 4000);
setTimeout(() =>{
    server.emit('exit', someome + ' снова вышел c сайта');
}, 5000);
