import React from 'react';
import { useForm } from "react-hook-form";
import '../../../App.css'

const AddEvent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='App'>
            <h2>Add Event</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("example")} />

                <input {...register("exampleRequired", { required: true })} />
                

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent; <h2>Add Event</h2>