
export default class TalkService {

    findAllSpeakers() {
       return $.get("http://localhost:3000/speakers")
    }

    findSpeakerById(id){
        return $.get("http://localhost:3000/speakers/" + id);
    }
}
