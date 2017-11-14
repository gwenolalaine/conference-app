
import SessionService from '../../common/session.service';
import TalkService from '../../common/talk.service';
import template from "./session.html"

export default class Session {
    
      constructor(sessionService, url) {
        this.sessionService = sessionService
        this.id = url;
        this.talkService = new TalkService();
      }

      speakToString(speaker){
        return `<div class="presentateur"><img src="./src/images/${speaker.image}" class="img-thumbnail" width="50px"/> ${speaker.firstname} ${speaker.lastname}</li>`
        }

      render() {
        const sess = this.sessionService.findAllSessions().then(listesQse=>listesQse.filter(se=>se.id == this.id))
        let description;
        let titre;
        let presentateurStr;
        
        sess.then((sessions) => {
            sessions.forEach(se => {
                if(se.speakers != null){
                    let reqs = se.speakers.map(id => this.talkService.findSpeakerById(id))

                    Promise.all(reqs).then((tabResultats) => {
                        tabResultats.forEach(speaker => {
                            presentateurStr += this.speakToString(speaker)
                        })
                        $('#liste').html(presentateurStr)
                    })
                }

                description = se.desc;
                titre = se.title;
            })

                $('#main-view').html(template);
                $('#description').html(description)
                $('#titre').html(titre)
                
            })
        }
       
    }