import TalkService from '../../common/talk.service';

export default class SpeakerDetail {

  constructor(talkService,url) {
    this.talkService = talkService
    this.id = url;
  }

  render() {
    const tabSpeakers = this.talkService.findAllSpeakers()
    let speakersHTML = []

    tabSpeakers.then((speakers) => {
      speakers.forEach(sp => {
        if(sp.id == this.id) {
          sessionsHTML.push(sp.id + sp.firstname + sp.image )
        }
      })
    })
  }
}
