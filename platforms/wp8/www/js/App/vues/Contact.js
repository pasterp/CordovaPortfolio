/**
 * Created by pascal on 16-11-24.
 */

var ContactVue = function() {


    var vue = {
        afficher : function() {
            $('#template-loader').load("./vues/contact-vue.html", function (data) {
                $('#content').html(
                    data
                );

                $('#valider').on('click', function () {
                    $('#content').append('<span class="loader"><span class="loader-inner"></span></span>');

                    setTimeout(function() { $('.loader').remove() }, 1500);
                });

                $('#reset').on('click', function () {
                    window.location.hash = '#projets';
                });

                /*cordova.plugins.email.open({
                    to: 'pascal.phelipot@gmail.com',
                    subjet: 'Contact from Portfolio'
                });*/
            });
        }
    };

    return vue
};