import TalkService from '../../common/talk.service';

export default class SpeakerDetail {

  constructor(talkService) {
    this.talkService = talkService
  }

  render() {
    const tabSpeakers = this.talkService.findAllSpeakers()
    let speakersHTML = []

    tabSpeakers.then((speakers) => {
      speakers.forEach(sp)
    })
  }
}
