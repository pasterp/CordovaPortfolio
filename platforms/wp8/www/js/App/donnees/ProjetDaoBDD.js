/**
 * Created by pascal on 16-11-13.
 */


var Projet = function (nom, description, lien, photo, dateDebut, dateFin, idP) {
    var projet = {
        self : this,
        id : idP,
        nomProjet:nom,
        descriptionProjet : description,
        lienProjet : lien,
        photoProjet : photo
    };

    return projet;
};

var ProjetsDao = function () {
    var dao = {
        self: null,
        baseDonnee: null,
        initialisation : function () {
            self = this;
            this.baseDonnee = window.openDatabase("portfolio.bdd", "1.0", "Base de données des projets du portfolio", 2 * 1024 * 1024);

            this.baseDonnee.transaction(function (tx) {
                tx.executeSql('DROP TABLE IF EXISTS PROJETS');
                tx.executeSql('CREATE TABLE IF NOT EXISTS PROJETS (id integer primary key autoincrement, nom, description, lien, image, dateDebut, dateFin)');
            });

            this.addProjet(
                new Projet("Roguelike", "Petit roguelike axé sur la génération procédurale.", "https://github.com/pasterp/RogueLike", "./img/roguelike.png")
            );
            this.addProjet(
                new Projet("Livre dont vous êtes le héros", "Interpréteur intéractif permettant de jouer à des histoires où le joueur a le choix lors de son aventure.", "https://github.com/pasterp/LivreDontVousEtesLeHeros/", "./img/livres.jpg")
            );
        },
        getProjets : function () {
            var liste = [];
            this.baseDonnee.transaction(function (tx) {
                tx.executeSql('SELECT * FROM PROJETS', [], function (tx, results) {
                    var len = results.rows.length, i;
                    for(i = 0; i < len; i++){
                        var ligne = results.rows[i];
                        var p = new Projet(ligne.nom, ligne.description, ligne.lien, ligne.image, ligne.dateDebut, ligne.dateFin, ligne.id);
                        liste.push(
                            p
                        );
                    }
                }, null);
            });

            return liste;
        },

        getProjet : function (id) {
            var select = 'SELECT * FROM PROJETS WHERE id="'+id+'"';
            var projet = $.Deferred();


            this.baseDonnee.transaction(function (tx) {
                tx.executeSql(select, [], function (tx, results) {
                    var ligne = results.rows[0];

                    projet.resolve(ligne);
                }, function () {
                   projet.reject("erreur sql");
                });
            });

            var p = projet.promise();
            alert(p.id);
            return new Projet(p.nom, p.description, p.lien, p.image, p.dateDebut, p.dateFin, p.id);
        },

        addProjet : function (projet) {

            this.baseDonnee.transaction(function (tx) {
                tx.executeSql('INSERT INTO PROJETS (nom, description, lien, image) VALUES ("' +
                    projet.nomProjet + '", "' +
                    projet.descriptionProjet + '", "' +
                    projet.lienProjet + '", "' +
                    projet.photoProjet + '")');
            });
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

    dao.initialisation();
    return dao;
};