const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const playerInfoSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    discordID: Number,
    username: String,
    AP: Number,
    AAP: Number,
    DP: Number,
    bdoClass: String,
    gearSS: String
});

module.exports = mongoose.model("PlayerInfo", playerInfoSchema);