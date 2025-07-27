<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Conference
 */
class ConferenceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->uuid,
            'name' => $this->name,
            'url' => $this->url,
            'location' => $this->location,
            'start_date' => $this->start_date->format('l jS F, Y'),
            'end_date' => $this->end_date->format('l jS F, Y'),
            'attendee_count' => $this->attendees_count,
            'attending' => $this->attending($request->user()),
        ];
    }
}
