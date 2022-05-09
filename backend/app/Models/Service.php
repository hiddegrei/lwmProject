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
        return $this->hasOne(ServiceCheck::class);
    }

    public function serviceTrack()
    {
        return $this->hasOne(ServiceTrack::class);
    }

    public function serviceRoles(){
        return $this->hasOne(ServiceRoles::class);
    }
}
