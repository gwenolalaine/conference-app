
export default class TalkService {

    findAllSpeakers() {
       return $.get("http://localhost:3000/speakers")
    }
}
