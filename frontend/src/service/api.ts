import type { Quiz } from "../model/quiz";

export class ApiService {
    async getQuizById(id: string): Promise<Quiz | null> {
        let response = await fetch(`http://localhost:3000/api/quizzes/${id}`);
        if (!response.ok) {
            return null;
        }

        let json = await response.json();
        return json;
    }

    async getQuizzes(): Promise<Quiz[]> {
        let response = await fetch('http://localhost:3000/api/quizzes');
        if (!response.ok) {
            alert('Failed to fetch quizzes');
            return [];
        }

        let json = await response.json();
        return json;
    }

    async createQuiz(quiz: Quiz): Promise<Quiz | null> {
        let response = await fetch('http://localhost:3000/api/quizzes', {
            method: "POST",
            body: JSON.stringify(quiz),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            alert("Failed to add quiz!");
            return null;
        }
        let json = await response.json();
        return json;
    }

    async saveQuiz(quizId: string, quiz: Quiz) {
        let response = await fetch(`http://localhost:3000/api/quizzes/${quizId}`, {
            method: "PUT",
            body: JSON.stringify(quiz),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            alert("Failed to save quiz!");
            return;
        }
    }

    async deleteQuiz(quizId: string): Promise<boolean>{
        let response = await fetch(`http://localhost:3000/api/quizzes/${quizId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            alert("Failed to delete quiz!");
            return false;
        }

        return true;
    }
}

export const apiService = new ApiService();