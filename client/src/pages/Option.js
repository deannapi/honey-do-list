import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

export default function Option() {
    const loggedIn = Auth.loggedIn();

    return (
        <div className="home">
            {loggedIn && (
                <div>
                    <Link to="/joingroup">Join a Group</Link>
                    <Link to="/mygroup">Go to My Group</Link>
                </div>
            )}
        </div>
    )
};