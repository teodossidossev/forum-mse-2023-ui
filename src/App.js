import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopicList from './components/TopicList';
import CreateTopic from './components/CreateTopic';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Topic List</Link>
                        </li>
                        <li>
                            <Link to="/create">Create Topic</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<TopicList />} />
                    <Route path="/create" element={<CreateTopic />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
