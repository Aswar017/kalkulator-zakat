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
		<div class="judul-form text-center">
			<p>Form Donasi</p>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-lg-10 mt-5">
					<form>
						<div class="form-group row">
							<label for="nama_lengkap" class="col-sm-4 col-form-label nama-lengkap">Nama Lengkap</label>
							<div class="col-sm-8">
								<input type="text" class="form-control form-nama" id="nama_lengkap" placeholder="Nama Lengkap Anda" autofocus autocomplete="off" required>
							</div>
						</div>

						<div class="form-group row">
							<label for="atas_nama" class="col-sm-4 col-form-label atas-nama">Atas Nama</label>
							<div class="col-sm-8">
								<input type="text" class="form-control form-atas-nama" id="atas_nama" placeholder="Atas Nama" required autocomplete="off">
							</div>
						</div>

						<div class="form-group row">
							<label for="jenis_kelamin" class="col-sm-4 col-form-label jenis-kelamin">Jenis Kelamin</label>
							<div class="col-sm-8">
								<select class="form-control form-jenis-kelamin" id="jenis_kelamin" required>
									<option selected hidden value="">Jenis Kelamin</option>
									<option value="L">Laki-Laki</option>
									<option value="P">Perempuan</option>
								</select>
							</div>
						</div>

						<div class="form-group row">
							<label for="email" class="col-sm-4 col-form-label email">Email</label>
							<div class="col-sm-8">
								<input type="email" class="form-control form-email" id="email" placeholder="Email" required autocomplete="off">
							</div>
						</div>

						<div class="form-group row">
							<label for="phone" class="col-sm-4 col-form-label phone">Phone</label>
							<div class="col-sm-2 form-phone pr-5">
								<input type="text" class="form-control" id="phone" value="+62" required>
							</div>
							<div class="col-sm-6 form-phone-dua">
								<input type="text" class="form-control" id="phone" placeholder="8xxxxxx...." required autocomplete="off">
							</div>
						</div>

						<div class="form-group row">
							<label for="akad_donasi" class="col-sm-4 col-form-label akad-donasi">Akad Donasi</label>
							<div class="col-sm-8">
								<input type="text" class="form-control form-akad-donasi" id="akad_donasi" value="" readonly>
							</div>
						</div>

						<div class="form-group row">
							<label for="nominal" class="col-sm-4 col-form-label nominal">Nominal</label>
							<div class="input-group col-sm-8 form-nominal">
								<div class="input-group-prepend pb-4">
									<span class="input-group-text" id="basic-addon1">Rp</span>
								</div>
								<input type="text" class="form-control" id="nominal" readonly>
							</div>
						</div>

						<div class="form-group row">
							<label for="bank" class="col-sm-4 col-form-label bank">Bank</label>
							<div class="col-sm-8">
								<select class="form-control form-bank" name="bank" id="bank" required>
									<option selected hidden value="">Pilih Jenis Bank</option>
									<option value="bank_bjb">Bank Bjb</option>
									<option value="bank_dki">Bank DKI</option>
									<option value="bank_mega_syari">Bank Mega Syariah</option>
									<option value="bank_muamalat">Bank Muamalat</option>
									<option value="bank_bri_syari">BRI Syariah</option>
									<option value="bank_bni_syari">BNI Syariah</option>
									<option value="bank_mandiri_syari">Mandiri Syariah</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<div class="row text-center mt-2">
								<div class="col-4"></div>
								<div class="col-8 text-center">
									<button type="submit" class="btn btn-sm btn-block button">Donasi</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	{{-- <div class="ellipse-7"></div>
	<div class="ellipse-8"></div>
	<div class="ellipse-9"></div>
	<div class="ellipse-10"></div>
	<div class="ellipse-11"></div>
	<div class="ellipse-12"></div> --}}

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
