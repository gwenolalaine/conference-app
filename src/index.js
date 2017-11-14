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
import Speaker from './speakers/details'
import Note from './notes/'
import template from './layout/layout.html'


// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()
const sessionService = new SessionService();

var router = () => {
    if (location.hash.startsWith('#speakers-list')) {
         let url = location.hash.slice(14,location.hash.length);

         if(url =="") {
          new SpeakerList(talkService).render()
        }else{
          url = url.slice(1,url.length);
          new Speaker(talkService,url).render();
        }


    } else if (location.hash.startsWith('#sessions-list')) {
        let url = location.hash.slice(14,location.hash.length);
        if(url == ""){
            new SessionList(sessionService).render()
        }else{
            url = url.slice(1, url.length);
            new Session(sessionService, url).render();
        }

    }else if(location.hash.startsWith('#notes')){
        let url = location.hash.slice(7,location.hash.length);
        new Note().render(url);
    }
}
var layout = new Layout();
layout.render();
 window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
       // layout.render();
    };
    router();
        
});
