import React from 'react';
import { Link } from 'react-router-dom';

export default function BaseComponent() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/counter">Counter App</Link>
                    </li>
                    <li>
                        <Link to="/login">Login App</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
