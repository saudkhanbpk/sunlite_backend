import mongoose from "mongoose";

const moverSchema = new mongoose.Schema({
  jobType: { type: String, required: true },
  movingFrom: {
    postCode: { type: String, required: true },
    address: { type: String, required: true },
  },
  movingTo: {
    postCode: { type: String, required: true },
    address: { type: String, required: true },
  },
  requirements: {
    movingDate: { type: Date, required: true },
    vehicleRequired: { type: String, required: true },
    loadingHelp: { type: String, required: true },
  },
  additionalInfo: {
    itemList: { type: String, required: false },
    extraDetails: { type: String, required: false },
  },
  personalInfo: {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
  },
});

const Mover = mongoose.model("Mover", moverSchema);

export default Mover;
