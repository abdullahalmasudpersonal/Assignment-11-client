import React from 'react';
import useInventories from '../../hooks/useInventories';

const ManageInventories = () => {
    const [inventories] = useInventories();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/inventories/${id}`;
            console.log('url',url);
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Inventories</h2>
            {
                inventories.map(inventory => <div key={inventory._id}>
                    <h5>{inventory.name} <button onClick={() => handleDelete(inventory._id)}>Delete</button>
                    </h5>
                </div>)
            }
        </div>
    );
};

export default ManageInventories;