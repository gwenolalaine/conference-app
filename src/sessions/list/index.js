
import TalkService from '../../common/session.service';

export default class SessionList {

  constructor(sessionService) {
    this.sessionService = sessionService
  }

  render() {
    const sessionSpeakers = this.sessionService.findAllSessions()
    let sessionsHTML = []

        sessionSpeakers.then((sessions) => {
            sessions.forEach(se => {
            sessionsHTML.push("<a href='#sessions/" + se.id +"'>" + se.title + "</a>")
            })

            $('#main-view').html(sessionsHTML.join("<br>"))

        })
    }
}

