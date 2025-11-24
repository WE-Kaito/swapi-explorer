import { getPerson } from "@/services/swapi";
import { PageContainer, Heading } from "@/components";

type Props = { params: Promise<{ id: string }> };

export default async function PersonPage({ params }: Props) {
  const { id } = await params;
  const person = await getPerson(id);

  return (
    <PageContainer>
      <Heading>{person.name}</Heading>
      <ul>
        <li>height: {person.height}</li>
        <li>hair_color: {person.hair_color}</li>
        <li>skin_color: {person.skin_color}</li>
        <li>birth_year: {person.birth_year}</li>
        <li>gender: {person.gender}</li>
        <li>homeworld: {person.homeworld}</li>
        <li>created: {person.created}</li>
        <li>edited: {person.edited}</li>
        <li>url: {person.url}</li>
      </ul>
      <details>
        <summary>films</summary>
        {person.films.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>species</summary>
        {person.species.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>vehicles</summary>
        {person.vehicles.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>starships</summary>
        {person.starships.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
    </PageContainer>
  );
}
