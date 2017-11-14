import TalkService from '../../common/talk.service';

import SessionService from '../../common/session.service';

import template from './speaker.html'

export default class SpeakerDetail {

  constructor(talkService,url) {
    this.talkService = talkService
    this.id = url;
  }

  render() {
    const tabSpeakers = this.talkService.findAllSpeakers()
    const sess = new sessionService()
    let speakersHTML = []
    let title
    let image
    let link = []
    let description
    let presentation

    tabSpeakers.then((speakers) => {
      speakers.forEach(sp => {
        if(sp.id == this.id) {
          title = sp.lastname + " " + sp.firstname;
          image = '<img src="./src/images/'+sp.image+'"alt="img_presentateur" class="rounded mx-auto d-block" class="img-thumbnail"/>';
          sp.socials.forEach(soc => {
            if(soc.class=="google-plus") {
              link.push('<li class="list-inline-item"><a href="'+soc.link+'"><img src="./src/speakers-img/google-logo.png" width="40px" class="rounded mx-auto d-block"></a>');
            }
            else if(soc.class=="twitter"){
            link.push('<li class="list-inline-item"><a href="'+soc.link+'"><img src="./src/speakers-img/twitter.jpg" width="40px" class="rounded mx-auto d-block"></a>');
          }
            else if(soc.class=="github"){
            link.push('<li class="list-inline-item"><a href="'+soc.link+'"><img src="./src/speakers-img/github-mark.png" width="40px" height="40px" class="rounded mx-auto d-block"></a>');
          }
          })
          description = sp.about

          sess.forEach(se =>{
            sessions = se.speakers.filter(spik => {
              spik == sp.id;
            })
          })
        }
      })

      $('#main-view').html(template)
      $('#title').html(title)
      $('#img').html(image)
      $('#links').html(link.join("</li>"))
      $('#description').html(description)

    })
  }
}
