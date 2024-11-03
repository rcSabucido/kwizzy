<script lang="ts">
    import Button from "../../lib/Button.svelte";
    import EditQuestion from "../../lib/edit/EditQuestion.svelte";
    import EditSidebar from "../../lib/edit/EditSidebar.svelte";
    import type { Quiz, QuizQuestion } from "../../model/quiz";
    import { apiService } from "../../service/api";
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";

    export let params: Record<string, string>;

    let quiz: Quiz | null = null;
    let selectedQuestion: QuizQuestion | null = null;
    let isNewQuiz = !params["quizId"];

    function onQuestionDelete() {
        if (quiz == null) return;
        quiz.questions = quiz.questions.filter(
            (q) => q.id != selectedQuestion?.id,
        );
        selectedQuestion = null;
    }

    onMount(async () => {
        if (isNewQuiz) {
            quiz = {
                _id: '',
                name: '',
                questions: []
            };
        } else {
            quiz = await apiService.getQuizById(params["quizId"]);
            if (quiz && quiz._id) {
                quiz.id = quiz._id;
            }
        }
    });

    async function save() {
        if (quiz == null) return;

        if (isNewQuiz) {
            const createdQuiz = await apiService.createQuiz(quiz);
            if (createdQuiz) {
                quiz = createdQuiz;
                push(`/edit/${createdQuiz._id}`);
            }
        } else {
            const quizId = quiz.id || quiz._id;
            if (quizId) {
                await apiService.saveQuiz(quizId, quiz);
            } else {
                console.error("Quiz ID not found");
            }
        }
    }
</script>

{#if quiz != null}
    <div class="bg-gray-100 w-full p-2 flex justify-end">
        <div class="flex gap-2">
            <input
                type="text"
                class="border rounded px-2"
                placeholder="Quiz name"
                bind:value={quiz.name}
            />
            <Button on:click={save}>{isNewQuiz ? 'Create' : 'Save'}</Button>
        </div>
    </div>
    <div class="flex">
        <EditSidebar bind:questions={quiz.questions} bind:selectedQuestion />
        {#if selectedQuestion != null}
            <EditQuestion
                on:delete={onQuestionDelete}
                on:change={() => quiz = quiz}
                bind:selectedQuestion
            />
        {/if}
    </div>
{:else}
    Quiz not found.
{/if}