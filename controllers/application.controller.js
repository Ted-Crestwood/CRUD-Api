const Application = require("../models/application.model");


const getApplications = async (req, res) => {
    try {
        const application = await Application.find({})
        res.status(200).json(application)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const createApplication = async (req, res) => {
    try {
        const application = await Application.create(req.body);
        console.log("application:",application)
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { createApplication, getApplications };
