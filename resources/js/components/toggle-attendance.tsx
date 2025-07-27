import { cn } from '@/lib/utils';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Button } from './ui/button';

export default function ToggleAttendance({ conference, className = '', ...props }) {
    const { auth } = usePage().props;

    const { post } = useForm();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('attend-conference', { conference: conference.id, attending: !conference.attending }), {
            preserveScroll: true,
        });
    };

    return auth.user ? (
        <Button className={cn('', className)} onClick={submit}>
            {conference.attending ? "I can't attend" : 'I want to attend'}
        </Button>
    ) : (
        ''
    );
}
