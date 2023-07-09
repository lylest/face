const { Students } = require("../../model/Student")

async function read (req, res) {
    try {
        const { model } = req.params
        switch(model){
            case "students":
                return listStudents(req, res)

            default: 
                return res.status(404).json({ message: 'No matching route found'})    
        }

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const listStudents = async (req, res) =>{
    try {
          const students = await Students.find({})
          if(students.length >= 0) { return res.status(200).json(students)} else {
            return res.status(500).json({ message: 'Failed to list students '})
          }
    } catch(err){
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { read }