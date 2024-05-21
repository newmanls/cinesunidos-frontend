<script lang="ts">
    import { base } from "$app/paths";
    import BackdropHeader from "$lib/components/BackdropHeader.svelte";
    export let data;
    const { movie } = data;
</script>

<BackdropHeader {movie} />
<main class="container">
    <section class="showtimes">
        <h2>Funciones</h2>
        {#each movie.theatres as theatre}
            <h3>{theatre.name}</h3>
            <ul>
                {#each theatre.showtimes as showtime}
                    <li>
                        <a href="{base}/buy/{showtime.id}">
                            {showtime.format} - {showtime.time} (Sala {showtime.auditorium})
                        </a>
                    </li>
                {/each}
            </ul>
        {:else}
            <p>No hay funciones disponibles para esta película</p>
        {/each}
    </section>
</main>

<style>
    main {
        flex-grow: 3;
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
