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
    function PlayAssistant(message) {

        if (message != "") {

            $("#oval").attr("hidden", true);
            $("#siri-wave").attr("hidden", false);
            eel.takeAllCommands(message);
            $("#chatbox").val("")
            $("#micbtn").attr('hidden', false);
            $("#send-btn").attr('hidden', true);

        }

    }
    function ShowHideButton(message) {
        if (message.length == 0) {
            $("#micbtn").attr('hidden', false);
            $("#send-btn").attr('hidden', true);
        }
        else {
            $("#micbtn").attr('hidden', true);
            $("#send-btn").attr('hidden', false);
        }
    }
    $("#chatbox").keyup(function () {

        let message = $("#chatbox").val();
        ShowHideButton(message)

    });

    $("#send-btn").click(function () {

        let message = $("#chatbox").val()
        PlayAssistant(message)

    });
    $("#chatbox").keypress(function (e) {
        key = e.which;
        if (key == 13) {
            let message = $("#chatbox").val()
            PlayAssistant(message)
        }
    });

});