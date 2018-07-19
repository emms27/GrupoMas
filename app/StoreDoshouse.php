<?php namespace almacen;

use Illuminate\Database\Eloquent\Model;

class StoreDoshouse extends Model {
  protected $table = 'almacenes';
  protected $fillable = ['nombre'];
  //

  public function movimientos()
    {
        return $this->hasMany('almacen\Movimiento','almacenentrada_id');
    }

}
