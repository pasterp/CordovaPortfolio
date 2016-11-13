/**
 * Created by pascal on 16-11-13.
 */

var ListeProjetsVue = function(dao) {
    var ListeVueDao = dao;

    var vue = {
        afficher : function() {
            $('#content').load("./views/liste-view.html", function (data) {
                var template = $('.template').remove();
                for(i in ListeVueDao.listeProjets){
                    var projet = ListeVueDao.listeProjets[i];
                    $('#content').append(template)
                }
            });
        }
    };

    return vue
};