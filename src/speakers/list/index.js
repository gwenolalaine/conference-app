

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
            speakersHTML.push(sp.firstname)
            })

              $('#main-view').html(speakersHTML.join("<br>"))

    })



  }
}
