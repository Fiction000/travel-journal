import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header className="travel-journal-header">
            <FontAwesomeIcon icon={faEarthAmerica} size="xl" />
            <h3>my travel journal.</h3>
        </header>
    )
}
