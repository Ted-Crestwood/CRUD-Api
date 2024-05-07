const mongoose = require('mongoose');

const ApplicationSchema = mongoose.Schema({
    person: {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        birthdate: {
            type: Date,
            required: true,
        },
        idnumber: {
            type: Number,
            required: true,
        },
        idimg: { type: Buffer },
        homecounty: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        ethnicity: {
            type: String,
            required: true,
        },
        disability: {
            type: Boolean,
            required: true,
        }
    },
    contact: {
        email: {
            type: String,
            lowercase: true,
        },
        mobile: {
            type: Number,
        },
        address: {
            type: String
        }
    },
    academic: {
        level: { type: String, required: true },
        course: { type: String, required: true },
        institution: { type: String, required: true },
        graduation: { type: Date },
        pdf: { type: String, title: String },
    },
    employment: {
        organisation: { type: String, required: true },
        destination: { type: String, required: true },
        startdate: { type: Date },
        working: { type: Boolean },
        enddate: { type: Date },
        description: { type: String },
    },
    professional: {
        name: { type: String },
        institution: { type: String },
        year: { type: Number },
        pdf: { type: String, title: String },
    },
    shortcources: {
        course: { type: String },
        institution: { type: String },
        year: { type: Number },
        pdf: { type: String, title: String },
    },
    membership: {
        institution: { type: String },
        membership: { type: String },
        birthdate: { type: Date },
        pdf: { type: String, title: String },
    },
    referees: {
        name: String,
        destination: { type: String },
        employer: { type: String },
        email: { type: String },
        mobile: { type: Number },
    },
    coverletter: {
        pdf: { type: String, title: String },
    }
}, {
    timestamps: true,
});

const Application = mongoose.model("Application", ApplicationSchema);
module.exports = Application;
