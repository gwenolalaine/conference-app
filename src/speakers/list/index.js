

import TalkService from '../../common/talk.service';


export default class SpeakerList {

  constructor(talkService) {
    this.talkService = talkService
  }

  render() {
    const tabSpeakers = this.talkService.findAllSpeakers()
    let speakersHTML = []

    tabSpeakers.then((speakers) => {
            speakers.forEach(sp => {
            speakersHTML.push("<li class='list-group-item'><a href='#speakers-list/" + sp.id +"'>" + sp.firstname + "</a></li>")
            })

              $('#main-view').html(speakersHTML.join("<br>"))

    })



  }
}
