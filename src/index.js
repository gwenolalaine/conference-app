
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import Layout from './layout/index.js'
import TalkService from './common/talk.service';

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()

const tabSpeakers = talkService.findAllSpeakers()


tabSpeakers.then((speakers) => {
    speakers.forEach(function(element) {
        console.log(element.firstname)
    });
   
})

var layout = new Layout();
layout.render();


