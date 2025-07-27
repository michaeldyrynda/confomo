import { ConferenceItem } from '@/components/conference-item';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [];

export default function Conference({ conferences }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Conferences" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <ul role="list" className="mt-6 flex gap-x-6">
                        {conferences.map((conference) => (
                            <a href={route('conferences.show', { conference: conference.data.id })}>
                                <ConferenceItem key={conference.data.id} conference={conference.data} />
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
        </AppLayout>
    );
}
