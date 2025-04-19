<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('visits', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('url_id'); // Clave foránea a urls
            $table->ipAddress('ip')->nullable(); // IP del visitante
            $table->string('country_code', 5)->nullable(); // País detectado
            $table->string('user_agent')->nullable(); // Info del navegador o dispositivo
            $table->timestamp('visited_at')->useCurrent(); // Fecha de visita

            $table->timestamps();

            // Restricción de integridad referencial
            $table->foreign('url_id')->references('id')->on('urls')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('visits');
    }
};
