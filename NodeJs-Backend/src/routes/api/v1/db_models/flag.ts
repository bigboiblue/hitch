import mongoose from "mongoose";

export const flagsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    groupName: { type: String, required: true },
    type: { type: String, required: true, default: "toggle" },
    isEnabled: { type: Boolean, required: true, default: false },
    dateCreated: { type: Date, required: true, default: Date.now },
    isArchived: { type: Boolean, required: true, default: false },
    dateArchived: { type: Date, required: false },
}, { versionKey: false });

export const flags = mongoose.model("flag", flagsSchema);
