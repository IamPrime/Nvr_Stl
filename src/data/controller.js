/** Controller */
import Onboarding from "@/model/getStarted"

//get:http://localhost:3000/api/admin
export async function getAllClients(req, res) {
    try {
        const newClient = await Onboarding.find({})

        if (!newClient) return res.status(404).json({ error: "Data Not Found!" })
        res.status(200).json(newClient)

    } catch (error) {
        return res.status(404).json({ error: "Error | While Fetching New Client Data" })
    }
}

//get:http://localhost:3000/api/admin?clientId=[_id]
export async function getClient(req, res) {
    try {
        const {clientId} = req.query

        if(clientId) {
            const client = await Onboarding.findById(clientId)
            res.status(200).json(client)
        } else {
            return res.status(404).json({ error: "Client Not Found || ID Not Found" })
        }
    } catch (error) {
        return res.status(500).json({ error: `Error | While Fetching Client With ID {$clientId}` })
    }
}

//post: http://localhost:3000/api/admin
export async function postClient(req, res) {
    try {
        const clientData = req.body;

        if (!clientData) return res.status(404).json({ error: "No Client Data Provided!" })

        const createClient = await Onboarding.create(clientData)
        return res.status(200).json(createClient)

    } catch (error) {
        return res.status(404).json({ error: "Error | While Posting Client Data" })
    }
}

//delete: http://localhost:3000/api/admin?clientId=[_id]
export async function deleteClient(req, res) {
    try {
        const {clientId} = req.query

        if(clientId) {
            const deleteClient = await Onboarding.findByIdAndDelete(clientId)
            return res.status(200).json({message: `Deleted Client with ID ${clientId}`})
        } else {
            return res.status(404).json({ error: "Client Not Deleted || ID Not Found!" });
        }

    } catch (error) {
        return res.status(500).json({ error: `Error | While Deleting Client with ID ${clientId}` })
    }
}
