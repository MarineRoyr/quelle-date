const crypto = require('crypto');
const fs = require('fs');

// Génère une chaîne aléatoire de 4 caractères
function generateId() {
    return crypto.randomBytes(2).toString('hex'); 
}


fs.readFile('dates.json', 'utf8', (err, data) => {
    if (err) throw err;

    let events = JSON.parse(data);


    events = events.map(event => ({
        ...event,
        id: generateId()
    }));

  
    fs.writeFile('data_with_ids.json', JSON.stringify(events, null, 2), 'utf8', err => {
        if (err) throw err;
        console.log('Les identifiants ont été ajoutés avec succès.');
    });
});