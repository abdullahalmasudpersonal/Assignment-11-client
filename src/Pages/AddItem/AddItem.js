import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        const url = `https://tranquil-wave-46370.herokuapp.com/inventories`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
        <div className='w-50 mx-auto additem mt-5'>
            <h2>Please add item</h2>
            <form className='d-flex flex-column'
            onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='Name' type='text' {...register("name", { required: true})} />

                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />

                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />

                <input className='mb-2' placeholder='Seller' type='text' {...register("seller", { required: true})} />

                <input className='mb-2' placeholder='Photo URL' type='text' {...register("img", { required: true})} />

                <textarea className='mb-2' placeholder='Description' {...register("description")} />

                <input type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddItem;