import React from 'react';
import Auth from '../utils/auth';
import JoinGroup from '../pages/JoinGroup';
import MyGroup from '../pages/MyGroup';

export default function Home() {
    const loggedIn = Auth.loggedIn();

    return (
        <div className="home">
            {loggedIn && (
                <div>
                    <button onClick={JoinGroup}>Join a Group.</button>
                    <button onClick={MyGroup}>Go to My Group</button>
                </div>
            )}
        </div>
    )
};