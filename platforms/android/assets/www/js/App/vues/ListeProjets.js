/**
 * Created by pascal on 16-11-13.
 */

var ListeProjetsVue = function(dao) {
    var ListeVueDao = dao;

    var vue = {
        afficher : function() {
            $('#content').load("./views/liste-view.html", function (data) {

                $('#template-loader').load('./views/templates/ProjetCard.html', function (template) {
                    $('#content').append('<div class="row">');
                    for(i in ListeVueDao.listeProjets) {
                        var projet = ListeVueDao.listeProjets[i];

                        $('#content').append(
                            template
                                .replace(/\{\{PROJET_TITRE\}\}/g, projet.nomProjet)
                                .replace(/\{\{PROJET_DESCRIPTION\}\}/g, projet.descriptionProjet)
                                .replace(/\{\{PROJET_LIEN\}\}/g, projet.lienProjet)
                                .replace(/\{\{PROJET_IMAGE\}\}/g, projet.photoProjet)
                                .replace(/\{\{PROJET_ID\}\}/g, projet.id)
                        )
                    }
                    $('#content').append('</div>');

                });
            });
        }
    };

    return vue
};