const { Schema, model } = require('mongoose');

const ItemSchema = Schema({
    title: { type: String, required: [true, 'Item title is required'] },
    description: { type: String, required: [true, 'Item description is required'] },
},
    { timestamps: true }
)

const Item = model('Item', ItemSchema);
module.exports = Item;