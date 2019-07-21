const fs = require("fs");
 
fs.appendFile("text.txt", "\nПривет", function(error){
    if(error) throw error; 
                 
    let data = fs.readFileSync("text.txt", "utf8");
    console.log(data);  
});
