export function ConferenceAttendees({ attendees }) {
    return (
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {attendees.map((attendee) => (
                <ConferenceAttendee attendee={attendee} />
            ))}
        </ul>
    );
}

export function ConferenceAttendee({ attendee }) {
    return (
        <li>
            <div className="flex items-center gap-x-6">
                <img src={attendee.avatar} alt="" className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5" />
                <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{attendee.name}</h3>
                </div>
            </div>
        </li>
    );
}
