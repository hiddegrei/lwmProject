<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Laravel\Scout\Attributes\SearchUsingFullText;
use Laravel\Scout\Attributes\SearchUsingPrefix;

class Service extends Model
{
    use Searchable;
    use HasFactory;

    protected $guarded = [];
    protected $casts = [
        'dropdowns' => 'array'
    ];

    public function checks()
    {
        return $this->hasOne(ServiceCheck::class);
    }

    public function serviceTrack()
    {
        return $this->hasOne(ServiceTrack::class);
    }

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    #[SearchUsingPrefix(['id'])]
    public function toSearchableArray()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
        ];
    }

}
