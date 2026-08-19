

        const fs = require("fs")
        new Promise(function(resolve,reject){
            fs.readFile('./other/1.txt',function(err,data){
                resolve(data.toString())
            })
        }).then(function(value){
            console.log('value1',value)
            return new Promise(function(resolve,reject){
                fs.readFile('./other/2.txt',function(err,data){
                    resolve([value,data.toString()])
                })
            })
        }).then(function(value){
            console.log('value2',value)
        }).catch(function(err){
            console.log(err)
        })
       

