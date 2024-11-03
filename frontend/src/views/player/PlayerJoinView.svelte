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



<div class="bg-purple-500 min-h-screen w-full flex items-center justify-center">
    <div>
        <h2 class="text-white font-bold text-5xl text-center"> Quiz </h2>
        <div class="flex flex-col gap-2 mt-10 items-center">
            <input bind:value={code} type="text" class="p-2 rounded" placeholder="Game code" />
            <input bind:value={name} type="text" class="p-2 rounded" placeholder="Name" />
            <Button on:click={join}>Join Game</Button>
        </div>
    </div>

</div>