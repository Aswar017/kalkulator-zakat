var modal = document.getElementById("dmodal");
modal.addEventListener("keyup", function (e) {
    // tambahkan 'Rp.' pada saat form di ketik
    // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
    modal.value = formatRupiah(this.value, "Rp. ");
    // if (modal >= 78540000) {
    // var modPt = parseInt($("#dmodal").val());
    //     var zakat = modPt + keuntungan + piutang;
    //     var jumlahzakat = ((zakat - hutang) * (2.5 / 100));
    //     if (zakat >= 78540000) {
    //         $('#zdwajib').attr('value', 'YA');
    //         $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
    //     }
    // } else {
    //     $('#zdwajib').attr('value', 'Tidak');
    //     $('#zdagang').attr('value', 0);
    // }

});

var keuntungan = document.getElementById("dkeuntungan");
keuntungan.addEventListener("keyup", function (e) {
    // tambahkan 'Rp.' pada saat form di ketik
    // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
    keuntungan.value = formatRupiah(this.value, "Rp. ");
    // if (keuntungan >= 78540000) {
    // var keuntungan = parseInt($("#dkeuntungan").val());
    //     var zakat = modPt + keuntungan + piutang;
    //     var jumlahzakat = ((zakat - hutang) * (2.5 / 100));
    //     if (zakat >= 78540000) {
    //         $('#zdwajib').attr('value', 'YA');
    //         $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
    //     }
    // } else {
    //     $('#zdwajib').attr('value', 'Tidak');
    //     $('#zdagang').attr('value', 0);
    // }
});

var piutang = document.getElementById("dpiutang");
piutang.addEventListener("keyup", function (e) {
    // tambahkan 'Rp.' pada saat form di ketik
    // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
    piutang.value = formatRupiah(this.value, "Rp. ");
    // if (piutang >= 78540000) {
    // var piutang = parseInt($("#dpiutang").val());
    //     var zakat = modPt + keuntungan + piutang;
    //     var jumlahzakat = ((zakat - hutang) * (2.5 / 100));
    //     if (zakat >= 78540000) {
    //         $('#zdwajib').attr('value', 'YA');
    //         $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
    //     }
    // } else {
    //     $('#zdwajib').attr('value', 'Tidak');
    //     $('#zdagang').attr('value', 0);
    // }
});

var hutang = document.getElementById("dhutang");
hutang.addEventListener("keyup", function (e) {
    // tambahkan 'Rp.' pada saat form di ketik
    // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
    hutang.value = formatRupiah(this.value, "Rp. ");
    // if (hutang >= 78540000) {
    // var hutang = parseInt($("#dhutang").val());
    //     var zakat = modPt + keuntungan + piutang;
    //     var jumlahzakat = ((zakat - hutang) * (2.5 / 100));
    //     if (zakat >= 78540000) {
    //         $('#zdwajib').attr('value', 'YA');
    //         $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
    //     }
    // } else {
    //     $('#zdwajib').attr('value', 'Tidak');
    //     $('#zdagang').attr('value', 0);
    // }
});


$('#perdagangan').keyup(function () {
    // var modPt = parseInt($('#dmodal').val());
    // var keunPt = parseInt($('#dkeuntungan').val());
    // var piutDg = parseInt($('#dpiutang').val());
    // var hutJT = parseInt($('#dhutang').val());
    var zakat = modPt + keunPt + piutDg;
    var jumlahzakat = ((modPt + keunPt + piutDg) - (hutJT)) * (2.5 / 100);
    if (zakat >= 68850000) {
        $('#zdwajib').attr('value', 'YA');
        $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
    } else {
        $('#zdwajib').attr('value', 'Tidak');
        $('#zdagang').attr('value', 0);
    }
});

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? " " + rupiah : "";
}
