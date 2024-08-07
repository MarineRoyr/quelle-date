const fs = require('fs');
const path = require('path');

// Charger les données depuis un fichier JSON
const inputFilePath = path.join(__dirname, 'dates.json'); // Chemin vers votre fichier JSON d'entrée
const outputFilePath = path.join(__dirname, 'dates-ok.json'); // Chemin vers le fichier JSON de sortie

// Lire le fichier JSON
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur de lecture du fichier JSON:', err);
        return;
    }

    // Parse les données JSON
    let events;
    try {
        events = JSON.parse(data);
    } catch (e) {
        console.error('Erreur de parsing JSON:', e);
        return;
    }

    // Ajouter les ID à chaque événement
    const addIdsToEvents = (events) => {
        return events.map(event => ({
            ...event,
            id: `${event.annee}a`
        }));
    };

    const updatedEvents = addIdsToEvents(events);

    // Écrire les données modifiées dans un nouveau fichier JSON
    fs.writeFile(outputFilePath, JSON.stringify(updatedEvents, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Erreur d\'écriture du fichier JSON:', err);
            return;
        }
        console.log('Fichier JSON mis à jour avec succès:', outputFilePath);
    });
});