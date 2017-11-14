
export default class SessionService {
    
        findAllSessions() {
           return $.get("http://localhost:3000/sessions")
        }
    }
    