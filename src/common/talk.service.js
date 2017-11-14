
export default class TalkService {
    constructor() {
        this.speakers = [];
    }
    

    findAllSpeakers() {
        return new Promise((resolve, reject) => {
          if (this.speakers.length == 0) {
            $.get("https://raw.githubusercontent.com/2017-d13/conference-data/master/speakers.json").then(data => {
                    this.speakers = JSON.parse(data)
                     resolve(this.speakers )
                    })
                } else {
                    resolve(this.speakers)
                }
            })
        }

    findSpeakerById(id){
        return this.findAllSpeakers().then((speakers) => speakers.find(sp => sp.id == id));
    }
}
