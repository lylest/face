const { Students } = require("../../model/Student")
const  Pusher = require("pusher")

const pusher = new Pusher({
    appId: "1570914",
    key: "d094734ac229bdc81de3",
    secret: "0669dcfadb2daaa8d4bd",
    cluster: "ap2",
    useTLS: true
  })
  
async function create (req, res) {
    try {
        const { model } = req.params
        switch(model){
            case "students":
                return addStudent(req, res)

            default: 
                return res.status(404).json({ message: 'No matching route found'})    
        }

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const sendEvent = async(newStudent) => {
    try {
        pusher.trigger("someUniqueId", "my-event", {
            message: "student added",
            data:newStudent
          })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const addStudent = async function (req, res) {
    try {
        const newStudent = await Students.create(req.body)
        if(newStudent) {
            sendEvent(newStudent)
            return res.status(200).json({ message: "New student inserted", data: newStudent})
        } else {
            return res.status(500).json({ message: "Failed to create students", data: newStudent })
        }
 
    } catch (err) {
        return res.status(200).json({ message: err.message })
    }
}

module.exports = { create }