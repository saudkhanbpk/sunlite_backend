import Mover from "../models/movers-model.js";

export const createMover = async (req, res) => {
  try {
    const {
      jobType,
      movingFrom,
      movingTo,
      requirements,
      additionalInfo,
      personalInfo,
    } = req.body;

    const newMover = new Mover({
      jobType,
      movingFrom,
      movingTo,
      requirements,
      additionalInfo,
      personalInfo,
    });

    const savedMover = await newMover.save();
    res
      .status(201)
      .json({ message: "MoversData saved successfully", data: savedMover });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMovers = async (req, res) => {
  try {
    const movers = await Mover.find();
    res.status(200).json(movers);
  } catch (error) {
    console.error("Error fetching movers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
