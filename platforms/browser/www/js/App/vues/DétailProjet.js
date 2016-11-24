/**
 * Created by pascal on 16-11-14.
 */

var DetailProjetVue = function() {


    var vue = {
        afficher : function(projet) {
            $('#template-loader').load("./vues/detail-vue.html", function (data) {
                $('#content').html(
                    data
                        .replace(/\{\{PROJET_TITRE\}\}/g, projet.nomProjet)
                        .replace(/\{\{PROJET_DESCRIPTION\}\}/g, projet.descriptionProjet)
                        .replace(/\{\{PROJET_LIEN\}\}/g, projet.lienProjet)
                        .replace(/\{\{PROJET_IMAGE\}\}/g, projet.photoProjet)
                        .replace(/\{\{PROJET_ID\}\}/g, projet.id)
                )

                var detail = $('#detailLienProjet');
                if(!detail.attr('href'))
                    detail.addClass('disabled');
            });
        }
    };

    return vue
};