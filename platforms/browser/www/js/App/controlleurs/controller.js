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
        },
        renderErreur404: function () {
            $('#content').html('<h1>Page introuvable</h1>')
        },

        hashChanged : function (data) {
            if (data == undefined)
                this.renderListeVue();
            else{
                var regex = /^#([^\/]+)((\/[^\/]+)*)$/;
                var base = regex.exec(data)[1];
                var parametres = regex.exec(data)[2].split('/').splice(1);
                //alert("Hash changed : " + data + ' -> '+base + ' : ' + parametres[0]);

                if (base == 'projets'){
                    this.renderListeVue()
                }else if (base == 'projet'){

                }else{
                    this.renderErreur404()
                }
            }
        }
    };

    controller.initialize();
    return controller;
};
