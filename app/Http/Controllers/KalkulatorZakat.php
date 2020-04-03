<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KalkulatorZakat extends Controller
{
	public function form()
	{
		return view('form');
	}
}
