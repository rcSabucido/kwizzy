<script lang="ts">
  import PlayerView from './views/player/PlayerView.svelte';
  import HostView from './views/host/HostView.svelte';
  import Router from 'svelte-spa-router';
    import EditQuizView from './views/edit/EditQuizView.svelte';
    import CreateQuizView from './views/create/CreateQuizView.svelte';

  let routes = {
    '/': PlayerView,
    '/host': HostView,
    '/edit/:quizId': EditQuizView,
    '/create': CreateQuizView
  }
</script>

<Router {routes} />