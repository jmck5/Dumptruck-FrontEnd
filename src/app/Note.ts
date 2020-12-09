export class Note {
    id: number;
    NoteContent: string;
    NoteAuthor: string;
    timestamp: any;
    
    constructor(id: number, content: string, timestamp="blank"){
        this.id = id,
        this.NoteContent=content,
        this.timestamp = this.timestamp
        
    }
    
}