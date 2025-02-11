const fs=require('fs');
fs.rmdir("mydir",(e)=>{
    if(e){
        console.error("Error deleting",e);
        return;}
    else
    console.log("directory deleted succesfully");
})
