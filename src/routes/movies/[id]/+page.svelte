<script lang="ts">
    import { base } from "$app/paths";
    import BackdropHeader from "$lib/components/BackdropHeader.svelte";
    export let data;
    const { movie } = data;

    function formatTime(time) {
        let timeParts = time.split("T")[1].split(":");
        console.log(timeParts);
        return `${timeParts[0]}:${timeParts[1]}`;
    }
</script>

<BackdropHeader {movie} />
<main class="container">
    <section class="showtimes">
        <h2>Funciones</h2>
        {#each movie.theatres as theatre}
            <h4>{theatre.name}</h4>
            {#each Object.entries(theatre.formats) as [format, showtimes]}
                <table class="showtime-table">
                    <tr>
                        <td>{format}</td>
                        <td>
                            {#each showtimes as showtime}
                                <a
                                    role="button"
                                    class="showtime-btn outline secondary"
                                    href="{base}/buy/{showtime.id}"
                                    >{formatTime(showtime.time)}</a
                                >
                            {/each}
                        </td>
                    </tr>
                </table>
            {/each}
        {:else}
            <p>No hay funciones disponibles para esta película</p>
        {/each}
    </section>
</main>

<style>
    main {
        flex-grow: 3;
    }
    .showtime-btn {
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
    }
    table td:first-of-type {
        width: 10rem;
    }
</style>
