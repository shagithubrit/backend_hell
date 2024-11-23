import multer from 'multer';
import path from 'path';


// now store files in the disk or local storage

const storage= multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'public/images/');
    },
    filename:(req,file,cb)=>{
        const name=Date.now()+file.originalname+path.extname(file.originalname);
        cb(null,name);
    }
})