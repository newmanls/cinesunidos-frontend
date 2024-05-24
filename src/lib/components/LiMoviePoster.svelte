<script lang="ts">
    import { base } from "$app/paths";

    export let id: number, src: string, title: string;
</script>

<li>
    <a href="{base}/movies/{id}">
        <img {src} alt="{title} poster" />
        <p class="title">{title}</p>
    </a>
</li>

<style>
    li {
        list-style: none;
        margin-bottom: 0;
    }

    li > a {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.5rem;
        text-decoration: none;
        color: var(--pico-primary-color);
    }

    li > a > img {
        object-fit: cover;
        border-radius: var(--pico-border-radius);
        box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
    }

    li > a:not(:hover) > .title {
        color: inherit;
    }

    li > a > p {
        text-align: center;
        font-size: 0.9rem;
        margin-bottom: 0;
    }
</style>
