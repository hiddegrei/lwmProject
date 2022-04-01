<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facilities extends Model
{
    use HasFactory;
    protected $guarded=[];
    public function image()
    {
       
        $imagePath = ($this->image) ? $this->image : 'DNLA4DoPSELw7Ci7tEcPK54OPFsI6Eof0H6fV5he.jpg';

        return ('/storage/' . $imagePath);

    }
}
