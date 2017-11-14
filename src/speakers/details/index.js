import TalkService from '../../common/talk.service';

import SessionService from '../../common/session.service';

import template from './speaker.html'

export default class SpeakerDetail {

  constructor(talkService,url) {
    this.talkService = talkService
    this.id = url;
    this.sess = new SessionService().findAllSessions()
  }

  render() {
    const tabSpeakers = this.talkService.findAllSpeakers()
    let speakersHTML = []
    let title
    let image
    let link = []
    let description
    let presentation
    let sessions = []

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
          else if(soc.class=="link") {
            link.push('<li class="list-inline-item"><a href="'+soc.link+'"><img src="./src/speakers-img/www.jpg" width="40px" height="40px" class="rounded mx-auto d-block"></a>');

          }
          })
          description = sp.about

          this.sess.then(sessio => {
            sessio.forEach(se =>{
              if(se.speakers) {
              //  console.log(se.speakers);
                se.speakers.filter(spik => {
                  return spik == sp.id;
                }).forEach(sp => {
                  sessions.push(se)
                })


              }
          })

          $('#main-view').html(template)
          $('#title').html(title)
          $('#img').html(image)
          $('#links').html(link.join("</li>"))
          $('#description').html(description)
          $('#presentations').html(sessions.map(s => s.title).join('<br>'))
        })
      }
      })


    })
  }
}
