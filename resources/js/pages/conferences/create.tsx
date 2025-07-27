import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Conferences',
        href: '/conferences',
    },
    {
        title: 'Add new',
        href: '/conferences/create',
    },
];

type ConferenceForm = {
    name: string;
    location: string;
    url: string;
    start_date: string;
    end_date: string;
};

export default function CreateConference() {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<Required<ConferenceForm>>({
        name: '',
        location: '',
        url: '',
        start_date: '',
        end_date: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('conferences.store'), {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add new conference" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>

                            <Input
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                placeholder="Conference name"
                            />

                            <InputError className="mt-2" message={errors.name} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="url">URL</Label>

                            <Input
                                id="url"
                                className="mt-1 block w-full"
                                value={data.url}
                                onChange={(e) => setData('url', e.target.value)}
                                required
                                type="url"
                                placeholder="Conference URL"
                            />

                            <InputError className="mt-2" message={errors.url} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="location">Location</Label>

                            <Input
                                id="location"
                                className="mt-1 block w-full"
                                value={data.location}
                                onChange={(e) => setData('location', e.target.value)}
                                required
                                placeholder="Conference location"
                            />

                            <InputError className="mt-2" message={errors.location} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="startDate">Start date</Label>

                            <Input
                                id="startDate"
                                className="mt-1 block w-full"
                                value={data.start_date}
                                onChange={(e) => setData('start_date', e.target.value)}
                                required
                                type="date"
                                placeholder="Conference start date"
                            />

                            <InputError className="mt-2" message={errors.start_date} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="endDate">End date</Label>

                            <Input
                                id="endDate"
                                className="mt-1 block w-full"
                                value={data.end_date}
                                onChange={(e) => setData('end_date', e.target.value)}
                                required
                                type="date"
                                placeholder="Conference end date"
                            />

                            <InputError className="mt-2" message={errors.end_date} />
                        </div>

                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save</Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-neutral-600">Saved</p>
                            </Transition>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
