import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TopicList() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = async () => {
        try {
            const response = await axios.get('http://localhost:8081/topics');
            setTopics(response.data);
        } catch (error) {
            console.error('Error fetching topics:', error);
        }
    };

    return (
        <div>
            <h1>Topic List</h1>
            <ul>
                {topics.map((topic) => (
                    <li key={topic.id}>{topic.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TopicList;
