<script lang="ts">
    import { base } from "$app/paths";
    import BackdropHeader from "$lib/components/BackdropHeader.svelte";
    export let data;
    const { movies, theatres } = data;
    let backdropMovie = movies[0];
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
                    <li>
                        <a href="{base}/movies/{movie.id}">
                            <img
                                src={movie.poster}
                                alt="{movie.title} poster"
                            />
                            <p class="movie-title">{movie.title}</p>
                        </a>
                    </li>
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

    #movies li {
        list-style: none;
        margin-bottom: 0;
    }

    #movies li > a {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.5rem;
        text-decoration: none;
    }

    #movies li > a > img {
        background: gray;
        object-fit: cover;
        border-radius: 0.5rem;
    }

    #movies li > a > p {
        text-align: center;
        font-size: 0.9rem;
        margin-bottom: 0;
    }
</style>
