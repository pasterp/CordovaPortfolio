/**
 * Created by pascal on 16-11-13.
 */

var Controller = function () {
    var controller = {
        self: null,
        projetsDAO : null,
        vueListeProjets : null,

        initialize: function () {
            self = this;
            this.projetsDAO = new ProjetsDao();
            this.vueListeProjets = new ListeProjetsVue(this.projetsDAO);
        },

        renderListeVue: function () {
            this.vueListeProjets.afficher()
        }
    };

    controller.initialize();
    return controller;
};
