// Penghasilan
var penghasilan = document.getElementById('peng-per');
penghasilan.addEventListener('keyup', function (e) {
    penghasilan.value = formatRupiah(this.value, '');
    var peng = penghasilan.value.replace(/[.]+/g, '');
    var pengeluaran = document.getElementById('pengeluaran').value;
    pengeluaran = pengeluaran.replace(/[.]+/g, '');

    if (peng >= 5877000) {
        if (pengeluaran == '') {
            var pengPb = ((peng * 2.5) / 100);
            var pengPt = pengPb * 12;
            $('#wajibjzakat').attr('value', 'YA');
            $('#peng-pb').attr('value', (accounting.formatNumber(pengPb, "0", ".")));
            $('#peng-pt').attr('value', (accounting.formatNumber(pengPt, "0", ".")));
        } else {
            var hasil = peng - pengeluaran;
            if (hasil < 5877000) {
                $('#wajibjzakat').attr('value', 'Tidak');
            } else {
                var pengPb = ((peng * 2.5) / 100);
                var pengPt = pengPb * 12;
                $('#wajibjzakat').attr('value', 'YA');
                $('#peng-pt').attr('value', (accounting.formatNumber(pengPt, "0", ".")));
                $('#peng-pb').attr('value', (accounting.formatNumber(pengPb, "0", ".")));
            }
        }
    } else {
        $('#wajibjzakat').attr('value', 'Tidak');
        $('#peng-pb').attr('value', 0);
        $('#peng-pt').attr('value', 0);
    }
})

var pengeluaran = document.getElementById('pengeluaran');
pengeluaran.addEventListener('keyup', function (e) {
    pengeluaran.value = formatRupiah(this.value, '');
    var fix_pengeluaran = pengeluaran.value.replace(/[.]+/g, '');
    var pengPer = document.getElementById('peng-per');
    var penghasilan = pengPer.value.replace(/[.]+/g, '');

    if (penghasilan >= 5877000) {
        var hasil = penghasilan - fix_pengeluaran;
        if (hasil < 5877000) {
            $('#wajibjzakat').attr('value', 'Tidak');
            $('#peng-pb').attr('value', 0);
            $('#peng-pt').attr('value', 0);
        } else {
            var pengPb = ((hasil * 2.5) / 100);
            var pengPt = pengPb * 12;
            $('#wajibjzakat').attr('value', 'YA');
            $('#peng-pb').attr('value', (accounting.formatNumber(pengPb, "0", ".")));
            $('#peng-pt').attr('value', (accounting.formatNumber(pengPt, "0", ".")));
        }
    } else {
        $('#wajibjzakat').attr('value', 'Tidak');
        $('#peng-pb').attr('value', 0);
        $('#peng-pt').attr('value', 0);
    }
});

// Tabungan
var salBag = document.getElementById('sal-bag');
salBag.addEventListener('keyup', function () {
    salBag.value = formatRupiah(this.value, '');
    var tabungan = salBag.value.replace(/[.]+/g, '');

    if (tabungan >= 78540000) {
        var bagHas = parseInt($('#bag-has').val());

        if (bagHas == 0) {
            var jumlahZakat = ((tabungan * 2.5) / 100);
            $('#wajibtzakat').attr('value', 'YA');
            $('#jumlah-zakat').attr('value', (accounting.formatNumber(jumlahZakat, "0", ".")));
        }
    } else if (tabungan < 78540000) {
        var bagHas = parseInt($('#bag-has').val());

        if (bagHas == 0) {
            $('#wajibtzakat').attr('value', 'Tidak');
            $('#jumlah-zakat').attr('value', 0);
        }
    }
    var bagiHasil = document.getElementById('bag-has');
    bagiHasil.addEventListener('keyup', function () {
        bagiHasil.value = formatRupiah(this.value, '');
        var hasilt = bagiHasil.value.replace(/[.]+/g, '');
        var fix_hasil = parseInt(tabungan) + parseInt(hasilt);

        if (fix_hasil >= 78540000) {
            var jumlahZakat = ((fix_hasil * 2.5) / 100);
            $('#wajibtzakat').attr('value', 'YA');
            $('#jumlah-zakat').attr('value', (accounting.formatNumber(jumlahZakat, "0", ".")));
        } else {
            $('#wajibtzakat').attr('value', 'Tidak');
            $('#jumlah-zakat').attr('value', 0);
        }
    });
});

// Emas
var jumEmas = document.getElementById('jumlah-emas');
jumEmas.addEventListener('keyup', function () {
    jumEmas.value = formatRupiah(this.value, '');
    var hargae = jumEmas.value.replace(/[.]+/g, '');

    if (hargae >= 85) {
        var zakatemas = hargae * 924000;
        var jumlahZakat = (((zakatemas) * 2.5) / 100);
        $('#wajibezakat').attr('value', 'YA');
        $('#jumlah-zakat-emas').attr('value', (accounting.formatNumber(jumlahZakat, "0", ".")));
    } else {
        $('#wajibezakat').attr('value', 'Tidak');
        $('#jumlah-zakat-emas').attr('value', 0);
    }
});

// Perak
var jumPerak = document.getElementById('jumlah-perak');
jumPerak.addEventListener('keyup', function () {
    jumPerak.value = formatRupiah(this.value, '');
    var hargaa = jumPerak.value.replace(/[.]+/g, '');
    if (hargaa >= 595) {
        var zakatperak = hargaa * 8200;
        var jumlahPerak = (((zakatperak) * 2.5) / 100);
        $('#wajibperak').attr('value', 'YA');
        $('#jumlah-zakat-perak').attr('value', (accounting.formatNumber(jumlahPerak, "0", ".")));
    } else {
        $('#wajibperak').attr('value', 'Tidak');
        $('#jumlah-zakat-perak').attr('value', 0);
    }
});

//Perdagangan
// var perdagangan = document.getElementById('dmodal');
// perdagangan.addEventListener('keyup', function (e) {
//     perdagangan.value = formatRupiah(this.value, '');
//     var zakat = perdagangan.value.replace(/[.]+/g, '');

//     // if (modal >= 78540000) {
//     var modPt = parseInt($('#dmodal').val());
//     var keunPt = parseInt($('#dkeuntungan').val());
//     var piutDg = parseInt($('#dpiutang').val());
//     var hutJT = parseInt($('#dhutang').val());
//     var zakat = modPt + keunPt + piutDg;
//     var jumlahzakat = ((modPt + keunPt + piutDg) - (hutJT)) * (2.5 / 100);
//     if (zakat >= 78540000) {
//         $('#zdwajib').attr('value', 'Tidak');
//         $('#zdagang').attr('value', 0);

//         // }
//     } else {
//         // $('#zdwajib').attr('value', 'Tidak');
//         // $('#zdagang').attr('value', 0);
//         $('#zdwajib').attr('value', 'YA');
//         $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
//     }
// });
// var keuntungan = document.getElementById('dkeuntungan');
// keuntungan.addEventListener('keyup', function (e) {
//     keuntungan.value = formatRupiah(this.value, '');
//     var zakat = keuntungan.value.replace(/[.]+/g, '');

//     // if (dkeuntungan >= 784540000) {
//     var modPt = parseInt($('#dmodal').val());
//     var keunPt = parseInt($('#dkeuntungan').val());
//     var piutDg = parseInt($('#dpiutang').val());
//     var hutJT = parseInt($('#dhutang').val());
//     var zakat = modPt + keunPt + piutDg;
//     var jumlahzakat = ((modPt + keunPt + piutDg) - (hutJT)) * (2.5 / 100);
//     if (zakat >= 78540000) {
//         $('#zdwajib').attr('value', 'Tidak');
//         $('#zdagang').attr('value', 0);
//         // $('#zdwajib').attr('value', 'YA');
//         // $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
//         // }
//     } else {
//         // $('#zdwajib').attr('value', 'Tidak');
//         // $('#zdagang').attr('value', 0);
//         $('#zdwajib').attr('value', 'YA');
//         $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
//     }
// });
// var piutang = document.getElementById('dpiutang');
// piutang.addEventListener('keyup', function (e) {
//     piutang.value = formatRupiah(this.value, '');
//     var zakat = piutang.value.replace(/[.]+/g, '');
//     // if (dpiutang >= 78540000) {
//     var modPt = parseInt($('#dmodal').val());
//     var keunPt = parseInt($('#dkeuntungan').val());
//     var piutDg = parseInt($('#dpiutang').val());
//     var hutJT = parseInt($('#dhutang').val());
//     var zakat = modPt + keunPt + piutDg;
//     var jumlahzakat = ((modPt + keunPt + piutDg) - (hutJT)) * (2.5 / 100);
//     if (zakat >= 78540000) {
//         $('#zdwajib').attr('value', 'Tidak');
//         $('#zdagang').attr('value', 0);
//         // $('#zdwajib').attr('value', 'YA');
//         // $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
//         // }
//     } else {
//         $('#zdwajib').attr('value', 'YA');
//         $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
//         // $('#zdwajib').attr('value', 'Tidak');
//         // $('#zdagang').attr('value', 0);
//     }
// })
// var hutang = document.getElementById('dhutang');
// hutang.addEventListener('keyup', function (e) {
//     hutang.value = formatRupiah(this.value, '');
//     var zakat = hutang.value.replace(/[.]+/g, '');
//     // if (zakat >= 78540000) {
//     var modPt = parseInt($('#dmodal').val());
//     var keunPt = parseInt($('#dkeuntungan').val());
//     var piutDg = parseInt($('#dpiutang').val());
//     var hutJT = parseInt($('#dhutang').val());
//     var zakat = modPt + keunPt + piutDg;
//     var jumlahzakat = ((modPt + keunPt + piutDg) - (hutJT)) * (2.5 / 100);
//     if (zakat >= 78540000) {
//         $('#zdwajib').attr('value', 'Tidak');
//         $('#zdagang').attr('value', 0);
//         // $('#zdwajib').attr('value', 'YA');
//         // $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
//         // }
//     } else {
//         $('#zdwajib').attr('value', 'YA');
//         $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
//     }
// })
// });
//         });
//     });
// });

// });

//coba lagi
// function fnHitung() {
//     var angka = bersihPemisah(bersihPemisah(bersihPemisah(bersihPemisah(document.getElementById(harga).value))));
//     if (document.getElementById('dmodal').value == "") {
//         document.getElementById('dmodal').focus();
//         return false;
//     } else if (angka >= 1) {
//         document.getElementById('dmodal').focus();
//         document.getElementById('dmodal').value = tandaPemisahTitik(angka);
//         return false;
//     }
// }



//akhir cobaan

// $('#perdagangan').keyup(function () {
//     var modPt = parseInt($('#dmodal').val());
//     var keunPt = parseInt($('#dkeuntungan').val());
//     var piutDg = parseInt($('#dpiutang').val());
//     var hutJT = parseInt($('#dhutang').val());
//     var zakat = modPt + keunPt + piutDg;
//     var jumlahzakat = ((modPt + keunPt + piutDg) - (hutJT)) * (2.5 / 100);
//     if (zakat >= 68850000) {
//         $('#zdwajib').attr('value', 'YA');
//         $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
//     } else {
//         $('#zdwajib').attr('value', 'Tidak');
//         $('#zdagang').attr('value', 0);
//     }
// });

// Pertanian
var pertanian = document.getElementById('zakat-per');
pertanian.addEventListener('keyup', function () {
    pertanian.value = formatRupiah(this.value, '');
    var harga = pertanian.value.replace(/[.]+/g, '');

    if (harga >= 5877000) {
        var zakatPer = ((harga * 5) / 100);
        $('#wajib-per').attr('value', 'YA');
        $('#jum-per').attr('value', (accounting.formatNumber(zakatPer, "0", ".")));
    } else {
        $('#wajib-per').attr('value', 'Tidak');
        $('#jum-per').attr('value', 0);
    }
});

function formatRupiah(angka, prefix) {
    var number = angka.replace(/[^\d]/g, '').toString();
    split = number.split(',');
    sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? '' + rupiah : '');
}


//format rupiah
//perdagangan
var modPt = document.getElementById("dmodal");
modPt.addEventListener("keyup", function (e) {
    // tambahkan 'Rp.' pada saat form di ketik
    // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
    modPt.value = formatRupiah(this.value, "Rp. ");
});

var keunPt = document.getElementById("dkeuntungan");
keunPt.addEventListener("keyup", function (e) {
    // tambahkan 'Rp.' pada saat form di ketik
    // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
    keunPt.value = formatRupiah(this.value, "Rp. ");
});

var piutDg = document.getElementById("dpiutang");
piutDg.addEventListener("keyup", function (e) {
    // tambahkan 'Rp.' pada saat form di ketik
    // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
    piutDg.value = formatRupiah(this.value, "Rp. ");
});

var hutJT = document.getElementById("dhutang");
hutJT.addEventListener("keyup", function (e) {
    // tambahkan 'Rp.' pada saat form di ketik
    // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
    hutJT.value = formatRupiah(this.value, "Rp. ");

});

$('#perdagangan').keyup(function () {
    console.log('oke');

    // var modPt = parseInt($('#dmodal').val());
    // var keunPt = parseInt($('#dkeuntungan').val());
    // var piutDg = parseInt($('#dpiutang').val());
    // var hutJT = parseInt($('#dhutang').val());
    // var zakat = modPt + keunPt + piutDg;
    // var jumlahzakat = ((modPt + keunPt + piutDg) - (hutJT)) * (2.5 / 100);
    // if (zakat >= 68850000) {
    //     $('#zdwajib').attr('value', 'YA');
    //     $('#zdagang').attr('value', (accounting.formatNumber(jumlahzakat, "0", ".")));
    // } else {
    //     $('#zdwajib').attr('value', 'Tidak');
    //     $('#zdagang').attr('value', 0);
    // }
});
