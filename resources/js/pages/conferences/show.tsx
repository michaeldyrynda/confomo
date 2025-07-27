import { ConferenceAttendees } from '@/components/conference-attendees';
import ToggleAttendance from '@/components/toggle-attendance';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Conferences',
        href: '/conferences',
    },
    {
        title: 'Show',
        href: '/conferences/{conference}',
    },
];

export default function ShowConference({ conference, attendees }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={conference.data.name} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <h1 className="text-lg font-bold">{conference.data.name}</h1>

                    <ToggleAttendance className="col-start-3 max-w-40 items-end" conference={conference.data} />

                    <div className="col-span-3">
                        <h2 className="font-medium">Attendees ({conference.data.attendee_count || 0})</h2>

                        <div className="mt-4">
                            <ConferenceAttendees attendees={attendees.data} />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
