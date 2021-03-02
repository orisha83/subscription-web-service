const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/SubscriptionsDB')
//const uri = "mongodb+srv://orisha:xGD2MT5y5VBdUZG@cluster0.o6rke.mongodb.net/test/SubscriptionsDB"
const uri = "mongodb+srv://orisha:xGD2MT5y5VBdUZG@cluster0.o6rke.mongodb.net/SubscriptionsDB?retryWrites=true&w=majority"

try {
    mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("connected"));    
    }catch (error) { 
    console.log("could not connect");    
    }