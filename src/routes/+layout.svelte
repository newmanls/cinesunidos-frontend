<script lang="ts">
    import "@picocss/pico";
    import { base } from "$app/paths";
</script>

<header class="container">
    <nav>
        <ul>
            <li><a href="{base}/#backdrop"><strong>CINESUNIDOS</strong></a></li>
        </ul>
        <ul>
            <li><a href="{base}/#movies">Películas</a></li>
            <li><a href="{base}/#theatres">Cines</a></li>
        </ul>
    </nav>
</header>

<slot />

<footer class="container">
    <p>Footer content</p>
</footer>

<style>
    header {
        z-index: 10;
    }

    footer {
        padding-block: var(--pico-block-spacing-vertical);
    }
</style>
