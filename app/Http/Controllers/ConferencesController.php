<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreConferenceRequest;
use App\Http\Resources\AttendeeResource;
use App\Http\Resources\ConferenceResource;
use App\Models\Conference;
use App\Models\User;
use Illuminate\Container\Attributes\Authenticated;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConferencesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('conferences', [
            'conferences' => ConferenceResource::collection(
                Conference::orderBy('name')->get()
            )->all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('conferences/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreConferenceRequest $request)
    {
        Conference::create($request->safe()->all());

        return redirect()->route('conferences.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(#[Authenticated] User $user, Conference $conference)
    {
        $conference->loadCount('attendees')->load('attendees');

        return Inertia::render('conferences/show', [
            'conference' => ConferenceResource::make($conference),
            'attendees' => AttendeeResource::collection($conference->attendees),
            'attending' => $conference->attending($user),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
