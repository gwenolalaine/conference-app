
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import Layout from './layout/index.js'
import TalkService from './common/talk.service';
import SessionService from './common/session.service';
import SpeakerList from './speakers/list'
import SessionList from './sessions/list'
import Session from './sessions/details'

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()
const sessionService = new SessionService();

var router = () => {
    if (location.hash == '#speakers-list') {
        new SpeakerList(talkService).render()
    } else if (location.hash.startsWith('#sessions-list')) {
        let url = location.hash.slice(14,location.hash.length);
        if(url == ""){
            new SessionList(sessionService).render()
        }else{
            url = url.slice(1, url.length);
            new Session(sessionService, url).render();
        }
       
    } else {
    // TODO afficher vue par défaut
    }
}
var layout = new Layout();
 window.addEventListener('load', () => {
    window.onhashchange = () => {
    router();
    layout.render();
    };
    router();
    layout.render();
});