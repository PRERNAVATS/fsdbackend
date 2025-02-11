const fs=require('fs');
fs.unlink("./mydir/data.txt",(err)=>{
    if(err)
        console.error(err);
    else
    console.log("data deleted succesfully");
})
