<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Kalkulator Zakat</title>
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<!-- Google Font -->
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
	<!-- Custom CSS -->
	<link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
</head>

<body>
	<div class="home">
		<div class="text-center">
			<a href="#"><img src="{{asset('assets/img/logo.png')}}" width="150px"></a>
		</div>
		<div class="judul">
			<p>Kalkulator Perhitungan Zakat</p>
		</div>

		{{-- bagian kiri --}}
		<a href="" data-toggle="modal" data-target="#z-penghasilan">
			<div class="card-1">
				<i class="fas fa-wallet fa-3x" style="color: #FFA825; margin-left: 16px; margin-top: 12px;"></i>
				<p class="z-penghasilan">Zakat Penghasilan</p>
				<p class="z-des-penghasilan">Zakat harta yang dikeluarkan dari hasil pendapatan<br>seseorang atau profesinya bila telah mencapai<br>nisab</p>
			</div>
		</a>

		<a href="" data-toggle="modal" data-target="#z-perdagangan">
			<div class="card-2">
				<i class="fas fa-shopping-bag fa-3x" style="color: #FFA825; margin-left: 16px; margin-top: 12px;"></i>
				<p class="z-perdagangan">Zakat Perdagangan</p>
				<p class="z-des-penghasilan">Zakat harta yang dikeluarkan dari hasil pendapatan<br>seseorang atau profesinya bila telah mencapai<br>nisab</p>
			</div>
		</a>

		<a href="" data-toggle="modal" data-target="#emas-perak">
			<div class="card-3">
				<i class="fas fa-ring fa-3x" style="color: #FFA825; margin-left: 16px; margin-top: 12px;"></i>
				<p class="emas-perak">Emas</p>
				<p class="z-des-penghasilan">Setiap muslim yang memiliki simpanan emas<br> selama satu tahun dan mencapai 85 gram, maka<br> wajib mengeluarkan zakat sebanyak 2,5 persen.</p>
			</div>
		</a>

		{{-- bagian kanan --}}
		<a href="" data-toggle="modal" data-target="#z-tabungan">
			<div class="card-5">
				<i class="fas fa-shopping-bag fa-3x" style="color: #FFA825; margin-left: 16px; margin-top: 12px;"></i>
				<p class="z-tabungan">Zakat Tabungan</p>
				<p class="z-des-penghasilan">Muslim yang memiliki tabungan dan terhitung<br> mencapai satu tahun dan nilainya setara dengan<br> 85gr emas, maka wajib mengeluarkan zakat. </p>
			</div>
		</a>

		<a href="" data-toggle="modal" data-target="#perak">
			<div class="card-6">
				<i class="fas fa-ring fa-3x" style="color: #FFA825; margin-left: 16px; margin-top: 12px;"></i>
				<p class="z-perak">Zakat Perak</p>
				<p class="z-des-penghasilan">simpanan perak selama satu tahun dan mencapai<br> 595 gram perak, maka wajib mengeluarkan zakat<br> sebanyak 2,5 persen.</p>
			</div>
		</a>

		<a href="" data-toggle="modal" data-target="#z-pertanian">
			<div class="card-4">
				<i class="fas fa-balance-scale-left fa-3x" style="color: #FFA825; margin-left: 16px; margin-top: 12px;"></i>
				<p class="z-pertanian">Zakat Pertanian</p>
				<p class="z-des-penghasilan">Hasil pertanian dengan kadar 5% jika dengan<br> irigasi (mengeluarkan biaya) atau 10% dengan<br> perairan alami (tidak mengeluarkan biaya).</p>
			</div>
		</a>

		<div class="ellipse-1"></div>
		<div class="ellipse-2"></div>
		<div class="ellipse-3"></div>
		<div class="ellipse-4"></div>
		<div class="ellipse-5"></div>
		<div class="ellipse-6"></div>
	</div>

	{{-- Form Modal --}}
	@include('form-modal.modal')

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
	<script src="{{asset('assets/js/accounting.js')}}"></script>
	<script src="{{asset('assets/js/hitung-zakat.js')}}"></script>
	<script src="{{asset('assets/js/zakat-dagang.js')}}"></script>
</body>

</html>