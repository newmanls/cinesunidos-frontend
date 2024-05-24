<script lang="ts">
    export let movie: any;
</script>

<section class="backdrop-header">
    <img class="backdrop-img" src={movie.backdrop} alt="backdrop" />
    <div class="container backdrop-content">
        <img class="poster" src={movie.poster} alt="poster" />
        <div class="backdrop-info">
            <h1>{movie.title}</h1>
            <section class="details">
                <span class="rating">{movie.rating}</span>
                <span>{movie.running_time}</span>
            </section>
            <p class="overview">{movie.overview}</p>
            <slot />
        </div>
    </div>
</section>

<style>
    .backdrop-header {
        position: relative;
        overflow: hidden;
    }

    .backdrop-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        opacity: 10%;
    }

    .backdrop-content {
        margin: 2rem auto;
        display: grid;
        grid-template-columns: auto auto;
        gap: 2rem;
    }

    .backdrop-info {
        margin-top: auto;

        & :last-child {
            margin-bottom: 0;
        }
    }

    .poster {
        width: 15rem;
        border-radius: var(--pico-border-radius);
        box-shadow: 0px 0.25rem 1rem rgba(0, 0, 0, 0.25);
    }

    .details {
        display: flex;
        opacity: 50%;

        & > .rating {
            border: 1px solid var(--pico-color);
            margin-right: 0.5rem;
            padding: 0 0.5rem;
            border-radius: var(--pico-border-radius);
        }

        & > span:not(.rating):not(:last-child)::after {
            content: "|";
            margin: 0 0.5rem;
        }
    }

    @media (width <= 600px) {
        .backdrop-header > .container {
            grid-template-columns: auto;
        }
        .poster {
            margin: 0 auto;
        }
    }
</style>
