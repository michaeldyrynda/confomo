<?php

namespace App\Http\Controllers;

use App\Models\Conference;
use App\Models\User;
use Illuminate\Container\Attributes\Authenticated;
use Illuminate\Http\Request;

class AttendingConference extends Controller
{
    public function __invoke(
        #[Authenticated] User $user,
        Conference $conference,
        Request $request
    ) {
        $request->boolean('attending') ? $conference->markAttending($user) : $conference->markNotAttending($user);

        return redirect()->route('conferences.show', $conference);
    }
}
