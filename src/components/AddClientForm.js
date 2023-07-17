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
            window.location.href = '/ThankYou';
        },
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
        return <Success message={'Client Data Added Successfully'} />;

    }

    return (
        <div className='p-4'>
        
            <div className='flex items-center justify-center'>
                <h3>All The Fields Are Required</h3>
            </div>
            <div className='flex items-center justify-center mb-4 font-bold'>
                <h1 className='text-lg'>No Spam Ever | We Promise</h1>
            </div>

            <div className='w-full m-auto p-4'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className='grid lg:grid-cols-2 items-center justify-center p-4 gap-2'>
                            <input
                                type='text'
                                name='fullName'
                                placeholder='Enter FullName'
                                onChange={(e) => setClientData({ ...clientData, fullName: e.target.value })}
                                required
                                className='w-full border px-5 py-3 focus:outline-none rounded-md'
                            />
                            <input
                                type='tel'
                                name='phoneNum'
                                placeholder='Enter Mobile/Home number'
                                onChange={(e) => setClientData({ ...clientData, phoneNum: e.target.value })}
                                required
                                className='w-full border px-5 py-3 focus:outline-none rounded-md'
                            />
                        </div>
                        <div className='grid lg:grid-cols-2 items-center justify-center p-4 gap-2'>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter Email'
                                onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                                required
                                className='w-full border px-5 py-3 focus:outline-none rounded-md'
                            />
                            <div className='w-full flex items-center border px-3 py-3 gap-5 focus:outline-none rounded-md'>
                                {/** Budget */}
                                <select
                                    name='budget'
                                    id='budget'
                                    onChange={(e) => setClientData({ ...clientData, budget: e.target.value })}
                                >
                                    <option value="Less - $50,000">&lt; $50,000</option>
                                    <option value="$50,000 - $100,000">$50,000+</option>
                                    <option value="$100,000 - $150,000">$100,000+</option>
                                    <option value="$150,000 - Above">$150,000+</option>
                                </select>
                                {/** Service */}
                                <select
                                    name='service'
                                    id='service'
                                    onChange={(e) => setClientData({ ...clientData, service: e.target.value })}
                                >
                                    <option value='ios'>iOS App</option>
                                    <option value='android'>Android App</option>
                                    <option value='web'>Web App</option>
                                    <option value='custom'>Custom App</option>
                                </select>
                            </div>
                        </div>
                        {/** Submit Button */}
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
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddClientForm;