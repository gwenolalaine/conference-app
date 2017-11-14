import TalkService from '../../common/talk.service';

import template from './speaker.html'

export default class SpeakerDetail {

  constructor(talkService,url) {
    this.talkService = talkService
    this.id = url;
  }

  render() {
    const tabSpeakers = this.talkService.findAllSpeakers()
    let speakersHTML = []
    let title
    let image
    let link = []
    let presentation

    tabSpeakers.then((speakers) => {
      speakers.forEach(sp => {
        if(sp.id == this.id) {
          title = sp.lastname + " " + sp.firstname;
          image = '<img src="./src/images/'+sp.image+'"alt="img_presentateur"/>';
          sp.socials.forEach(soc => {
            link.push('<a href="'+soc.link+'">'+soc.class+'</a>');
          })
          presentation = sp.about
        }
      })

      $('#main-view').html(template)
      $('#title').html(title)
      $('#img').html(image)
      $('#links').html(link.join("<br>"))
      $('#presentations').html(presentation)

    })
  }
}
