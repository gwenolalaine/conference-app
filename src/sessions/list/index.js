
import TalkService from '../../common/session.service';
import template from "./list.html"

export default class SessionList {

  constructor(sessionService) {
    this.sessionService = sessionService
  }

  render() {
    const sessionSpeakers = this.sessionService.findAllSessions()
    let sessionsHTML = []

        sessionSpeakers.then((sessions) => {
            sessions.forEach(se => {
            sessionsHTML.push("<li class='list-group-item'><a href='#sessions-list/" + se.id +"'>" + se.title + "</a></li>")
            })
            console.log(sessionsHTML)
            $('#main-view').html(template)
            $('#elements').html(sessionsHTML.join(''))
           

        })
    }
}

