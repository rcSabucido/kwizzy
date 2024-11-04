<script lang="ts">
    import Button from '../../lib/Button.svelte';
    import PlayerNameCard from '../../lib/lobby/PlayerNameCard.svelte';
    import { players, type HostGame, gameCode } from '../../service/host/host';

    export let game: HostGame;

    function start() {
        game.start();
    }
</script>

<style>
    .custom-font {
        font-family: 'Boorsok', sans-serif;
    }
</style>

<div class="p-8  min-h-screen w-full" style="background-color: #3a5dc4;">
    <div class="flex justify-end">
        <button on:click={start} class="bg-amber-300 hover:bg-amber-400 text-black font-bold  rounded-3xl px-5 py-2"> Join Game </button>
        
        <!-- <Button on:click={start}>Start game</Button> -->
    </div>
    <div class="text-center text-white">
        <h2 class="text-6xl font-bold custom-font">Join with game code</h2>
        <h2 class="text-7xl font-bold custom-font mt-6">{$gameCode}</h2>
    </div>
    <h2 class="mt-10 text-white text-4xl font-bold">
        Players ({$players.length})
    </h2>
    <div class="flex flex-wrap gap-2 mt-4">
        {#each $players as player (player.id)}
            <PlayerNameCard {player} />
        {:else}
            <p class="text-white">No players have joined yet</p>
        {/each}
    </div>
</div>