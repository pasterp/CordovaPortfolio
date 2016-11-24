/**
 * Created by pascal on 16-11-13.
 */

var id = 0;
var Projet = function (nom, description, lien, photo, dateDebut, dateFin, idP) {
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

var ProjetsDao = function () {
    var dao = {
        listeProjets: [
            new Projet("Roguelike", "Petit roguelike axé sur la génération procédurale.", "https://github.com/pasterp/RogueLike", "./img/roguelike.png"),
            new Projet("Livre dont vous êtes le héros", "Interpréteur intéractif permettant de jouer à des histoires où le joueur a le choix lors de son aventure.", "https://github.com/pasterp/LivreDontVousEtesLeHeros/", "./img/livres.jpg")
        ],

        getProjet : function (id) {
            for(var i in dao.listeProjets) {
                var projet = dao.listeProjets[i];
                if (projet.id == id){
                    return projet
                }
            }
        },

        addProjet : function (projet) {
            this.listeProjets.push(projet);
        },

        delProjet : function (id) {
            for(var i in this.listeProjets) {
                var projet = this.listeProjets[i];
                if (projet.id == id) {
                    dao.listeProjets.splice(i, 1);
                    break;
                }
            }
        },

        editProjet: function (id, p) {
            var projet = this.getProjet(id);

            projet.nomProjet = p.nomProjet;
            projet.descriptionProjet = p.descriptionProjet;
            projet.lienProjet = p.lienProjet;
            projet.photoProjet = p.photoProjet;
        }
    };


    return dao;
};