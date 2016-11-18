/**
 * Created by pascal on 16-11-17.
 */

var EditionProjetVue = function(callback) {
    var vue = {
        self : null,
        callback : callback,
        initialize : function () {
            self = this;
        },
        afficher : function(projet) {
            $('#template-loader').load("./vues/edition-vue.html", function (data) {
                var content = $('#content');
                content.html(data
                            .replace(/\{\{PROJET_TITRE\}\}/g, projet.nomProjet)
                            .replace(/\{\{PROJET_DESCRIPTION\}\}/g, projet.descriptionProjet)
                            .replace(/\{\{PROJET_LIEN\}\}/g, projet.lienProjet)
                            .replace(/\{\{PROJET_IMAGE\}\}/g, projet.photoProjet)
                            .replace(/\{\{PROJET_ID\}\}/g, projet.id));
                content.find('#form-edition').on('submit', self.editerProjet);
            });
        },
        editerProjet : function (e) {
            e.preventDefault();

            var id = $('#idProjet');
            var nom = $('#nomProjet');
            var description  = $('#descProjet');
            var lien = $('#lienProjet');
            var image = $('#imageProjet');

            self.callback(id.val(), new Projet(nom.val(), description.val(), lien.val(), image.val()));

            //Notifier la modification
            $('#alerts').append('<div class="alert alert-info alert-dismissible" role="alert">' +
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                'Élément modifié! <a href="#projet/'+id.val()+'" class="alert-link">Voir l\'élément.</a> ' +
                '</div>');
            window.setTimeout(function() { $(".alert-dismissible").alert('close'); }, 2000);

            window.location.hash = "#projets";
        }
    };

    vue.initialize();
    return vue;
};