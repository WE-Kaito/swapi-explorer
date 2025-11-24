type Entry = { label: string; value: string | number };

export function DetailsTable({ entries }: { entries: Entry[] }) {
    return (
        <table className="w-full table-fixed border-collapse text-start mb-4">
            <tbody>
                {entries.map(({ label, value }) => (
                    <tr key={label} className="border-b border-foreground/10">
                        <th scope="row" className="w-1/3 py-2 pr-4 text-start font-medium text-foreground/80 align-top">
                            {label}
                        </th>
                        <td className="py-2 text-start break-words">{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
