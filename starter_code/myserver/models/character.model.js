const mongoose = require('mongoose');


const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.createConnection('mongodb://localhost/lab-character'));

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    },
    occupation: {
        type: String,
        required: [true, 'Occupation is required']
    },
    debt: {
        type: Boolean,
        required: [true, 'Debt is required']
    },
    weapon: {
        type: String,
        required: [true, 'Weapon is required']
    }
}, { timestamps: true });

characterSchema.plugin(autoIncrement.plugin, 'Book');

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;