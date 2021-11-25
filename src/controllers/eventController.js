const EventModel = require('../models/eventModel')
const EventDao = require('../dao/eventDao')

const {eventDB} = require('../infra/bd')

class EventController {
    constructor(dbConn) {
        this.dbConn = dbConn
    }

    show = (req, res) => {}

    index = (req, res) => {}

    save = (req, res) => {}

    remove = (req, res) => {}

    update = (req, res) => {}
}

module.exports = new ExperienceController(eventDB)