const mongoose = require('mongoose');

async function mongoConfig(){

    try{
        const result = await mongoose.connect(process.env.MONGO_URL)
        console.log('database connected', result.connection.host)
    }
    catch(err){
        console.log('mongo error: ' + err)
    }
}

module.exports = mongoConfig