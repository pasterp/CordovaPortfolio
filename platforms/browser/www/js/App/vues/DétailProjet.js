/**
 * Created by pascal on 16-11-14.
 */

var DetailProjetVue = function(dao) {
    var ProjetsDao = dao;

    var vue = {
        afficher : function(id) {
            $('#template-loader').load("./views/detail-view.html", function (data) {
                var projet = dao.getProjet(id);
                $('#content').html(
                    data
                        .replace(/\{\{PROJET_TITRE\}\}/g, projet.nomProjet)
                        .replace(/\{\{PROJET_DESCRIPTION\}\}/g, projet.descriptionProjet)
                        .replace(/\{\{PROJET_LIEN\}\}/g, projet.lienProjet)
                        .replace(/\{\{PROJET_IMAGE\}\}/g, projet.photoProjet)
                        .replace(/\{\{PROJET_ID\}\}/g, projet.id)
                )
            });
        }
    };

    return vue
};