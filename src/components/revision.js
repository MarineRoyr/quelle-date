import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Select from 'react-select';
import eventsData from '../data/dates.json'
import '../styles/revision.scss'


const imgpdf = 'data:image/webp;base64,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'


const years = Array.from(new Set(eventsData.map(event => event.annee))).sort((a, b) => a - b);
const yearOptions = years.map(year => ({ value: year, label: year.toString() }));

const PdfGenerator = () => {
    const [startYear, setStartYear] = useState(null);
    const [endYear, setEndYear] = useState(null);
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleGeneratePDF = () => {
        if (startYear === null || endYear === null) {
            alert('Veuillez sélectionner une plage d\'années.');
            return;
        }

        const filteredEvents = eventsData.filter(event =>
            event.annee >= startYear && event.annee <= endYear
        );

        if (filteredEvents.length === 0) {
            alert('Aucun événement trouvé pour la plage d\'années sélectionnée.');
            return;
        }

        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;

        // Définir la couleur du texte
        const textColor = [12, 26, 43];
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);

        // En-tête
        doc.setFontSize(20);
        doc.setFont('courier', 'normal');
        doc.text('Liste des Événements', pageWidth / 2, 20, { align: 'center' });
        doc.setDrawColor(textColor[0], textColor[1], textColor[2]);;
        doc.setLineWidth(0.5); // Épaisseur de la ligne
        doc.line(10, 25, pageWidth - 10, 25); // Coordonnées de la ligne


        const imageX = 90; // Position X de l'image
        const imageY = 30; // Position Y de l'image
        const imageWidth = 25; // Largeur de l'image
        const imageHeight = 25; // Hauteur de l'image

        doc.addImage(imgpdf, 'WEBP', imageX, imageY, imageWidth, imageHeight);

        let y = imageY + imageHeight + 10; // Ajuster Y pour le texte après l'image

        // Ajouter une image


        filteredEvents.forEach((event, index) => {
            if (y > pageHeight - 40) { // Nouvelle page si nécessaire
                doc.addPage();
                y = 20;
                doc.text('Liste des Événements', pageWidth / 2, 20, { align: 'center' });
            }

            // Dessiner une puce
            doc.setFontSize(14);
            doc.setFont('helvetica', 'normal');
            doc.text('•', 14, y); // La puce

            // Dessiner le texte de l'événement
            doc.text(`${event.annee} : ${event.evenement}`, 20, y); // Décalage pour la puce
            y += 10;
        });

        // Pied de page
        doc.setFontSize(10);
        doc.text('Généré avec Quelle-Date.com', pageWidth / 2, pageHeight - 10, { align: 'center' });

        doc.save('fiche_revision.pdf');
    };

    return (
        <div className="revisionContainer">
            <div
                className="collapseHeader"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? 'Créer votre fiche de révision' : 'Replier'}
            </div>
            <div className={`collapseContent ${!isCollapsed ? 'expanded' : ''}`}>
                <h2>Ma fiche de révision</h2>
                <div>
                    <label>De l'année ?</label>
                    <Select
                        options={yearOptions}
                        onChange={option => setStartYear(option ? option.value : null)}
                        placeholder="Sélectionnez l'année de début"
                    />
                </div>
                <div>
                    <label>A l'année ?</label>
                    <Select
                        options={yearOptions}
                        onChange={option => setEndYear(option ? option.value : null)}
                        placeholder="Sélectionnez l'année de fin"
                    />
                </div>
                <button className="button" onClick={handleGeneratePDF}>Générer le PDF</button>
            </div>
        </div>
    );
};

export default PdfGenerator;