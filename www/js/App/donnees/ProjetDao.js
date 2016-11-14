/**
 * Created by pascal on 16-11-13.
 */

var id = 0;
var ProjetsDao = function () {

    var Projet = function (nom, description, lien, photo, dateDebut, dateFin) {
        var projet = {
            self : this,
            id : id++,
            nomProjet:nom,
            descriptionProjet : description,
            lienProjet : lien,
            photoProjet : photo
        };

        return projet;
    };

    var dao = {
        listeProjets: [
            new Projet("Roguelike", "Petit roguelike axé sur la génération procédurale.", "https://github.com/pasterp/RogueLike", "./img/roguelike.png"),
            new Projet("Livre dont vous êtes le héros", "Interpréteur intéractif permettant de jouer à des histoires où le joueur a le choix lors de son aventure.", "https://github.com/pasterp/LivreDontVousEtesLeHeros/", "./img/livres.jpg")
        ],

        getProjet : function (id) {
            for(i in dao.listeProjets) {
                var projet = dao.listeProjets[i];
                if (projet.id = id)
                    return projet
            }
        }
    };


    return dao;
};