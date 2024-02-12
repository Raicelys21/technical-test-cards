const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
    {
        cardNumber: {
            type: Number,
            unique: true,
            required: [true, "The card field is required."],
        },
        titularName: {
            type: String,
            required: [true, "The name of titular field is required."],
        },
        dateExpireMonth: {
            type: String,
            required: [true, "The date field is required."],
        },
        dateExpireYear: {
            type: String,
            required: [true, "The date field is required."],
        },
        cvvNumber: {
            type: Number,
            required: [true, "The cvv field is required."],
        }
    }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;