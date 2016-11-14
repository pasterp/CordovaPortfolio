/**
 * Created by pascal on 16-11-14.
 */

var DetailProjetVue = function(dao) {
    var ProjetsDao = dao;

    var vue = {
        afficher : function(id) {
            $('#content').load("./views/detail-view.html", function (data) {

            });
        }
    };

    return vue
};