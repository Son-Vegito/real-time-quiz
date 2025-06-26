
interface Problem {
    title: string,
    description: string,
    answer: number,
    options: {
        id: number,
        description: string
    }
}

export class Quiz {

    private roomId: string;
    private hasStarted: boolean;
    private problems: Problem[];

    constructor(roomId: string) {
        this.roomId = roomId;
        this.hasStarted = false;
        this.problems = [];
    }

    addProblem(problem: Problem) {
        this.problems.push(problem);
    }

    start() {
        this.hasStarted = true;
    }

    next(){
        
    }
}