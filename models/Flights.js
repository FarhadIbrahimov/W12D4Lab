const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline:{
        type:String,
        require: true,
        enum:{
            values:['American','Southwest','United','Delta','Frontier','JetBlue'],
            message: "{VALUE} is not supported"
        }
    },
    flightNo:{
        type:Number,
        require:true
    },
    departs:{
        type:Date,
        require:true,
        min:'2023-12-30',
        max:'2025-12-30'
    }
})

const Flights = mongoose.model('flights', flightSchema);

module.exports = Flights;