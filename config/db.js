const mongoose=require('mongoose');
const dotenv=require('dotenv');

//dotenv package is used to read the .env file and assign it to process.env
dotenv.config();

const connectDB = async () => {
    try{

        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log('MongoDB Connected');

    }
    catch(err){
        console.error("Error connnecting to mongo DB",err);
        process.exit(1);
    }
}

module.exports=connectDB;