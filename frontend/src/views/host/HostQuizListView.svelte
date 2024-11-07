<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import QuizCard from '../../lib/QuizCard.svelte';
import type { Quiz } from '../../model/quiz';
    import { apiService } from '../../service/api';
    import Button from '../../lib/Button.svelte';

    let quizzes: Quiz[] = [];
    let showModal = false;
    let newQuiz: Quiz = {
        _id: '',
        name: '',
        questions: []
    }

    const dispatch = createEventDispatcher();

    (async function () {
        quizzes = await apiService.getQuizzes();
    })();

    function openModal() {
        showModal = true;
    }

    function closeModal() {
        showModal = false;
    }

    async function createQuiz() {
        const createdQuiz = await apiService.createQuiz(newQuiz);
        if (createdQuiz) {
            quizzes = [...quizzes, createdQuiz];
            newQuiz = {
                _id: '',
                name: '',
                questions: []
            }
            closeModal();
            dispatch('create', { quiz: createdQuiz });
        }
    }

    async function deleteQuiz(event: CustomEvent) {
        const quizToDelete = event.detail;
        const success = await apiService.deleteQuiz(quizToDelete._id || quizToDelete.id);
        if (success) {
            quizzes = quizzes.filter(quiz => 
                quiz._id !== quizToDelete._id || quiz.id !== quizToDelete.id
            );
        } else {
            console.error('Failed to delete quiz:', quizToDelete);
        }
    }
</script>

<style>
    .custom-font {
        font-family: 'Boorsok', sans-serif;
    }
</style>


<div class="p-8 bg-sky-300 w-full min-h-screen">
    <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold custom-font">Your Quizzes</h1>
        <Button on:click={openModal}>Create New Quiz</Button>
    </div>
    <div class="flex flex-col gap-2 mt-4">
        {#each quizzes as quiz(quiz.id || quiz._id)}
            <QuizCard on:host on:delete={deleteQuiz} {quiz} />
        {/each}
    </div>
</div>

{#if showModal}
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-xl font-bold mb-4">Create New Quiz</h2>
            <div class="mb-4">
                <label for ="quiz-name" class="block text-gray-700">Quiz Name</label>
                <input id="quiz-name" type="text" bind:value={newQuiz.name} class="border rounded px-2 py-1 w-full" />
            </div>
            <div class="flex justify-end gap-2">
                <Button on:click={closeModal}>Cancel</Button>
                <Button on:click={createQuiz}>Create</Button>
            </div>
        </div>
    </div>
{/if}