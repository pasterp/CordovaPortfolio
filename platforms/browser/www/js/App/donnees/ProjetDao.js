/**
 * Created by pascal on 16-11-13.
 */

var ProjetsDao = function () {

    var Projet = function (nom, description, lien, photos, dateDebut, dateFin) {
        var nomProjet = nom;
        var descriptionProjet = description;
        var lienProjets = lien;
        var photosProjet = photos;
    };

    var dao = {
        listeProjets: [
            new Projet("Roguelike", "Petit roguelike axé sur la génération procédurale."),
            new Projet("Livre dont vous êtes le héros", "Interpréteur intéractif permettant de jouer à des histoires où le joueur a le choix lors de son aventure.")
        ]
    };


    return dao;
};