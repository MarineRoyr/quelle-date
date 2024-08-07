import React, { useState } from 'react';
import '../styles/searchbar.scss'
import { useNavigate } from 'react-router-dom';
import Revision from './revision'



const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [showTooltip, setShowTooltip] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^-?\d{0,4}$/.test(value)) { // Vérifie que l'entrée est un nombre avec 1 à 4 chiffres
            setQuery(value);
            setShowTooltip(false); // Cache l'infobulle si la valeur est valide
        } else {
            setShowTooltip(true); // Affiche l'infobulle si la valeur est invalide
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (query.length >= 1 && query.length <= 5) {
            // Redirige vers la page de résultats avec le paramètre de recherche
            navigate(`/results?search=${encodeURIComponent(query)}`);
            window.scrollBy({ top: 500, behavior: 'smooth' })
        } else {
            setShowTooltip(true); // Affiche l'infobulle si la longueur de la valeur est invalide lors de la soumission
        }
    };
    return (
        <div>
            <div className='SearchBarContainer'>
                <div className='searchBarForm'>
                    <p>Cherchez votre date et découvrez l'Histoire !</p>
                    <form className="searchBar" onSubmit={handleFormSubmit}>
                        <input
                            type="number"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Quelle année ?"
                            className="searchInput"
                        />
                        <button type="submit" className="searchButton">Rechercher</button>
                    </form>
                </div>
                <p>De -100 av JC à aujourd'hui, entrez l'année de votre choix <br /> & <br />Retrouvez les grands évènements historiques !</p>
            </div>
            <Revision />
        </div>
    );
};

export default SearchBar;