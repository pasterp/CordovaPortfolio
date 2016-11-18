/**
 * Created by pascal on 16-11-17.
 */
var AjoutProjetVue = function(callback) {
    var self = null;
    var vue = {
        callback_ajout : callback,
        initialize : function () {
            self = this;
        },
        afficher : function() {
            $('#template-loader').load("./vues/ajout-vue.html", function (data) {
                var content = $('#content');
                content.html(data);
                content.find('#form-ajout').submit(self.ajouterProjet);
            });
        },
        ajouterProjet : function (e) {
            e.preventDefault();

            var nom = $('#nomProjet');
            var description  = $('#descProjet');
            var lien = $('#lienProjet');
            self.callback_ajout(new Projet(nom.val(), description.val(), lien.val(), './img/default.jpg'));

            //Notifier l'ajout
            nom.val('');
            description.val('');
            lien.val('');
            $('#alerts').append('<div class="alert alert-success alert-dismissible" role="alert">' +
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                'Élément ajouté! <a href="#projets" class="alert-link">Voir les projets.</a> ' +
                '</div>');
            window.setTimeout(function() { $(".alert-dismissible").alert('close'); }, 2000);
        }
    };

    vue.initialize();
    return vue;
};