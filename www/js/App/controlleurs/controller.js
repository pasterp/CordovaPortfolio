/**
 * Created by pascal on 16-11-13.
 */

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var Controller = function () {
    var controller = {
        self: null,
        projetsDAO : null,
        vueListeProjets : null,
        vueDetailProjet : null,
        vueAjoutProjet : null,

        initialize: function () {
            self = this;
            this.projetsDAO = new ProjetsDao();
            this.vueListeProjets = new ListeProjetsVue();
            this.vueDetailProjet = new DetailProjetVue();
            this.vueAjoutProjet = new AjoutProjetVue($.proxy(this.ajouterProjet, this));
        },

        renderListeVue: function () {
            this.vueListeProjets.afficher(
                this.projetsDAO.listeProjets
            );
        },
        renderDetailProjet : function (idProjet) {
            this.vueDetailProjet.afficher(
                this.projetsDAO.getProjet(idProjet)
            );
        },
        renderErreur404: function () {
            $('#content').html('<h1 style="margin-top: 40%">Page introuvable</h1><p style="margin: auto"><a href="#projets">Retour à la liste des projets</a></p>');
        },
        renderAjout : function () {
            this.vueAjoutProjet.afficher();
        },
        ajouterProjet: function (projet) {
            this.projetsDAO.addProjet(projet);
        },

        hashChanged : function (data) {


            if (data == undefined){
                this.renderListeVue();
            }else{
                $('#navbar-1').collapse('hide'); // on referme le menu
                $('.menu').removeClass('active');



                var regex = /^#([^\/]+)((\/[^\/]+)*)$/;
                var base = regex.exec(data)[1];
                var parametres = regex.exec(data)[2].split('/').splice(1);
                //alert("Hash changed : " + data + ' -> '+base + ' : ' + parametres[0]);

                $('#menu'+base.capitalizeFirstLetter()).addClass('active');
                if (base == 'projets'){
                    this.renderListeVue()
                }else if (base == 'projet'){
                    var id = parametres[0];
                    var action = parametres[1];
                    if (action == undefined)
                        this.renderDetailProjet(id);
                    else if (action == "delete"){
                        if(confirm("Confirmer la suppression de "+this.projetsDAO.getProjet(id).nomProjet+" ?")){
                            this.projetsDAO.delProjet(id);
                            window.location.hash = "#projets";
                        }else{
                            window.location.hash = "#projet/"+id;
                        }
                    }else if (action == "edit"){

                    }else
                        this.renderErreur404();
                }else if (base == 'ajout') {
                    this.renderAjout()
                }else{
                    this.renderErreur404()
                }
            }
        }
    };

    controller.initialize();
    return controller;
};
