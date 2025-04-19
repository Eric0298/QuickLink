<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Ejecuta la migración: crea la tabla urls con estructura avanzada.
     */
    public function up(): void
    {
        Schema::create('urls', function (Blueprint $table) {
            $table->id(); // Clave primaria autoincremental

            $table->text('original_url'); // URL original larga
            $table->string('short_code', 10)->unique(); // Código corto generado automáticamente
            $table->string('custom_alias', 20)->nullable()->unique(); // Alias personalizado opcional (tipo /mi-link)

            $table->unsignedBigInteger('user_id')->nullable(); // Relación con tabla usuarios si decides usar auth

            $table->unsignedBigInteger('visit_count')->default(0); // Contador de clics totales

            $table->string('ip_creation')->nullable(); // IP desde donde se creó la URL
            $table->timestamp('expires_at')->nullable(); // Fecha opcional de expiración del enlace
            $table->boolean('is_active')->default(true); // Activar o desactivar el enlace sin borrarlo

            $table->string('country_code', 5)->nullable(); // País desde el que se creó (ISO 3166-1 alpha-2: ES, MX, AR...)
            $table->string('user_agent')->nullable(); // Información del navegador o sistema usado
            $table->string('password')->nullable(); // Contraseña opcional para acceder al enlace

            $table->boolean('is_reported')->default(false); // Marcar si ha sido reportado por usuarios

            $table->timestamps(); // created_at y updated_at
        });
    }

    /**
     * Reversión: elimina la tabla urls.
     */
    public function down(): void
    {
        Schema::dropIfExists('urls');
    }
};
