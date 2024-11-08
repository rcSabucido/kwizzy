<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Button from "../../lib/Button.svelte";
    import type { PlayerGame } from "../../service/player/player";

    const dispatch = createEventDispatcher();

    let code: string = "";
    let name: string = "";
    export let game: PlayerGame;
    
    function join(){
        dispatch("join");
        game.join(code, name);
    }
</script>

<style>
    .custom-font {
        font-family: 'Wedges', sans-serif;
    }
    .bg-blue-500 {
        background-color: #3b82f6;
        min-height: 100vh;
        width: 100%;
        position: relative;
    }
    .cloud {
        background-image: url('/assets/cloud.png');
        background-size: contain;
        background-repeat: no-repeat;
        width: 200px;
        height: 200px;
        position: absolute;
    }
    .cloud1 {
        top: -15%;
        left: -3%;
        width: 300px;
        height: 300px;
    }
    .cloud2 {
        top: 11%;
        right: 1%;
    }
    .cloud3 {
        top: 45%;
        left: -1%;
        width: 500px;
        height: 500px;
    }
    .cloud4 {
        top: 60%;
        right: 10%;
    }
</style>

<div class="bg-blue-500 flex items-center justify-center">
    <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>
    <div class="cloud cloud3"></div>
    <div class="cloud cloud4"></div>

    <div>
        <h2 class="text-white font-bold text-8xl text-center custom-font"> KWIZZY </h2>
        <div class="flex flex-col gap-2 mt-10 items-center">
            <input bind:value={code} type="text" class="p-2 rounded-full text-center" placeholder="Game Code" />
            <input bind:value={name} type="text" class="p-2 rounded-full text-center" placeholder="Name" />
            <button on:click={join} class="bg-amber-300 hover:bg-amber-400 text-black font-bold mt-2 rounded px-2 py-2"> Join Game </button>
        </div>
    </div>
</div>
