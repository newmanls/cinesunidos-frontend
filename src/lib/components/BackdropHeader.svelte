<script lang="ts">
    export let movie: any;
</script>

<section id="backdrop">
    <img src={movie.backdrop} alt="backdrop" />
    <div class="container">
        <h1>{movie.title}</h1>
        <section class="details">
            {#each [movie.original_title, movie.rating, movie.running_time] as detail}
                <span>{detail}</span>
            {/each}
        </section>
        <p class="overview">{movie.overview}</p>
    </div>
</section>

<style>
    #backdrop {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        height: 600px;
        overflow: hidden;
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
        display: flex;
        font-size: 0.75rem;

        & > *:not(:last-child)::after {
            content: "|";
            margin: 0 0.5rem;
        }
    }
</style>
