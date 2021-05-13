export class Task {

    public id: number

    public taskText: string

    public isCompleted: boolean

    public Date: string

    constructor(id: number, taskText: string, Date: string, isCompleted: boolean) {

        this.id = id

        this.taskText = taskText

        this.isCompleted = isCompleted

        this.Date = Date

    }

}