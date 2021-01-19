const mongoose = require('mongoose');

const clientOptions = {
    useNewUrlParser   : true,
    dbName            : 'apinode'
};

exports.initClientDbConnection = async () => {
    try {
        await mongoose.connect('mongodb://34.90.240.173', clientOptions)
        console.log('Connected');
    } catch (error) {
        console.log(error);
        throw error;
    }
}