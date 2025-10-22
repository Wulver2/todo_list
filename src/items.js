//items object will be a class containing 

export class Items {
    constructor(title, description, dueDate, priority, notes, isDone) {
        this.title = title; // string
        this.description = description; // string
        this.dueDate = dueDate;
        this.priority = priority; // integer
        this.notes = notes; // string
        this.isDone = isDone // boolean value
    }
    get title() {
        return this.title;
    }
}