// Menyeleksi beberapa inputan textfield
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const typeofroom = document.getElementById("typeofroom");
const status = document.getElementById("status");
const jumlah = document.getElementById("jumlah");
const subtotal = document.getElementById("subtotal");
const diskon = document.getElementById("diskon");
const total = document.getElementById("total");
const cetakPesanan = document.querySelector(".output");

// Menyeleksi bagian tombol dan menjalnkan apabila tombol pesan di klik
const tombolPesan = document.getElementById("pesan");
tombolPesan.addEventListener("click", function (e) {
  e.preventDefault();

  // Pengecekan jika inputan-nya kosong atau tidak diisi
  if (nama.value == "" || typeofroom.value == "" || status.value == "" || jumlah.value == "") {
    alert("Inputan nilai harus diisi terlebih dahulu!");
  } else {
    // Mengecek jika inputan nama nya sudah tidak kosong
    if (nama.value != "") {
      document.getElementById("namaOutput").innerText = nama.value;
    }

    // Mengecek jika inputan email nya sudah tidak kosong
    if (email.value != "") {
      document.getElementById("emailOutput").innerText = email.value;
    }

    // Mengecek jika inputan nomor hp nya sudah tidak kosong
    if (phonenumber.value != "") {
      document.getElementById("phonenumberOutput").innerText = phonenumber.value;
    }

    // Mengecek jika inputan check in nya sudah tidak kosong
    if (checkin.value != "") {
      document.getElementById("checkinOutput").innerText = checkin.value;
    }

    // Mengecek jika inputan check out nya sudah tidak kosong
    if (checkout.value != "") {
      document.getElementById("checkoutOutput").innerText = checkout.value;
    }

    // Mengecek inputan TYPE OF ROOM sesuai 3 Pilihan: Bandung, Jakarta dan Surabaya
    if (typeofroom.value == "Family Deluxe") {
      document.getElementById("typeOutput").innerText = typeofroom.value;
    } else if (typeofroom.value == "Deluxe Room") {
      document.getElementById("typeOutput").innerText = typeofroom.value;
    } else if (typeofroom.value == "Suite Room") {
      document.getElementById("typeOutput").innerText = typeofroom.value;
    } else {
      alert("Pilihan room hanya Family Room, Deluxe Room dan Suite Room");
    }

    // Mengecek inputan status sesuai 2 pilihan: Dewasa dan Anak-anak
    if (status.value == "Dewasa") {
      document.getElementById("statusOutput").innerText = status.value;
    } else if (status.value == "Anak-anak") {
      document.getElementById("statusOutput").innerText = status.value;
    } else {
      alert("Pilihan status hanya untuk Dewasa dan Anak-anak saja!");
    }

    let harga = 0;
    let hargaPerTiket = document.getElementById("hargaTiket");

    // Mengecek antara status dan destinasi
    if (typeofroom.value == "Family Deluxe" && status.value == "Dewasa") {
      harga = 200000;
      hargaPerTiket.innerText = harga + " (Dua Ratus Ribu)";
    } else if (typeofroom.value == "Family Deluxe" && status.value == "Anak-anak") {
      harga = 100000;
      hargaPerTiket.innerText = harga + " (Seratus Ribu)";
    } else if (typeofroom.value == "Deluxe Room" && status.value == "Dewasa") {
      harga = 300000;
      hargaPerTiket.innerText = harga + " (Tiga Ratus Ribu)";
    } else if (typeofroom.value == "Deluxe Room" && status.value == "Anak-anak") {
      harga = 200000;
      hargaPerTiket.innerText = harga + " (Dua Ratus Ribu)";
    } else if (typeofroom.value == "Suite Room" && status.value == "Dewasa") {
      harga = 400000;
      hargaPerTiket.innerText = harga + " (Empat Ratus Ribu)";
    } else if (typeofroom.value == "Suite Room" && status.value == "Anak-anak") {
      harga = 300000;
      hargaPerTiket.innerText = harga + " (Tiga Ratus Ribu)";
    }

    // Mengecek inputan jumlah / tiket jika lebih dari 5 maka akan dikasih diskon, jika dibawah 5 tidak dapat diskon
    // Ubah dulu yang tipe data nya string menjadi number
    const convertToNumber = Number(jumlah.value);
    subtotal.value = harga * convertToNumber;
    document.getElementById("subtotalOutput").innerText = harga * convertToNumber;

    let discount = 0;
    if (convertToNumber >= 6) {
      discount = (subtotal.value / 100) * 15;
    } else if (convertToNumber <= 6) {
      discount = 0;
    }

    document.getElementById("jumlahOutput").innerText = convertToNumber;
    diskon.value = discount;
    document.getElementById("diskonOutput").innerText = discount;

    let totalPaid = subtotal.value - discount;
    total.value = totalPaid;
    document.getElementById("totalOutput").innerText = totalPaid;

    if (nama.value != "" || typeofroom.value != "" || status.value != "" || jumlah.value != "") {
      // Mengecek jika user memasukkan nilai 0 pada inputan jumlah tiket
      if (jumlah.value == 0) {
        alert("Jumlah tiket tidak boleh 0");
        cetakPesanan.classList.remove("tampil");
      } else {
        cetakPesanan.classList.add("tampil");
      }
    }
  }
});

// Menyeleksi bagian tombol dan menjalankan apabila tombol hapus di klik
const hapus = document.getElementById("hapus");
hapus.addEventListener("click", function () {
  // Menghapus bagian output pada html
  if (nama.value == "" && typeofroom.value == "" && status.value == "" && jumlah.value == "") {
    alert("Data masih kosong, apa yang mau dihapus?");
  } else if (nama.value != "" || typeofroom.value != "" || status.value != "" || jumlah.value != "") {
    nama.value = "";
    email.value = "";
    phonenumber.value = "";
    checkin.value = "";
    checkout.value = "";
    typeofroom.value = "";
    status.value = "";
    jumlah.value = "";
    subtotal.value = "";
    diskon.value = "";
    total.value = "";
    cetakPesanan.classList.remove("tampil");
  }
});
