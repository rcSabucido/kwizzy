<script lang="ts">
    import type { Player } from '../../model/quiz';

    export let player: Player;
</script>

<button on:click>
    <h3
        class="text-3xl bg-amber-300 text-black px-4 py-2 rounded-xl hover:line-through"
    >
        {player.name}
    </h3>
</button>