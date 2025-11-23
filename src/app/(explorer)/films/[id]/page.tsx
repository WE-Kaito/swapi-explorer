import { getFilm } from "@/services/swapi";
import { PageContainer, Heading } from "@/components";

type Props = { params: Promise<{ id: string }> };

export default async function FilmPage({ params }: Props) {
  const { id } = await params;
  const film = await getFilm(id);

  return (
    <PageContainer>
      <Heading as="h1">{film.title}</Heading>
      <ul>
        <li>episode_id: {film.episode_id}</li>
        <li>opening_crawl: {film.opening_crawl}</li>
        <li>director: {film.director}</li>
        <li>producer: {film.producer}</li>
        <li>release_date: {film.release_date}</li>
        <li>created: {film.created}</li>
        <li>edited: {film.edited}</li>
        <li>url: {film.url}</li>
      </ul>
      <details>
        <summary>characters</summary>
        {film.characters.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>planets</summary>
        {film.planets.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>starships</summary>
        {film.starships.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>vehicles</summary>
        {film.vehicles.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>species</summary>
        {film.species.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
    </PageContainer>
  );
}
