export interface Quiz {
    _id?: string;
    id?: string;
    name: string;
    questions: QuizQuestion[];
}

export interface Player {
    id: string;
    name: string;
}

export interface QuizQuestion {
    id: string;
    name: string;
    time: number;
    choices: QuizChoice[];
    imagePath?: string;
}

export interface QuizChoice {
    id: string;
    name: string;
    correct: boolean;
}

export const COLORS = ["bg-sky-400", "bg-indigo-500", "bg-yellow-400", "bg-rose-500"];
