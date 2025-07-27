<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreConferenceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()?->email === 'michael@dyrynda.com.au';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'min:2',
                'max:255',
            ],

            'url' => [
                'required',
                'url',
            ],

            'location' => [
                'required',
                'string',
                'min:2',
                'max:255',
            ],

            'start_date' => [
                'required',
                Rule::date()->format('Y-m-d'),
            ],

            'end_date' => [
                'required',
                Rule::date()->afterOrEqual('start_date')->format('Y-m-d'),
            ],
        ];
    }
}
