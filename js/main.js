$(document).ready(function() {
    $('.intOnly').keypress(function(e) {
        var a = [];
        var keyPressed = e.which; // This checks what key was pressed
        $('.keyPressedValue').text(keyPressed);
        // If the key is 0 - 9 then it is allowed to be inserted
        for (i = 48; i < 58; i++) {
            a.push(i);
        }

        // This is to allow the enter key being pressed
        if (keyPressed == 13) {
            a.push(keyPressed);
        }

        if (!(a.indexOf(keyPressed) >= 0)) {
            e.preventDefault();
        }
    });

    $('.detectCapslock').keypress(function(e) {
        var parent = $(this).parent();
        var character = e.keyCode ? e.keyCode : e.which;
        var sftKey = e.shiftKey ? e.shiftKey : ((character == 16) ? true : false);
        isCapsLock = (((character >= 65 && character <= 90) && !sftKey) || ((character >= 97 && character <= 122) && sftKey));
        if (isCapsLock == true) {
            parent.addClass('capslock');
            $('.capslockMessage').remove();
            parent.append('<div class="capslockMessage" style="color:red">Capslock is on</div>');
        } else {
            $('.capslockMessage').remove();
        }
    });

    $('.decimalsAndInts').keypress(function(e) {
        var a = [];
        var keyPressed = e.which; // This checks what key was pressed
        $('.keyPressedValue').text(keyPressed);
        // If the key is 0 - 9 then it is allowed to be inserted
        for (i = 48; i < 58; i++) {
            a.push(i);
        }

        // This is to allow the enter key being pressed
        if (keyPressed == 13 || keyPressed == 46) {
            a.push(keyPressed);
        }

        //if a decimal has been added, disable the "."-button
        /*
        if ($(this).val().indexOf('.') !== -1 && event.keyCode == 190) {
            event.preventDefault();
        }
        //*/

        if (!(a.indexOf(keyPressed) >= 0) || ($(this).val().indexOf('.') !== -1 && event.keyCode == 46)) {
            e.preventDefault();
        }
    });
});