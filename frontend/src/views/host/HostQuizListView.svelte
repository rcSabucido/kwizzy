<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import QuizCard from '../../lib/QuizCard.svelte';
import type { Quiz } from '../../model/quiz';
    import { apiService } from '../../service/api';

    let quizzes: Quiz[] = [];
    let showModal = false;

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

</script>

<div class="p-8">
    <h1 class="text-2xl font-bold">Quizzes</h1>
    <div class="flex flex-col gap-2 mt-4">
        {#each quizzes as quiz(quiz.id)}
            <QuizCard on:host {quiz} />
        {/each}
    </div>
</div>