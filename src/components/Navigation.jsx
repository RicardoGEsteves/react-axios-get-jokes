import React from 'react';
import { Link } from 'react-router-dom';
export default function Navigation() {
    return (
        <ul>
            <li>
                {' '}
                <Link to='/'>Landing</Link>{' '}
            </li>
            <li>
                <Link to='/jokes'> Jokes</Link>{' '}
            </li>
            <li>
                {' '}
                <Link to='/contacts'> Contacts </Link>{' '}
            </li>
        </ul>
    );
}
