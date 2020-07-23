export class Note {
    id: number;
    content: string;
    timestamp: any;
    
    constructor(id: number, content: string, timestamp="blank"){
        this.id = id,
        this.content=content,
        this.timestamp = this.timestamp
    }
    
}