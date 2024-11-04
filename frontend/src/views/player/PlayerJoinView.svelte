<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Button from "../../lib/Button.svelte";
    import type { PlayerGame } from "../../service/player/player";

    const dispatch = createEventDispatcher();

    let code: string = "";
    let name: string = "";
    export let game: PlayerGame
    
    function join(){
        dispatch("join");
        game.join(code, name);
    }
</script>

<style>
    .custom-font {
        font-family: 'Wedges', sans-serif;
    }
</style>


<div class="bg-blue-500 Times min-h-screen w-full flex items-center justify-center">
    <div>
        <h2 class="text-white font-bold text-8xl text-center custom-font"> KWIZZY </h2>
        <div class="flex flex-col gap-2 mt-10 items-center">
            <input bind:value={code} type="text" class="p-2 rounded-full text-center" placeholder="Game Code" />
            <input bind:value={name} type="text" class="p-2 rounded-full text-center" placeholder="Name" />
            <button on:click={join} class="bg-amber-300 hover:bg-amber-400 text-black font-bold mt-2 rounded px-2 py-2"> Join Game </button>
        </div>
    </div>

</div>