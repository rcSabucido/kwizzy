<script lang="ts">
    import HostQuizListView from './HostQuizListView.svelte';
    import type { Quiz } from '../../model/quiz';
    import { gameCode, HostGame, state } from '../../service/host/host';
    import { GameState } from '../../service/net';
    import HostLobbyView from './HostLobbyView.svelte';
    import HostPlayView from './HostPlayView.svelte';
    import HostIntermissionView from './HostIntermissionView.svelte';
    import HostEndView from './HostEndView.svelte';

    let game = new HostGame();

    function onHost(event: {detail: Quiz}){
        game.hostQuiz(event.detail.id);
    }

    let views: Record<GameState, any> = {
        [GameState.Lobby]: HostLobbyView,
        [GameState.Play]: HostPlayView,
        [GameState.Intermission]: HostIntermissionView,
        [GameState.Reveal]: HostPlayView,
        [GameState.End]: HostEndView
    }
</script>

{#if $gameCode != null}
    <svelte:component this={views[$state]} {game} />
{:else}
    <HostQuizListView on:host={onHost} />
{/if}