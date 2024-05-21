<script lang="ts">
    import { base } from "$app/paths";
    export let data;
    const { movies, theatres } = data;
    let backdropMovie = movies[0];
</script>

<main>
    <section id="backdrop">
        <img src={backdropMovie.backdrop} alt="backdrop" />
        <div class="container">
            <h1>{backdropMovie.title}</h1>
            <section class="details">
                <span class="rating">{backdropMovie.rating}</span> | {backdropMovie.running_time}m
            </section>
            <p class="overview">{backdropMovie.overview}</p>
        </div>
    </section>
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

    #backdrop {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        height: 600px;
        overflow: hidden;
        margin-top: -3.5rem;
    }

    #backdrop img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        opacity: 30%;
    }
    #backdrop > .container {
        position: absolute;
        bottom: 0;
        z-index: 1;
        margin: 2rem auto;
    }

    .details {
        font-size: 0.75rem;
    }

    .rating {
        border: 1px gray solid;
        padding: 0.1rem 0.5rem;
        margin-right: 0.25rem;
    }
</style>
