<script lang="ts">
    import { base } from "$app/paths";
    import BackdropHeader from "$lib/components/BackdropHeader.svelte";
    import LiMoviePoster from "$lib/components/LiMoviePoster.svelte";

    export let data: any;

    const { movies, theatres } = data;
    let backdropMovie: any = movies[0];
</script>

<main>
    <BackdropHeader movie={backdropMovie}>
        <a role="button" href="{base}/movies/{backdropMovie.id}">Funciones</a>
    </BackdropHeader>
    <section id="movies" class="container">
        <h2>Películas</h2>
        {#if movies.length < 1}
            <p>No hay funciones disponibles</p>
        {:else}
            <ul>
                {#each movies as movie}
                    <LiMoviePoster
                        id={movie.id}
                        src={movie.poster}
                        title={movie.title}
                    />
                {/each}
            </ul>
        {/if}
    </section>
    <section id="theatres" class="container">
        <h2>Cines</h2>
        <ul>
            {#each theatres as theatre}
                <li>{theatre.name}</li>
            {/each}
        </ul>
    </section>
</main>

<style>
    main {
        flex-grow: 3;
    }

    #movies ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        gap: 1rem;
        padding: 0;
        margin-bottom: 0;
    }
</style>
