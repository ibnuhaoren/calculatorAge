function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    // validasi input
    if (isNaN(birthdate)) {
        document.getElementById('result').innerText = 'Silahkan pilih tanggal lahir!';
        return;
    }

    // hitung umur
    let umurTahun = today.getFullYear() - birthdate.getFullYear();
    let umurBulan = today.getMonth() - birthdate.getMonth();
    let umurHari = today.getDate() - birthdate.getDate();

    if (umurHari < 0) {
        umurBulan -= 1;
        umurHari += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (umurBulan < 0) {
        umurTahun -= 1;
        umurBulan += 12;
    }

    // hitung ulang tahun brikutnya
    let nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const diffTime = nextBirthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // tampilan hasil
    document.getElementById("result").innerHTML =
        `Umur Kamu <b>${umurTahun} tahun, ${umurBulan} bulan, ${umurHari} hari</b><br>
        Ulang tahunmu dalam ${diffDays} hari lagi, sehat slalu ya ✊semoga panjang umur 😁`;
}
function resetForm() {
    document.getElementById('birthdate').value = '';
    document.getElementById('result').innerHTML = '';
}
