<!-- Modal Penghasilan -->
<div class="modal fade" id="z-penghasilan" tabindex="-1" role="dialog" aria-labelledby="z-penghasilan" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-body">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<form action="" id="penghasilan">
					<label class="lpenghasilan">Penghasilan Perbulan<b class="red-tabung">*</b></label>
					<input type="text" class="ipenghasilan" name="peng-per" id="peng-per" placeholder="tuliskan nominal">
					<label class="lpengeluaran">Pengeluaran kebutuhan pokok (termasuk hutang jatuh tempo) / Bulan<b class="red-tabung">*</b></label>
					<input type="text" class="ipengeluaran" name="pengeluaran" id="pengeluaran" placeholder="tuliskan nominal">
					<label class="nishab">Nisab (653 kg beras)</label>
					<input type="text" class="inishab-peng" value="5.877.000" readonly>
					<label class="lz-peng">WAJIB MEMBAYAR ZAKAT PENGHASILAN</label>
					<input type="text" class="iz-peng" name="wajibjzakat" id="wajibjzakat" readonly>
					<label class="lz-pb">JUMLAH ZAKAT PENGHASILAN PERBULAN</label>
					<input type="text" class="iz-pb" name="peng-pb" id="peng-pb" readonly>
					<label class="lz-pt">JUMLAH ZAKAT PENGHASILAN PERTAHUN</label>
					<input type="text" class="iz-pt" name="peng-pt" id="peng-pt" readonly>
				</form>
			</div>
		</div>
	</div>
</div>

<!-- Modal Zakat Pertanian -->
<div class="modal fade" id="z-pertanian" tabindex="-1" role="dialog" aria-labelledby="z-pertanian" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content m-z-pertanian">
			<div class="modal-body">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<form action="" id="pertanian">
					<label class="lper">Panen dalam rupiah</label>
					<input type="text" class="iper" name="zakatpt" id="zakat-per" placeholder="tuliskan nominal" autocomplete="off">
					<label class="lnisab-per">Nishab 653 kg</label>
					<input type="text" class="inisab-per" name="nzpt" id="nishab-per" value="5.877.000" readonly>
					<label class="ljib-per">WAJIB MEMBAYAR ZAKAT PERTANIAN</label>
					<input type="text" class="ijib-per" name="wzpt" id="wajib-per" readonly>
					<label class="ljum-per">JUMLAH ZAKAT PERTANIAN</label>
					<input type="text" class="ijum-per" name="jzpt" id="jum-per" readonly>
				</form>
			</div>
		</div>
	</div>
</div>

<!-- Modal Perdagangan -->
<div class="modal fade" id="z-perdagangan" tabindex="-1" role="dialog" aria-labelledby="z-perdagangan" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content m-perdagangan">
			<div class="modal-body">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<form action="" id="perdagangan">
					<label class="lmodal">Modal yang di putar selama 1 Tahun</label>
					<input type="text" class="imodal" name="lastname" id="dmodal" placeholder="tuliskan nominal" autocomplete="off">
					<label class="luntung">Keuntungan Selama 1 Tahun</label>
					<input type="text" class="iuntung" name="lastname" id="dkeuntungan" placeholder="tuliskan nominal" autocomplete="off">
					<label class="lpiutang">Piutang Dagang</label>
					<input type="text" class="ipiutang" name="lastname" id="dpiutang" placeholder="tuliskan nominal" value="0" autocomplete="off">
					<label class="ltempo">Hutang Jatuh Tempo</label>
					<input type="text" class="itempo" name="lastname" id="dhutang" placeholder="tuliskan nominal" value="0" autocomplete="off">
					<label class="lnishab">Nishab (85gr Emas)</label>
					<input type="text" class="inishab" name="lastname" id="dnishab" value="78540000" readonly>
					<label class="lwajib">WAJIB MEMBAYAR ZAKAT PERDAGANGAN</label>
					<input type="text" class="iwajib" name="lastname" id="zdwajib" readonly>
					<label class="ljumlah">JUMLAH ZAKAT PERDAGANGAN</label>
					<input type="text" class="ijumlah" name="lastname" id="zdagang" readonly>
				</form>
			</div>
		</div>
	</div>
</div>

<!-- Modal Emas -->
<div class="modal fade" id="emas-perak" tabindex="-1" role="dialog" aria-labelledby="emas-perak" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content m-z-emas">
			<div class="modal-body">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<form id="emas">
					<label class="lmodal">Jumlah Emas yang Dimiliki dalam Gram<b class="red-tabung">*</b></label>
					<input type="text" class="imodal" id="jumlah-emas" placeholder="tuliskan nominal">
					<label class="luntung">Harga emas saat ini<b class="red-tabung">*</b></label>
					<input type="number" class="iemas-e" name="lastname" value="924.000" readonly>
					<label class="lnishab-emas">Nishab Emas (85 gram)</b></label>
					<input type="text" class="iperak-e" name="lastname" value="78.540.000" readonly>
					<label class="lzakat-emas">WAJIB MEMBAYAR ZAKAT EMAS</label>
					<input type="text" class="inishab-e" id="wajibezakat" name="lastname" readonly>
					<label class="lwajib-emas">Jumlah Zakat Emas</label>
					<input type="text" class="iwajib-emas" id="jumlah-zakat-emas" name="lastname" readonly>
				</form>
			</div>
		</div>
	</div>
</div>

{{-- Perak --}}
<div class="modal fade" id="perak" tabindex="-1" role="dialog" aria-labelledby="emas-perak" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content m-z-perak">
			<div class="modal-body">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<form id="perak">
					<label class="lmodal">Jumlah Perak yang Dimiliki dalam Gram<b class="red-tabung">*</b></label>
					<input type="text" class="imodal" id="jumlah-perak" placeholder="tuliskan nominal" autocomplete="off">
					<label class="luntung">Harga perak saat ini<b class="red-tabung">*</b></label>
					<input type="text" class="iemas-e" name="lastname" value="8.200" readonly>
					<label class="lnishab-emas">Nishab Perak (595 gram)</b></label>
					<input type="text" class="iperak-e" name="lastname" value="4.879.000" readonly>
					<label class="lzakat-emas">WAJIB MEMBAYAR ZAKAT PERAK</label>
					<input type="text" class="inishab-e" id="wajibperak" name="lastname" readonly>
					<label class="lwajib-emas">Jumlah Zakat Perak</label>
					<input type="text" class="iwajib-emas" id="jumlah-zakat-perak" name="lastname" readonly>
				</form>
			</div>
		</div>
	</div>
</div>

<!-- Modal Zakat Tabungan -->
<div class="modal fade" id="z-tabungan" tabindex="-1" role="dialog" aria-labelledby="z-tabungan" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-body">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<form id="tabungan">
					<label class="lmodal">Saldo Tabungan<b class="red-tabung">*</b></label>
					<input type="text" class="imodal" id="sal-bag" placeholder="tuliskan nominal" autocomplete="off">
					<label class="lhasil">Bagi Hasil<b class="red-tabung">*)</b></label>
					<input type="text" class="ihasil" name="lastname" id="bag-has" value="0" placeholder="tuliskan nominal" autocomplete="off">
					<label class="lhalal">*) Zakat hanya bisa dikeluarkan dari hasil investasi yang halal</label>
					<label class="lharga">Harga Emas saat ini<b class="red-tabung">*</b></label>
					<input type="text" class="iharga" name="lastname" value="924.000" readonly>
					<label class="lnishab_e">Nishab Emas (85 gram)</label>
					<input type="text" class="inishab_e" name="lastname" value="78.540.000" readonly>
					<label class="lwajib_t">WAJIB MEMBAYAR ZAKAT TABUNGAN</label>
					<input type="text" class="iwajib_t" id="wajibtzakat" name="lastname" readonly>
					<label class="ljumlah_t">JUMLAH ZAKAT TABUNGAN</label>
					<input type="text" class="ijumlah_t" id="jumlah-zakat" name="lastname" readonly>
				</form>
			</div>
		</div>
	</div>
</div>