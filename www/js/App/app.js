/**
 * Created by pascal on 16-11-10.
 */


var controller = null;
var app = {
    // Application Constructor
    initialize: function() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },

    onDeviceReady: function() {
        controller = new Controller();

        setTimeout(function() { controller.renderListeVue(); }, 1500);
    }
};
app.initialize();

