const fs=require('fs');
fs.mkdir("mydir",(err)=>{
    if(err)
        console.error("Error creating",err);
    else
    console.log("directory created succesfully");
})
