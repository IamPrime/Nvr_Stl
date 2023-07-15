import connectDb from "@/data/dbConn"
import { postClient, getAllClients, deleteClient } from "@/data/controller"

export default async function handler(req, res) {
    connectDb().catch(() => res.status(405).json({ error: "Web Services Connection Failed!!" }))

    /** Type of Request */
    const { method } = req

    switch (method) {
        case 'POST':
            postClient(req, res)
            break;
        case 'GET':
            getAllClients(req, res)
            break;
        case 'DELETE':
            deleteClient(req, res)
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}