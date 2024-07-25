import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../../data/dates.json';
import '../../styles/dates.scss';

// Déterminez si vous êtes en développement ou en production
const isDevelopment = process.env.NODE_ENV === 'development';

// Configurez le chemin d'image basé sur l'environnement
const imageUrl = isDevelopment
  ? ''  // Chemin relatif pour le développement
  : `${process.env.REACT_APP_IMAGE_PATH}`;  // Chemin complet pour la production

const DateComponent = () => {
  const [results, setResults] = useState([]);
  const [searchYear, setSearchYear] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Récupère le paramètre de recherche de l'URL
    const query = new URLSearchParams(location.search).get('search') || '';
    console.log("Query from URL:", query); // Ajouté pour le débogage
    setSearchYear(query); // Met à jour l'année recherchée

    // Filtre les données en fonction du paramètre de recherche
    const queryYear = parseInt(query, 10);
    console.log("Parsed queryYear:", queryYear); // Ajouté pour le débogage

    // Filtrer les résultats pour ne garder que ceux de l'année correspondant exactement à queryYear
    if (!isNaN(queryYear)) {
      const filteredResults = data.filter(event => event.annee === queryYear);
      console.log("Filtered results:", filteredResults); // Ajouté pour le débogage
      setResults(filteredResults);
    } else {
      setResults([]); // Si la query n'est pas un nombre, on vide les résultats
    }
  }, [location.search]);

  return (
    <div>
      {results.length > 0 ? (
        <div>
          {results.map((event, index) => (
            <div className="allResults" key={index}>
              <div className="yearList">
                <div>
                  <div className="eventLeft">
                    <div className="eventYearList">
                      <img src={`${imageUrl}/images/evenement.png`} alt="icône"/>
                      <div className='eventTitle'>
                        <h3>L'évènement</h3>
                        <p>{event.evenement}</p>
                      </div>
                    </div>
                    {event.personnage && (
                      <div className="personnage">
                        <div className="personnagePhoto">
                          <img src={`${imageUrl}/${event.personnage.photoPersonnage}`} alt={event.personnage.name} />
                        </div>
                        <div className='personnageTxt'>
                          <h3 className="personnageName">{event.personnage.name}</h3>
                          <div className="personnageDescription">
                            {event.personnage.description}
                          </div>
                          <div className="mediaLinks">
                            <p>Pour les plus curieux !
                              <br />Découvrez ce personnage d'un autre temps avec nos ressources d'aujourd'hui
                            </p>
                            {event.personnage.podcastUrl && (
                              <button onClick={() => window.open(event.personnage.podcastUrl, '_blank')}>
                                LE Podcast
                              </button>
                            )}
                            {event.personnage.youtubeUrl && (
                              <button onClick={() => window.open(event.personnage.youtubeUrl, '_blank')}>
                                LA Vidéo YouTube
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="eventRight">
                <h2>L'année {searchYear}</h2>
                <img className="banner" src={`${imageUrl}/${event.bannerImage}`} alt="Bannière thématique" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun résultat trouvé pour l'année {searchYear}.</p>
      )}
    </div>
  );
};

export default DateComponent;