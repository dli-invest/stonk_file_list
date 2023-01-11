<script lang="ts">
import { onMount } from "svelte";
export let fileList: string[] = [];

onMount(async () => {
    fetch("https://stock_list.deta.dev/files")
    .then(response => response.json())
    .then(data => {
        // sort data
        var filesReversed = data.reverse();
        fileList = filesReversed;
    }).catch(error => {
        console.log(error);
        fileList = [];
    });
});
</script>

<main>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<ul>
    {#each fileList as item}
    <li><a href={"https://stock_list.deta.dev" + "/file/" + item}>{item}</a></li>
    {:else}
    <li>Empty list</li>
    {/each}
</ul>
</main>
