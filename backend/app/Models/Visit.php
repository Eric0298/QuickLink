<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
    protected $fillable = [
        'url_id',
        'ip',
        'country_code',
        'user_agent',
        'visited_at',
    ];

    public function url()
    {
        return $this->belongsTo(Url::class);
    }
}
