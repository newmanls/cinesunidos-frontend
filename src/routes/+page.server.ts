export const load = async () => {
    const moviesRes = await fetch('http://127.0.0.1:8000/movies')
    const movies = await moviesRes.json();

    const theatresRes = await fetch('http://127.0.0.1:8000/theatres')
    const theatres = await theatresRes.json();

    return { movies, theatres }
}
