<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $casts = [
        'dropdowns' => 'array'
    ];

    public function checks()
    {
        return $this->hasMany(ServiceCheck::class);
    }
}