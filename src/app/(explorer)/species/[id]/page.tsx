import { Heading, PageContainer, Button } from "@/components";
import { getSpecies } from "@/services/swapi";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export default async function SpeciesDetailPage({ params }: Props) {
  const { id } = await params;
  const species = await getSpecies(id);

  return (
    <PageContainer>
      <Heading>{species.name}</Heading>
      <ul>
        <li>classification: {species.classification}</li>
        <li>designation: {species.designation}</li>
        <li>average_height: {species.average_height}</li>
        <li>skin_colors: {species.skin_colors}</li>
        <li>hair_colors: {species.hair_colors}</li>
        <li>eye_colors: {species.eye_colors}</li>
        <li>average_lifespan: {species.average_lifespan}</li>
        <li>homeworld: {species.homeworld}</li>
        <li>language: {species.language}</li>
        <li>created: {species.created}</li>
        <li>edited: {species.edited}</li>
        <li>url: {species.url}</li>
      </ul>
      <details>
        <summary>people</summary>
        {species.people.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>films</summary>
        {species.films.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <Link href="/species" className="rounded-4xl mt-auto">
        <Button aria-hidden tabIndex={-1}>
          Back
        </Button>
      </Link>
    </PageContainer>
  );
}
