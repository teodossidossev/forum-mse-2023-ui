import React, { useState } from 'react';
import axios from 'axios';

function CreateTopic() {
    const [title, setTitle] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleCreateTopic = async () => {
        try {
            const response = await axios.post('http://localhost:8081/topics', {
                title: title,
            });
            console.log('Topic created:', response.data);
            // Optionally, you can perform additional actions upon successful topic creation
        } catch (error) {
            console.error('Error creating topic:', error);
        }
    };

    return (
        <div>
            <h1>Create Topic</h1>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={handleTitleChange} />
            </div>
            <button onClick={handleCreateTopic}>Create Topic</button>
        </div>
    );
}

export default CreateTopic;
