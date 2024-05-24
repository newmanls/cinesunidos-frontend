<script lang="ts">
    import { base } from "$app/paths";
    import BackdropHeader from "$lib/components/BackdropHeader.svelte";
    export let data;
    let { movie } = data;

    function formatTime(time: string) {
        let timeParts = time.split("T")[1].split(":");
        return `${timeParts[0]}:${timeParts[1]}`;
    }

    async function getShowtimes() {
        const res = await fetch(
            `http://127.0.0.1:8000/movies/${movie.id}/showtimes/?date=${formData.date}`,
        );
        movie = await res.json();
    }

    function getCurrentISODate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, "0");
        let day = String(date.getDate() + 1).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    let formData = {
        movie_id: movie.id,
        date: getCurrentISODate(),
    };
</script>

<BackdropHeader {movie} />
<main class="container">
    <form role="group" on:submit|preventDefault={getShowtimes}>
        <input type="date" name="date" bind:value={formData.date} />
        <button type="submit">Consultar</button>
    </form>

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
