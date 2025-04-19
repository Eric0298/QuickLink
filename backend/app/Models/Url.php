<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Url extends Model
{
    //Campos que se pueden asignar masivamente
    protected $fillable = [
        'original_url',
        'short_code',
        'custom_alias',
        'user_id',
        'visit_count',
        'ip_creation',
        'expires_at',
        'is_active',
        'country_code',
        'user_agent',
        'password',
        'is_reported',
    ];
    //Mutador para encriptar automáticamente la contraseña al guardar.
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = $value ? Hash::make($value) : null;
    }

    //Relacion por si se implementan usuarios en el futuro 

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    //Relación con estadísticas (visitas individuales).
    public function visits()
    {
        return $this->hasMany(Visit::class);
    }
}
