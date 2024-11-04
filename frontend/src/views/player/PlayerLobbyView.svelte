<script lang="ts">
    import type { PlayerGame } from "../../service/player/player";

    export let game: PlayerGame;
</script>

<style>
    .custom-font {
        font-family: 'Boorsok', sans-serif;
    }
</style>

<div class="p-8 min-h-screen w-full flex-col items-center content-center text-center text-white custom-font" style="background-color: #3a5dc4;">
    <h2 class="text-6xl font-bold">Welcome to the game!</h2>
    <p class="mt-4 text-4xl font-bold">Can you see your name on the screen?</p>
</div>