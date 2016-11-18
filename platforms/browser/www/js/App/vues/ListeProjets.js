/**
 * Created by pascal on 16-11-13.
 */

var ListeProjetsVue = function() {

    var vue = {
        afficher : function(liste) {
            $('#content').load("./vues/liste-vue.html", function (data) {

                $('#template-loader').load('./vues/templates/ProjetCard.html', function (template) {
                    $('#content').append('<div class="row">');
                    if (liste.length == 0){
                        $('#content').append('<p>Aucun projet pour le moment</p>');
                    }else{
                        for(i in liste) {
                            var projet = liste[i];

                            $('#content').append(
                                template
                                    .replace(/\{\{PROJET_TITRE\}\}/g, projet.nomProjet)
                                    .replace(/\{\{PROJET_DESCRIPTION\}\}/g, projet.descriptionProjet)
                                    .replace(/\{\{PROJET_LIEN\}\}/g, projet.lienProjet)
                                    .replace(/\{\{PROJET_IMAGE\}\}/g, projet.photoProjet)
                                    .replace(/\{\{PROJET_ID\}\}/g, projet.id)
                            );
                        }
                    }
                    $('#content').append('</div>');

                });
            });
        }
    };

    return vue
};