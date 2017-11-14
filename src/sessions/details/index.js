
import TalkService from '../../common/session.service';

export default class Session {
    
      constructor(sessionService, url) {
        this.sessionService = sessionService
        this.id = url;
      }
    
      render() {
        const sessionSpeakers = this.sessionService.findAllSessions()
        let sessionsHTML = []
    
            sessionSpeakers.then((sessions) => {
                sessions.forEach(se => {
                    if(se.id == this.id){
                        sessionsHTML.push(se.id + se.title)
                    }
                })
    
                $('#main-view').html(sessionsHTML.join("<br>"))
    
            })
        }
    }