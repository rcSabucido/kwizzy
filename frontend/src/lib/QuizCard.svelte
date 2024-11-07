<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";
    import type { Quiz } from "../model/quiz";
    import { push } from "svelte-spa-router";

    const dispatch = createEventDispatcher();

    export let quiz: Quiz;

    function host() {
        dispatch("host", quiz);
    }

    function edit() {
        push(`/edit/${quiz.id}`);
    }

    function deleteQuiz() {
        dispatch("delete", quiz);
    }
</script>

<style>
    .custom-font {
        font-family: 'Boorsok', sans-serif;
    }
</style>

<div class="flex justify-between items-center bg-white border-2 border-blue-300 p-4 rounded-xl">
    <p class="custom-font text-xl   ">{quiz.name}</p>
    <div class="flex-gap-2 items-center">
        <Button on:click={host}>Host</Button>
        <Button on:click={edit}>Edit</Button>
        <Button on:click={deleteQuiz}>Delete</Button>
    </div>
</div>