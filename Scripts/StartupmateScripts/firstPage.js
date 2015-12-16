//define([], function () {
//    var showRow = function () {
//        debugger;
//        //$('#professionLst1').multiselect();
//        //$('#professionLst2').multiselect();
//        //$('#professionLst3').multiselect();
//        //$(document).ready(function () {
//        //    $('#professionLst1').multiselect();
//        //    $('#professionLst2').multiselect();
//        //    $('#professionLst3').multiselect();
//        //});
//    }
//    var directToFacebook = function () {
//        debugger;
//        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('http://bootsnipp.com/snippets/featured/fancy-navbar-login-sign-in-form') + '&amp;t=' + encodeURIComponent('Fancy navbar login / sign in form #Bootstrap #snippet'), 'facebook-share-dialog', 'width=626,height=436,top=' + ((screen.height - 436) / 2) + ',left=' + ((screen.width - 626) / 2));
//    }
//    var directToTwitter = function () {
//        debugger;
//        window.open('https://twitter.com/share?url=' + encodeURIComponent('http://bootsnipp.com/snippets/featured/fancy-navbar-login-sign-in-form') + '&amp;text=' + encodeURIComponent('I shared a cool #snippet on @bootsnipp  :') + '&amp;count=none/', 'twitter-share-dialog', 'width=626,height=436,top=' + ((screen.height - 436) / 2) + ',left=' + ((screen.width - 626) / 2));
//    }
    
//    return {
//        showRow: showRow,
//        directToFacebook: directToFacebook,
//        directToTwitter: directToTwitter,
//    }
//});
    var firstPagedirectToFacebook = function () {
        debugger;
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('http://bootsnipp.com/snippets/featured/fancy-navbar-login-sign-in-form') + '&amp;t=' + encodeURIComponent('Fancy navbar login / sign in form #Bootstrap #snippet'), 'facebook-share-dialog', 'width=626,height=436,top=' + ((screen.height - 436) / 2) + ',left=' + ((screen.width - 626) / 2));
    }
    var firstPagedirectToTwitter = function () {
        debugger;
        window.open('https://twitter.com/share?url=' + encodeURIComponent('http://bootsnipp.com/snippets/featured/fancy-navbar-login-sign-in-form') + '&amp;text=' + encodeURIComponent('I shared a cool #snippet on @bootsnipp  :') + '&amp;count=none/', 'twitter-share-dialog', 'width=626,height=436,top=' + ((screen.height - 436) / 2) + ',left=' + ((screen.width - 626) / 2));
    }

    var firstPageLogin=function ()
    {
        debugger;
        $('#overlayId').css('display', 'block');
        $('#signUpId').css('display', 'block');
       }
    var firstPageSignUp = function () {
        debugger;
        $('#signUpId').css('display', 'none');
        $('#signUpId1').css('display', 'block');
       
    }