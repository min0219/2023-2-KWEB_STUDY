const fs = require('fs');
const path = require('path');
//const util = require('util');


const explore = async target_path => {
    fs.readdir(target_path, {withFileTypes:true}, function(error, filelist){
        if(error) console.error(error);
        else if(filelist.length==0) return;
        else{
            for(const file of filelist){
                if(file.isDirectory()) explore(path.join(target_path, file.name))
                else if(path.extname(file.name)=='.js') console.log(path.join(target_path, file.name));
            }
        }
    });
};


explore('./test');


