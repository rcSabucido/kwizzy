<script lang="ts">
    import { points } from '../../service/player/player';

    $: correct = $points > 0;
</script>

<style>
    .custom-font {
        font-family: 'Wedges', sans-serif;
    }
</style>

<div 
    class="min-h-screen text-white w-full {correct
        ? 'bg-green-500'
        : 'bg-red-600'} flex justify-center items-center">
    {#if correct}
    <div class="text-center">
        <h2 class="text-5xl font-bold custom-font">Your Answer is Correct!</h2>
        <p class="text-2xl">+ {$points} points</p>
    </div>
    {:else}
        <h2 class="text-5xl font-bold custom-font">Incorrect!</h2>
    {/if}
</div>