import template from "./notes.html"

export default class Note {

    render(id){
        $('#main-view').html(template);
        $('#buttonEnr').click(() => {
            localStorage[`note${id}`] = document.getElementById('idchamp').value
        })
        
        $('#idchamp').val(localStorage.getItem(`note${id}`));
    }
}