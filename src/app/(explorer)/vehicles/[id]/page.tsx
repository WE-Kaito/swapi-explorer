import { getVehicle } from "@/services/swapi";

type Props = { params: Promise<{ id: string }> };

export default async function VehiclePage({ params }: Props) {
    const { id } = await params;
    const vehicle = await getVehicle(id);

    return (
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
            <h1 className="text-2xl font-bold">{vehicle.name}</h1>
            <ul>
                <li>model: {vehicle.model}</li>
                <li>manufacturer: {vehicle.manufacturer}</li>
                <li>cost_in_credits: {vehicle.cost_in_credits}</li>
                <li>length: {vehicle.length}</li>
                <li>max_atmosphering_speed: {vehicle.max_atmosphering_speed}</li>
                <li>crew: {vehicle.crew}</li>
                <li>passengers: {vehicle.passengers}</li>
                <li>cargo_capacity: {vehicle.cargo_capacity}</li>
                <li>consumables: {vehicle.consumables}</li>
                <li>vehicle_class: {vehicle.vehicle_class}</li>
                <li>created: {vehicle.created}</li>
                <li>edited: {vehicle.edited}</li>
                <li>url: {vehicle.url}</li>
            </ul>
            <details>
                <summary>pilots</summary>
                {vehicle.pilots.map((url) => (
                    <div key={url}>{url}</div>
                ))}
            </details>
            <details>
                <summary>films</summary>
                {vehicle.films.map((url) => (
                    <div key={url}>{url}</div>
                ))}
            </details>
        </main>
    );
}
