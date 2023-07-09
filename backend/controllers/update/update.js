async function update (req, res) {
    try {
        const { model } = req.params
        switch(model){
            case "users":
                return updateUser(req, res)

            default: 
                return res.status(404).json({ message: 'No matching route found'})    
        }

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { update }