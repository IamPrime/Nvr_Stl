import React, { useReducer } from 'react'
import AddClientForm from './AddClientForm'
import UpdateQuizForm from './UpdateQuizForm'
import { useSelector } from 'react-redux'

/** This is used to destructure the ClientData 
 * The state hook is used to initialize the ClientData
*/
const ClientReducer = (state) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

function ClientForm() {

    const [clientData, setClientData] = useReducer(ClientReducer, {})
    const formId = useSelector((state) => state.app.client.formId)

    /** To manually toggle the form */
    //const flag = false

    return (
        <>
            <div>
                {formId ? UpdateQuizForm({ formId, clientData, setClientData }) : AddClientForm({ clientData, setClientData })}
            </div>
        </>
    )
}

export default ClientForm