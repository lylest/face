async function remove (req, res) {
    try {
        const { model } = req.params
        switch(model){
            case "users":
                return removeUser(req, res)

            default: 
                return res.status(404).json({ message: 'No matching route found'})    
        }

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { remove }