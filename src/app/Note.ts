export class Note {
    id: number;
    noteContent: string;
    user: string;
    score: number;
    timeStamp: any;
    
    constructor(id: number, content: string, author: string){
        this.id = id,
        this.noteContent=content,
        //this.timestamp = this.timestamp,
        this.user = author,
        this.score = 0,
        this.timeStamp = null
    }
    
}