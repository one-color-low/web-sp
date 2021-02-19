

addEventListener("DOMContentLoaded", function(){

    function showMessage(message) {
        document.getElementById('message').textContent = message;
    }

    if (!window.WebSocket) {
        if (window.MozWebSocket) {
            window.WebSocket = window.MozWebSocket;
        } else {
            showMessage("Your browser doesn't support WebSockets")
        }
    }

    let scheme = window.location.protocol === "https:" ? 'wss://' : 'ws://';
    let webSocketUri = scheme
        + window.location.hostname
        + (location.port ? ':' + location.port : '')
        + $SCRIPT_ROOT + '/websocket';
    alert(webSocketUri);
    let ws = new WebSocket(webSocketUri);

    ws.onopen = function (evt) {
        showMessage('Connected.')
    }

    ws.onmessage = function (evt) {
        showMessage(evt.data)
    }

    ws.onclose = function (evt) {
        showMessage('Connection Closed.')
    }

    addEventListener('keydown',
        event => {
            let pressed_key = event.key;
            let message = "Pressed Key is " + pressed_key
            showMessage(message);
            ws.send(pressed_key);
        }
    );
});