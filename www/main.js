$(document).ready(function () {
    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "bounceIn"
        },
        out: {
            effect: "bounceOut"
        }

    })
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        autostart: true
    });
    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",
            sync: true,
        },
        out: {
            effect: "fadeOutUp",
            sync: true,
        }

    })
    $("#micbtn").click(function () {
        eel.PlayAssistantSound()
        $("#oval").attr("hidden", true);
        $("#siri-wave").attr("hidden", false);
        eel.takeAllCommands()()

    });
    function doc_keyUp(e) {
        // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time

        if (e.key === 'j' && e.metaKey) {
            eel.PlayAssistantSound()
            $("#oval").attr("hidden", true);
            $("#siri-wave").attr("hidden", false);
            eel.takeAllCommands()()
        }
    }
    document.addEventListener('keyup', doc_keyUp, false);
});