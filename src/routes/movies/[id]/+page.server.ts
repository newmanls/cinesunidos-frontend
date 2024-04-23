export const load = async ({ params }) => {
    const movieRes = await fetch(`http://127.0.0.1:8000/movies/${params.id}/showtimes`)
    const movie = await movieRes.json();

    return {
        movie
    }
}
