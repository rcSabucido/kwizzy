<script lang="ts">
    import Leaderboard from "../../lib/Leaderboard.svelte";
    import { leaderboard } from "../../service/host/host";
</script>

<div class="flex justify-center min-h-screen w-full"
     style="background-color: #2a4674;">
    <div class="mt-32">
        <h2 class="text-center text-yellow-400 text-5xl font-bold">Game ended!</h2>
        <div class="flex flex-wrap gap-2 mt-10">
            <Leaderboard finish={true} leaderboard={$leaderboard} />
        </div>
    </div>
</div>