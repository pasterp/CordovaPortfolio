/**
 * Created by pascal on 16-11-10.
 */


var controller = null;
var app = {
    // Constructeur Application
    initialize: function() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false); //Si c'est un mobile, cordova.js va envoyer l'event deviceRaady
        } else {
            //Sinon on le simule nous même
            this.onDeviceReady();
        }
    },

    onDeviceReady: function() {
        controller = new Controller();

        $(window).on('hashchange', function() {
            controller.hashChanged(window.location.hash);
        });


        setTimeout(function() { controller.hashChanged(); }, 500);
    }
};
app.initialize();

