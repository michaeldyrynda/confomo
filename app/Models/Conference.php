<?php

namespace App\Models;

use App\Models\Concerns\HasUlid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Conference extends Model
{
    /** @use HasFactory<\Database\Factories\ConferenceFactory> */
    use HasFactory;

    use HasUlid;

    public function attendees(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'attendees')->using(Attendee::class);
    }

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }

    public function markAttending(User $user): void
    {
        $this->attendees()->attach($user);
    }

    public function markNotAttending(User $user): void
    {
        $this->attendees()->detach($user);
    }

    public function attending(?User $user): bool
    {
        if (! $user) {
            return false;
        }

        return $this->attendees()->whereColumn('user_id', $user->id)->exists();
    }

    protected function casts()
    {
        return [
            'start_date' => 'date',
            'end_date' => 'date',
        ];
    }
}
