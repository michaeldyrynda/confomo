export function ConferenceItem({ conference }) {
    return (
        <li className="rounded-sm border-2 border-gray-200 p-4 hover:bg-gray-50">
            <h3 className="-mt-2 text-lg/8 font-semibold text-gray-900">{conference.name}</h3>
            <p className="text-sm leading-2 text-gray-500">{conference.location}</p>
            <p className="mt-4 text-sm text-gray-600">
                {conference.start_date} - {conference.end_date}
            </p>
        </li>
    );
}
