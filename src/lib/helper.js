/** These are helper functions
 * Used to consume the apis
 */

/** BASE_URL for working with Frontend */
//const BASE_URL = 'http://localhost:3000/Admin'

/** BASE_URL for working with backend */
const BASE_URL = 'http://localhost:5000'

/** Get All Clients from the database */
export const getAllClients = async () => {
    const response = await fetch(`${BASE_URL}/api/admin`)

    const json = await response.json()

    return json
}

/** Get Client by Id */
export const getClientId = async (clientId) => {
    const response = await fetch(`${BASE_URL}/api/admin/${clientId}`)

    const json = await response.json()

    return json
}

/** Post Client */
export async function postClient(clientData) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(clientData)
        }

        const response = await fetch(`${BASE_URL}/api/admin`, Options)
        const json = await response.json()

        return json

    } catch (error) {
        return error
    }
}

/** Delete Client by Id */
export async function deleteClient(clientId) {
    try {
        const Options = {
            method: 'DELETE',
            headers: { 'Content-Type': "application/json" },
        }

        const response = await fetch(`${BASE_URL}/api/admin/${clientId}`, Options)
        const json = await response.json()

        return json

    } catch (error) {
        return (error.message)
    }
}