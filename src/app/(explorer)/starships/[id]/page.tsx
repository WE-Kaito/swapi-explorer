import { getStarship } from "@/services/swapi";
import { Heading, PageContainer } from "@/components";

type Props = { params: Promise<{ id: string }> };

export default async function StarshipPage({ params }: Props) {
  const { id } = await params;
  const starship = await getStarship(id);

  return (
    <PageContainer>
      <Heading as="h1">{starship.name}</Heading>
      <ul>
        <li>model: {starship.model}</li>
        <li>manufacturer: {starship.manufacturer}</li>
        <li>cost_in_credits: {starship.cost_in_credits}</li>
        <li>length: {starship.length}</li>
        <li>max_atmosphering_speed: {starship.max_atmosphering_speed}</li>
        <li>crew: {starship.crew}</li>
        <li>passengers: {starship.passengers}</li>
        <li>cargo_capacity: {starship.cargo_capacity}</li>
        <li>consumables: {starship.consumables}</li>
        <li>hyperdrive_rating: {starship.hyperdrive_rating}</li>
        <li>MGLT: {starship.MGLT}</li>
        <li>starship_class: {starship.starship_class}</li>
        <li>created: {starship.created}</li>
        <li>edited: {starship.edited}</li>
        <li>url: {starship.url}</li>
      </ul>
      <details>
        <summary>pilots</summary>
        {starship.pilots.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
      <details>
        <summary>films</summary>
        {starship.films.map((url) => (
          <div key={url}>{url}</div>
        ))}
      </details>
    </PageContainer>
  );
}
