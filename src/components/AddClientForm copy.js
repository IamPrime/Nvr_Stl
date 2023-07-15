import React from 'react';
import { BsDatabaseFillAdd } from 'react-icons/bs';
import Success from './Success';
import Error from './Error';
import { useQueryClient, useMutation } from 'react-query';
import { getAllClients, postClient } from '@/lib/helper';

function AddClientForm({ clientData, setClientData }) {
    const queryClient = useQueryClient();

    const addMutation = useMutation(postClient, {
        onSuccess: () => {
            queryClient.prefetchQuery('newClient', getAllClients);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { fullName, email, phoneNum, budget, service } = clientData;

        const model = { fullName, email, phoneNum, budget, service };

        addMutation.mutate(model);
    };

    if (addMutation.isLoading) {
        return <div>Loading.....</div>;
    }

    if (addMutation.isError) {
        return <Error message={addMutation.error.message} />;
    }

    if (addMutation.isSuccess) {
        return <Success message={"Client Data Added Successfully"} />;
    }

    return (
        <div className='p-4'>
            <div className='w-full m-auto p-4 bg-gray-50 rounded-lg border border-amber-300'>
                <form onSubmit={handleSubmit}>
                    <div className='grid lg:grid-cols-2 items-center justify-center p-4 gap-2'>
                        <input
                            type='text'
                            name='fullName'
                            placeholder='Enter FullName'
                            onChange={setClientData}
                            required
                            className='w-full border px-5 py-3 focus:outline-none rounded-md'
                        />
                        <input
                            type='tel'
                            name='phoneNum'
                            placeholder='Enter Mobile/Home number'
                            onChange={setClientData}
                            required
                            className='w-full border px-5 py-3 focus:outline-none rounded-md'
                        />
                    </div>
                    <div className='flex items-center justify-center p-4 mb-2'>
                        <input
                            type='email'
                            name='email'
                            placeholder='Enter Email'
                            onChange={setClientData}
                            required
                            className='w-full border px-5 py-3 focus:outline-none rounded-md'
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <button
                                type='submit'
                                className='flex items-center justify-center gap-2 rounded-md bg-green-700 text-yellow-400 w-40 m-4 p-2'
                            >
                                <BsDatabaseFillAdd />
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddClientForm;
