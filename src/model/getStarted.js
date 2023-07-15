import { Schema, models, model } from "mongoose";

const getStartedSchema = new Schema({
    fullName: String,
    email: String,
    phoneNum: Number,
    budget: String,
    service: String
})

const Onboarding = models.newClient || model('newClient', getStartedSchema)

export default Onboarding