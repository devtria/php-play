// ============================================================
//  PHP PLAY – script.js
//  100 Pertanyaan PHP dalam Bahasa Indonesia
// ============================================================

const questions = [
  // ── 1-10: SINTAKS DASAR ─────────────────────────────────
  {
    id: 1,
    question: "Tag PHP yang benar untuk membuka blok kode PHP adalah...",
    options: { A: "<?php", B: "<php>", C: "<?", D: "<script type='php'>" },
    answer: "A",
    explanation: "Tag standar PHP yang direkomendasikan adalah <?php. Tag ini selalu digunakan agar kode PHP dapat dikenali oleh server."
  },
  {
    id: 2,
    question: "Pernyataan mana yang digunakan untuk mencetak output ke browser di PHP?",
    options: { A: "print()", B: "echo", C: "console.log()", D: "document.write()" },
    answer: "B",
    explanation: "echo adalah konstruksi bahasa PHP yang paling umum digunakan untuk menampilkan output. print() juga bisa digunakan, namun echo lebih cepat karena tidak mengembalikan nilai."
  },
  {
    id: 3,
    question: "Bagaimana cara menulis komentar satu baris yang benar di PHP?",
    options: { A: "<!-- komentar -->", B: "/* komentar */", C: "// komentar", D: "** komentar **" },
    answer: "C",
    explanation: "Komentar satu baris di PHP menggunakan // atau #. Sintaks <!-- --> adalah komentar HTML, sedangkan /* */ adalah komentar multi-baris."
  },
  {
    id: 4,
    question: "Setiap pernyataan di PHP harus diakhiri dengan...",
    options: { A: "titik (.)", B: "titik koma (;)", C: "titik dua (:)", D: "koma (,)" },
    answer: "B",
    explanation: "Setiap pernyataan (statement) di PHP harus diakhiri dengan titik koma (;). Tanpanya, PHP akan menghasilkan error parse."
  },
  {
    id: 5,
    question: "Apa output dari kode berikut? echo 'Hello' . ' ' . 'World';",
    options: { A: "Hello World", B: "Hello . World", C: "HelloWorld", D: "Error" },
    answer: "A",
    explanation: "Operator titik (.) di PHP digunakan untuk menggabungkan (concatenate) string. Jadi 'Hello' . ' ' . 'World' menghasilkan 'Hello World'."
  },
  {
    id: 6,
    question: "Fungsi mana yang digunakan untuk menampilkan informasi detail tentang sebuah variabel di PHP?",
    options: { A: "echo()", B: "print_r()", C: "var_dump()", D: "info()" },
    answer: "C",
    explanation: "var_dump() menampilkan informasi detail termasuk tipe data dan nilai variabel. print_r() hanya menampilkan nilai yang dapat dibaca manusia tanpa informasi tipe."
  },
  {
    id: 7,
    question: "PHP singkatan dari...",
    options: { A: "Personal Home Page", B: "Pre Hypertext Processor", C: "PHP: Hypertext Preprocessor", D: "Public Home Page" },
    answer: "C",
    explanation: "PHP adalah rekursif singkatan dari PHP: Hypertext Preprocessor. Awalnya memang singkatan dari Personal Home Page, namun definisi resminya sekarang adalah rekursif tersebut."
  },
  {
    id: 8,
    question: "Apa yang dimaksud dengan PHP sebagai bahasa 'server-side'?",
    options: { A: "PHP berjalan di browser pengguna", B: "PHP diproses di server sebelum hasilnya dikirim ke browser", C: "PHP hanya bisa berjalan di Windows Server", D: "PHP adalah bahasa untuk membuat server" },
    answer: "B",
    explanation: "Server-side berarti kode PHP dieksekusi di server web. Server memproses kode PHP dan mengirimkan hasil berupa HTML ke browser pengguna, bukan kode PHP-nya langsung."
  },
  {
    id: 9,
    question: "Manakah cara penulisan komentar multi-baris yang benar di PHP?",
    options: { A: "// komentar baris 1 // komentar baris 2", B: "<!-- komentar -->", C: "/* komentar baris 1 komentar baris 2 */", D: "## komentar ##" },
    answer: "C",
    explanation: "Komentar multi-baris di PHP menggunakan /* untuk membuka dan */ untuk menutup. Semua teks di antara kedua tanda tersebut akan diabaikan oleh PHP."
  },
  {
    id: 10,
    question: "Apa perbedaan utama antara echo dan print di PHP?",
    options: { A: "echo lebih lambat dari print", B: "print dapat mencetak array, echo tidak", C: "echo tidak mengembalikan nilai, print mengembalikan 1", D: "Tidak ada perbedaan sama sekali" },
    answer: "C",
    explanation: "Perbedaan utama: echo tidak mengembalikan nilai dan bisa menerima beberapa argumen, sedangkan print selalu mengembalikan nilai 1 dan hanya menerima satu argumen."
  },

  // ── 11-22: VARIABEL & TIPE DATA ─────────────────────────
  {
    id: 11,
    question: "Bagaimana cara mendeklarasikan variabel di PHP?",
    options: { A: "var namaVariabel;", B: "$namaVariabel = nilai;", C: "let namaVariabel = nilai;", D: "dim namaVariabel as tipe;" },
    answer: "B",
    explanation: "Di PHP, variabel selalu diawali dengan tanda dollar ($) diikuti nama variabel. PHP adalah bahasa loosely-typed, jadi tipe data tidak perlu dideklarasikan secara eksplisit."
  },
  {
    id: 12,
    question: "Apa output dari: $x = 10; $y = 3; echo $x % $y;",
    options: { A: "3", B: "1", C: "0.3", D: "7" },
    answer: "B",
    explanation: "Operator % adalah modulo (sisa bagi). 10 dibagi 3 menghasilkan 3 sisa 1. Jadi hasilnya adalah 1."
  },
  {
    id: 13,
    question: "Fungsi apa yang digunakan untuk memeriksa tipe data sebuah variabel?",
    options: { A: "typeof()", B: "checktype()", C: "gettype()", D: "datatype()" },
    answer: "C",
    explanation: "gettype() adalah fungsi PHP yang mengembalikan tipe data sebuah variabel sebagai string (misalnya 'integer', 'string', 'boolean', dll)."
  },
  {
    id: 14,
    question: "Nilai apa yang dianggap FALSE di PHP? (Pilih yang paling tepat)",
    options: { A: "String kosong ''", B: "Angka 0", C: "null", D: "Semua jawaban benar" },
    answer: "D",
    explanation: "Di PHP, beberapa nilai dianggap FALSE (falsy): boolean FALSE, integer 0, float 0.0, string kosong '', string '0', array kosong, dan NULL."
  },
  {
    id: 15,
    question: "Apa tipe data dari variabel ini: $nilai = 3.14;?",
    options: { A: "integer", B: "string", C: "float", D: "double" },
    answer: "C",
    explanation: "Angka desimal (dengan titik) di PHP bertipe float (atau double, keduanya sama). Contoh: 3.14, 2.5, -1.0 semuanya adalah tipe float."
  },
  {
    id: 16,
    question: "Mana cara yang benar untuk membuat string multi-baris menggunakan heredoc?",
    options: { A: "<<< EOT ... EOT;", B: '""" ... """', C: "<<<EOT ... EOT;", D: "HEREDOC ... ENDHEREDOC" },
    answer: "C",
    explanation: "Sintaks heredoc di PHP menggunakan <<<EOT diikuti konten string, lalu EOT; (identifier penutup harus di awal baris tanpa spasi). Ini berguna untuk string multi-baris."
  },
  {
    id: 17,
    question: "Apa output dari: var_dump(true);?",
    options: { A: "true", B: "bool(true)", C: "1", D: "boolean(true)" },
    answer: "B",
    explanation: "var_dump() menampilkan tipe dan nilai variabel. Untuk boolean TRUE, outputnya adalah bool(true). Berbeda dengan echo true; yang hanya menampilkan 1."
  },
  {
    id: 18,
    question: "Di PHP, nama variabel bersifat...",
    options: { A: "Case-insensitive (tidak membedakan huruf besar/kecil)", B: "Case-sensitive (membedakan huruf besar/kecil)", C: "Hanya boleh huruf kecil", D: "Hanya boleh huruf besar" },
    answer: "B",
    explanation: "Nama variabel di PHP bersifat case-sensitive. Artinya $nama, $Nama, dan $NAMA adalah tiga variabel yang berbeda. Namun nama fungsi dan kelas tidak case-sensitive."
  },
  {
    id: 19,
    question: "Apa fungsi dari casting (int) pada kode: $nilai = (int) '42abc';?",
    options: { A: "Menghasilkan error karena string tidak bisa diubah", B: "Mengubah '42abc' menjadi integer 42", C: "Mengubah '42abc' menjadi 0", D: "Menghapus karakter non-angka" },
    answer: "B",
    explanation: "Type casting (int) mengkonversi nilai ke integer. Ketika mengkonversi string '42abc', PHP mengambil angka di awal string hingga menemukan karakter non-angka, hasilnya 42."
  },
  {
    id: 20,
    question: "Konstanta di PHP didefinisikan menggunakan...",
    options: { A: "$KONSTANTA = nilai;", B: "const KONSTANTA = nilai; atau define('KONSTANTA', nilai);", C: "constant KONSTANTA = nilai;", D: "DEFINE KONSTANTA AS nilai;" },
    answer: "B",
    explanation: "Konstanta PHP dapat dibuat dengan dua cara: keyword const (di dalam kelas atau global scope) atau fungsi define(). Konstanta tidak menggunakan tanda $ dan nilainya tidak bisa diubah."
  },
  {
    id: 21,
    question: "Apa output dari kode ini: echo gettype(null);?",
    options: { A: "null", B: "NULL", C: "void", D: "undefined" },
    answer: "B",
    explanation: "gettype() mengembalikan tipe data sebagai string dengan huruf kapital untuk NULL. Jadi echo gettype(null); menghasilkan output 'NULL'."
  },
  {
    id: 22,
    question: "Variabel yang dapat diakses di seluruh skrip (termasuk di dalam fungsi) disebut...",
    options: { A: "Variabel lokal", B: "Variabel global", C: "Variabel statis", D: "Variabel super" },
    answer: "B",
    explanation: "Variabel global adalah variabel yang dideklarasikan di luar fungsi. Namun di dalam fungsi PHP, kita perlu menggunakan keyword 'global' atau superglobal $GLOBALS untuk mengaksesnya."
  },

  // ── 23-32: OPERATOR ─────────────────────────────────────
  {
    id: 23,
    question: "Apa hasil dari operasi: 10 == '10' di PHP?",
    options: { A: "false", B: "true", C: "Error", D: "null" },
    answer: "B",
    explanation: "Operator == adalah loose comparison yang melakukan type juggling. PHP mengkonversi '10' (string) menjadi 10 (integer) sebelum membandingkan, sehingga 10 == 10 adalah true."
  },
  {
    id: 24,
    question: "Apa hasil dari operasi: 10 === '10' di PHP?",
    options: { A: "true", B: "false", C: "1", D: "0" },
    answer: "B",
    explanation: "Operator === adalah strict comparison yang membandingkan nilai DAN tipe data. 10 adalah integer, '10' adalah string. Karena tipe berbeda, hasilnya false."
  },
  {
    id: 25,
    question: "Operator apa yang digunakan untuk menggabungkan dua string di PHP?",
    options: { A: "+ (plus)", B: "& (ampersand)", C: ". (titik)", D: ", (koma)" },
    answer: "C",
    explanation: "Operator titik (.) digunakan untuk konkatenasi (penggabungan) string di PHP. Contoh: 'Hello' . ' World' menghasilkan 'Hello World'. Ini berbeda dari JavaScript yang menggunakan +."
  },
  {
    id: 26,
    question: "Apa fungsi dari operator .= di PHP?",
    options: { A: "Membandingkan dua string", B: "Menggabungkan string dan menyimpan hasilnya ke variabel kiri", C: "Memeriksa apakah string kosong", D: "Menghapus karakter dari string" },
    answer: "B",
    explanation: "Operator .= adalah assignment operator untuk konkatenasi. $str .= 'tambahan'; setara dengan $str = $str . 'tambahan'; Ini menambahkan string ke variabel yang sudah ada."
  },
  {
    id: 27,
    question: "Apa hasil dari: $a = 5; $b = $a++; echo $b;?",
    options: { A: "6", B: "5", C: "4", D: "Error" },
    answer: "B",
    explanation: "Post-increment ($a++) mengembalikan nilai SEBELUM dinaikkan. Jadi $b mendapat nilai 5 (nilai $a sebelum increment), kemudian $a menjadi 6. Echo $b menampilkan 5."
  },
  {
    id: 28,
    question: "Operator logika mana yang mengembalikan true jika SALAH SATU kondisi bernilai true?",
    options: { A: "&& (AND)", B: "! (NOT)", C: "|| (OR)", D: "^^ (XOR)" },
    answer: "C",
    explanation: "Operator || (OR) mengembalikan true jika minimal satu operand bernilai true. && (AND) membutuhkan keduanya true, ! (NOT) membalik nilai boolean."
  },
  {
    id: 29,
    question: "Apa hasil dari: echo 2 ** 3; di PHP?",
    options: { A: "6", B: "5", C: "8", D: "9" },
    answer: "C",
    explanation: "Operator ** adalah operator pangkat (exponentiation) yang diperkenalkan di PHP 5.6. 2 ** 3 berarti 2 pangkat 3 = 2 × 2 × 2 = 8."
  },
  {
    id: 30,
    question: "Apa yang dilakukan operator spaceship (<=>)?",
    options: { A: "Mengembalikan -1, 0, atau 1 berdasarkan perbandingan dua nilai", B: "Memeriksa apakah nilai dalam rentang tertentu", C: "Membandingkan dua array", D: "Melakukan penambahan dan pengurangan sekaligus" },
    answer: "A",
    explanation: "Operator spaceship (<=>) mengembalikan -1 jika kiri < kanan, 0 jika sama, dan 1 jika kiri > kanan. Berguna untuk fungsi sorting. Contoh: 1 <=> 2 menghasilkan -1."
  },
  {
    id: 31,
    question: "Apa hasil dari: $x = 10; $x += 5; echo $x;?",
    options: { A: "10", B: "5", C: "15", D: "50" },
    answer: "C",
    explanation: "+= adalah compound assignment operator. $x += 5 setara dengan $x = $x + 5. Karena $x awalnya 10, maka 10 + 5 = 15."
  },
  {
    id: 32,
    question: "Operator null coalescing (??) berfungsi untuk...",
    options: { A: "Memeriksa apakah dua nilai sama", B: "Mengembalikan nilai kiri jika tidak null/undefined, jika tidak mengembalikan nilai kanan", C: "Membagi nilai dengan nol", D: "Mengkonversi null menjadi 0" },
    answer: "B",
    explanation: "Operator ?? (null coalescing) mengembalikan operand kiri jika nilainya bukan NULL (dan terdefinisi/set), jika tidak mengembalikan operand kanan. Contoh: $nama = $input ?? 'default';"
  },

  // ── 33-42: KONTROL ALUR ─────────────────────────────────
  {
    id: 33,
    question: "Sintaks yang benar untuk if-elseif-else di PHP adalah...",
    options: { A: "if(kondisi) { } elif(kondisi) { } else { }", B: "if(kondisi) { } elseif(kondisi) { } else { }", C: "if(kondisi) { } else if(kondisi) { } end if;", D: "if kondisi then { } elseif kondisi then { }" },
    answer: "B",
    explanation: "Di PHP, kata kunci yang benar adalah elseif (satu kata) atau else if (dua kata, keduanya valid). elif adalah sintaks Python, bukan PHP."
  },
  {
    id: 34,
    question: "Apa output dari: $nilai = 75; if($nilai >= 90) { echo 'A'; } elseif($nilai >= 80) { echo 'B'; } elseif($nilai >= 70) { echo 'C'; } else { echo 'D'; }?",
    options: { A: "A", B: "B", C: "C", D: "D" },
    answer: "C",
    explanation: "Nilai 75 tidak memenuhi kondisi >= 90 dan >= 80, tetapi memenuhi >= 70 (karena 75 >= 70 adalah true). Maka blok elseif ketiga dieksekusi dan mencetak 'C'."
  },
  {
    id: 35,
    question: "Kapan sebaiknya menggunakan switch dibandingkan if-elseif?",
    options: { A: "Ketika membandingkan satu variabel dengan banyak nilai berbeda", B: "Ketika kondisinya melibatkan range nilai", C: "Ketika menggunakan kondisi boolean kompleks", D: "switch tidak pernah lebih baik dari if-elseif" },
    answer: "A",
    explanation: "Switch lebih cocok dan lebih mudah dibaca ketika kita membandingkan satu variabel dengan banyak nilai yang mungkin (misalnya hari dalam seminggu, pilihan menu, dll)."
  },
  {
    id: 36,
    question: "Apa fungsi dari keyword break di dalam switch?",
    options: { A: "Keluar dari seluruh program", B: "Menghentikan eksekusi case saat ini dan keluar dari switch", C: "Melanjutkan ke case berikutnya", D: "Mengulangi case saat ini" },
    answer: "B",
    explanation: "break menghentikan eksekusi di dalam switch dan melanjutkan ke kode setelah blok switch. Tanpa break, PHP akan melanjutkan ke case berikutnya (fall-through behavior)."
  },
  {
    id: 37,
    question: "Apa output dari ekspresi ternary ini: echo (5 > 3) ? 'Ya' : 'Tidak';?",
    options: { A: "Ya", B: "Tidak", C: "true", D: "false" },
    answer: "A",
    explanation: "Operator ternary bekerja seperti if-else singkat: (kondisi) ? nilai_jika_true : nilai_jika_false. Karena 5 > 3 adalah true, hasilnya adalah 'Ya'."
  },
  {
    id: 38,
    question: "Apa yang dimaksud dengan 'default' di dalam blok switch?",
    options: { A: "Nilai awal dari variabel switch", B: "Case yang dieksekusi jika tidak ada case lain yang cocok", C: "Case pertama yang selalu dieksekusi", D: "Fungsi untuk mereset nilai switch" },
    answer: "B",
    explanation: "'default' di switch mirip dengan 'else' di if-elseif. Blok default dieksekusi ketika nilai variabel tidak cocok dengan case mana pun yang didefinisikan."
  },
  {
    id: 39,
    question: "Apa perbedaan antara == dan === dalam konteks switch di PHP?",
    options: { A: "switch menggunakan perbandingan === (strict)", B: "switch menggunakan perbandingan == (loose)", C: "switch tidak melakukan perbandingan", D: "switch menggunakan keduanya secara bersamaan" },
    answer: "B",
    explanation: "Switch di PHP menggunakan perbandingan loose (==), bukan strict (===). Ini berarti switch('1') akan cocok dengan case 1 karena type juggling. Hati-hati dengan perilaku ini."
  },
  {
    id: 40,
    question: "Bagaimana cara menulis operator ternary singkat (Elvis operator) di PHP?",
    options: { A: "$a ? $a : $b", B: "$a ?: $b", C: "$a ?? $b", D: "$a || $b" },
    answer: "B",
    explanation: "Elvis operator (?:) adalah versi singkat dari ternary. $a ?: $b setara dengan $a ? $a : $b - mengembalikan $a jika truthy, jika tidak mengembalikan $b. Berbeda dengan ?? yang khusus cek null."
  },
  {
    id: 41,
    question: "Apa output dari: $warna = 'merah'; switch($warna) { case 'biru': echo 'Langit'; break; case 'merah': echo 'Darah'; break; default: echo 'Lainnya'; }?",
    options: { A: "Langit", B: "Darah", C: "Lainnya", D: "Error" },
    answer: "B",
    explanation: "Nilai $warna adalah 'merah' yang cocok dengan case 'merah', sehingga 'Darah' dicetak. Keyword break mencegah eksekusi berlanjut ke default."
  },
  {
    id: 42,
    question: "Apa itu 'match expression' yang diperkenalkan di PHP 8?",
    options: { A: "Fungsi baru untuk pencarian array", B: "Versi switch yang menggunakan strict comparison dan mengembalikan nilai", C: "Cara baru untuk mendefinisikan regex", D: "Pengganti operator ternary" },
    answer: "B",
    explanation: "match (PHP 8+) mirip switch namun menggunakan strict comparison (===), mengembalikan nilai, dan tidak perlu break. Juga melempar UnhandledMatchError jika tidak ada yang cocok."
  },

  // ── 43-52: PERULANGAN ───────────────────────────────────
  {
    id: 43,
    question: "Apa perbedaan antara for dan while loop di PHP?",
    options: { A: "for lebih cepat dari while", B: "for cocok ketika jumlah iterasi diketahui, while ketika bergantung pada kondisi", C: "while hanya bisa digunakan untuk array", D: "for tidak bisa menggunakan kondisi" },
    answer: "B",
    explanation: "Loop for umumnya digunakan ketika kita tahu berapa kali iterasi akan dilakukan (menghitung dari 1 sampai N). Loop while lebih cocok ketika iterasi bergantung pada kondisi yang bisa berubah."
  },
  {
    id: 44,
    question: "Apa output dari loop ini: for($i = 0; $i < 3; $i++) { echo $i; }?",
    options: { A: "012", B: "123", C: "0123", D: "321" },
    answer: "A",
    explanation: "Loop mulai dari $i = 0, kondisi $i < 3, increment $i++. Iterasi: i=0 (cetak 0), i=1 (cetak 1), i=2 (cetak 2), i=3 (kondisi false, berhenti). Output: 012."
  },
  {
    id: 45,
    question: "Apa perbedaan antara while dan do-while?",
    options: { A: "while lebih cepat dari do-while", B: "do-while selalu mengeksekusi blok setidaknya sekali, while mungkin tidak sama sekali", C: "do-while hanya untuk iterasi negatif", D: "while tidak memiliki kondisi" },
    answer: "B",
    explanation: "do-while memeriksa kondisi SETELAH mengeksekusi blok kode, sehingga blok selalu dieksekusi minimal sekali. while memeriksa kondisi SEBELUM eksekusi, sehingga jika kondisi awal false, blok tidak pernah dieksekusi."
  },
  {
    id: 46,
    question: "Fungsi break di dalam loop berfungsi untuk...",
    options: { A: "Menghentikan iterasi saat ini dan lanjut ke iterasi berikutnya", B: "Keluar sepenuhnya dari loop", C: "Mereset variabel counter", D: "Menghentikan program" },
    answer: "B",
    explanation: "break menghentikan eksekusi loop sepenuhnya dan program melanjutkan ke kode setelah loop. Berbeda dengan continue yang hanya melewati iterasi saat ini."
  },
  {
    id: 47,
    question: "Fungsi continue di dalam loop berfungsi untuk...",
    options: { A: "Keluar dari loop sepenuhnya", B: "Melewati sisa iterasi saat ini dan lanjut ke iterasi berikutnya", C: "Mengulangi iterasi saat ini", D: "Menambah nilai counter dua kali" },
    answer: "B",
    explanation: "continue melewati sisa kode dalam iterasi saat ini dan langsung melanjutkan ke iterasi berikutnya. Berguna untuk melewati kondisi tertentu tanpa harus membuat if-else yang kompleks."
  },
  {
    id: 48,
    question: "Loop mana yang paling tepat untuk mengiterasi semua elemen array asosiatif?",
    options: { A: "for loop biasa", B: "while loop", C: "foreach loop", D: "do-while loop" },
    answer: "C",
    explanation: "foreach dirancang khusus untuk mengiterasi array dan objek. Untuk array asosiatif, kita bisa menggunakan foreach($array as $key => $value) untuk mengakses kunci dan nilai sekaligus."
  },
  {
    id: 49,
    question: "Apa output dari: $sum = 0; for($i = 1; $i <= 5; $i++) { $sum += $i; } echo $sum;?",
    options: { A: "5", B: "10", C: "15", D: "25" },
    answer: "C",
    explanation: "Loop menjumlahkan angka 1+2+3+4+5 = 15. Ini adalah pola loop for yang umum untuk menghitung jumlah. $sum += $i setara dengan $sum = $sum + $i."
  },
  {
    id: 50,
    question: "Bagaimana cara menggunakan foreach untuk mendapatkan kunci dan nilai dari array?",
    options: { A: "foreach($arr as $value)", B: "foreach($arr as $key => $value)", C: "foreach($arr, $key, $value)", D: "for($key in $arr)" },
    answer: "B",
    explanation: "Sintaks foreach($arr as $key => $value) memberikan akses ke kunci (key) dan nilai (value) secara bersamaan. Jika hanya butuh nilai, cukup foreach($arr as $value)."
  },
  {
    id: 51,
    question: "Apa yang terjadi jika kondisi while selalu true tanpa ada perubahan?",
    options: { A: "Program berhenti otomatis setelah 1000 iterasi", B: "Terjadi infinite loop yang bisa menyebabkan program hang", C: "PHP otomatis keluar setelah 30 detik", D: "Tidak ada masalah, PHP menanganinya dengan aman" },
    answer: "B",
    explanation: "Infinite loop terjadi ketika kondisi while tidak pernah menjadi false. Ini menyebabkan program terus berjalan tanpa henti, menghabiskan memori/CPU, dan biasanya menyebabkan program crash atau timeout."
  },
  {
    id: 52,
    question: "Apa output dari: $i = 10; do { echo $i; $i++; } while ($i < 5);?",
    options: { A: "Tidak ada output", B: "10", C: "10 11 12 ...", D: "Error" },
    answer: "B",
    explanation: "do-while selalu mengeksekusi blok setidaknya sekali. Blok pertama dieksekusi: echo 10 (output: 10), $i menjadi 11. Kemudian kondisi diperiksa: 11 < 5 adalah false, loop berhenti. Output: 10."
  },

  // ── 53-64: ARRAY ────────────────────────────────────────
  {
    id: 53,
    question: "Bagaimana cara membuat array di PHP?",
    options: { A: "array = [1, 2, 3];", B: "$arr = array(1, 2, 3); atau $arr = [1, 2, 3];", C: "$arr = {1, 2, 3};", D: "new Array(1, 2, 3);" },
    answer: "B",
    explanation: "Ada dua cara membuat array di PHP: menggunakan fungsi array() atau sintaks short array [] (sejak PHP 5.4). Keduanya valid dan equivalen."
  },
  {
    id: 54,
    question: "Bagaimana cara mengakses elemen pertama dari array $buah = ['Apel', 'Jeruk', 'Mangga'];?",
    options: { A: "$buah[1]", B: "$buah.first()", C: "$buah[0]", D: "$buah->first" },
    answer: "C",
    explanation: "Array di PHP (dan kebanyakan bahasa pemrograman) dimulai dari indeks 0. Jadi elemen pertama diakses dengan $buah[0] yang mengembalikan 'Apel'."
  },
  {
    id: 55,
    question: "Apa itu array asosiatif di PHP?",
    options: { A: "Array yang hanya berisi angka", B: "Array yang menggunakan string sebagai kunci (key)", C: "Array yang terurut secara alfabetis", D: "Array yang tidak bisa dimodifikasi" },
    answer: "B",
    explanation: "Array asosiatif menggunakan string sebagai kunci, bukan indeks numerik. Contoh: $person = ['nama' => 'Budi', 'umur' => 25]; Nilainya diakses dengan $person['nama']."
  },
  {
    id: 56,
    question: "Fungsi apa yang digunakan untuk menambah elemen ke akhir array?",
    options: { A: "array_push() atau $arr[] = nilai;", B: "array_add()", C: "push()", D: "append()" },
    answer: "A",
    explanation: "Ada dua cara: array_push($arr, nilai) atau sintaks lebih singkat $arr[] = nilai; Keduanya menambahkan elemen ke akhir array. $arr[] = nilai; lebih direkomendasikan karena lebih efisien."
  },
  {
    id: 57,
    question: "Apa fungsi dari array_merge()?",
    options: { A: "Mengurutkan dua array", B: "Menggabungkan dua atau lebih array menjadi satu array baru", C: "Mencari elemen yang sama di dua array", D: "Menghapus duplikat dari dua array" },
    answer: "B",
    explanation: "array_merge() menggabungkan satu atau lebih array. Untuk array numerik, indeks diurutkan ulang. Untuk array asosiatif, nilai dari array berikutnya menimpa nilai dengan kunci yang sama."
  },
  {
    id: 58,
    question: "Bagaimana cara menghitung jumlah elemen dalam sebuah array?",
    options: { A: "size($arr)", B: "length($arr)", C: "count($arr)", D: "sizeof($arr)" },
    answer: "C",
    explanation: "count() adalah fungsi PHP untuk menghitung jumlah elemen dalam array atau jumlah properti objek. sizeof() adalah alias dari count(). Keduanya valid, namun count() lebih umum digunakan."
  },
  {
    id: 59,
    question: "Apa output dari: $arr = [5, 3, 1, 4, 2]; sort($arr); echo $arr[0];?",
    options: { A: "5", B: "1", C: "3", D: "2" },
    answer: "B",
    explanation: "sort() mengurutkan array secara ascending (dari kecil ke besar) dan memodifikasi array secara langsung (in-place). Setelah sort(), array menjadi [1,2,3,4,5], sehingga $arr[0] adalah 1."
  },
  {
    id: 60,
    question: "Fungsi apa yang digunakan untuk memeriksa apakah sebuah nilai ada di dalam array?",
    options: { A: "array_exists()", B: "in_array()", C: "array_find()", D: "isset_array()" },
    answer: "B",
    explanation: "in_array($nilai, $array) mengembalikan true jika nilai ditemukan dalam array. Parameter ketiga opsional: true untuk strict comparison (===). Contoh: in_array('apel', $buah)."
  },
  {
    id: 61,
    question: "Apa perbedaan antara array_keys() dan array_values()?",
    options: { A: "Tidak ada perbedaan", B: "array_keys() mengembalikan semua kunci, array_values() mengembalikan semua nilai", C: "array_keys() mengembalikan nilai, array_values() mengembalikan kunci", D: "Keduanya mengembalikan seluruh array" },
    answer: "B",
    explanation: "array_keys($arr) mengembalikan array berisi semua kunci dari array input. array_values($arr) mengembalikan array berisi semua nilai dengan indeks numerik yang diurutkan ulang."
  },
  {
    id: 62,
    question: "Bagaimana cara membuat array multidimensi di PHP?",
    options: { A: "Tidak mungkin di PHP", B: "Menggunakan nested array: $arr = [[1,2],[3,4]];", C: "Menggunakan fungsi multi_array()", D: "Hanya dengan database" },
    answer: "B",
    explanation: "Array multidimensi adalah array yang berisi array lain sebagai elemen. Contoh: $matrix = [[1,2,3],[4,5,6]]; Elemen diakses dengan $matrix[0][1] (baris 0, kolom 1) = 2."
  },
  {
    id: 63,
    question: "Apa fungsi dari array_filter()?",
    options: { A: "Mengurutkan elemen array", B: "Memfilter elemen array berdasarkan callback function", C: "Menggabungkan array", D: "Mencari indeks elemen" },
    answer: "B",
    explanation: "array_filter() memfilter elemen array menggunakan callback function. Elemen yang membuat callback mengembalikan true akan dipertahankan. Tanpa callback, menghapus nilai yang dianggap false."
  },
  {
    id: 64,
    question: "Apa fungsi dari array_map()?",
    options: { A: "Mencari lokasi elemen dalam array", B: "Menerapkan callback function ke setiap elemen array dan mengembalikan array baru", C: "Menggabungkan semua elemen menjadi string", D: "Menyalin array" },
    answer: "B",
    explanation: "array_map() menerapkan fungsi ke setiap elemen array dan mengembalikan array baru dengan hasil transformasi. Contoh: array_map('strtoupper', $arr) mengubah semua string menjadi huruf kapital."
  },

  // ── 65-74: FUNGSI ───────────────────────────────────────
  {
    id: 65,
    question: "Bagaimana cara mendefinisikan fungsi di PHP?",
    options: { A: "function namaFungsi() { }", B: "def namaFungsi() { }", C: "func namaFungsi() { }", D: "void namaFungsi() { }" },
    answer: "A",
    explanation: "Fungsi di PHP didefinisikan menggunakan keyword function diikuti nama fungsi, tanda kurung untuk parameter, dan blok kode dalam kurung kurawal. Contoh: function sapa($nama) { echo 'Halo ' . $nama; }"
  },
  {
    id: 66,
    question: "Apa itu parameter default (default parameter) di PHP?",
    options: { A: "Parameter yang selalu harus diisi", B: "Parameter yang memiliki nilai bawaan jika tidak diisi saat pemanggilan fungsi", C: "Parameter pertama dari setiap fungsi", D: "Parameter yang bertipe data tertentu" },
    answer: "B",
    explanation: "Parameter default memberikan nilai bawaan jika argumen tidak diberikan saat fungsi dipanggil. Contoh: function sapa($nama = 'teman') { echo 'Halo ' . $nama; } - bisa dipanggil tanpa argumen."
  },
  {
    id: 67,
    question: "Apa perbedaan antara parameter dan argumen dalam konteks fungsi?",
    options: { A: "Tidak ada perbedaan", B: "Parameter adalah variabel di definisi fungsi, argumen adalah nilai yang dikirim saat pemanggilan", C: "Argumen selalu bertipe integer", D: "Parameter selalu opsional" },
    answer: "B",
    explanation: "Parameter adalah variabel placeholder di definisi fungsi (function tambah($a, $b)). Argumen adalah nilai aktual yang dikirim saat fungsi dipanggil (tambah(5, 3)). Perbedaan ini penting untuk komunikasi yang tepat."
  },
  {
    id: 68,
    question: "Apa itu fungsi rekursif?",
    options: { A: "Fungsi yang berjalan sangat cepat", B: "Fungsi yang memanggil dirinya sendiri", C: "Fungsi yang menerima banyak parameter", D: "Fungsi yang tidak mengembalikan nilai" },
    answer: "B",
    explanation: "Fungsi rekursif adalah fungsi yang memanggil dirinya sendiri. Penting untuk memiliki base case (kondisi berhenti) agar tidak terjadi infinite recursion. Contoh klasik: factorial, fibonacci."
  },
  {
    id: 69,
    question: "Bagaimana cara mengembalikan nilai dari sebuah fungsi di PHP?",
    options: { A: "output nilai;", B: "send nilai;", C: "return nilai;", D: "yield nilai;" },
    answer: "C",
    explanation: "Keyword return digunakan untuk mengembalikan nilai dari fungsi. Ketika return dieksekusi, fungsi berhenti dan mengembalikan nilai tersebut ke pemanggil. yield digunakan untuk generator function."
  },
  {
    id: 70,
    question: "Apa itu anonymous function (closure) di PHP?",
    options: { A: "Fungsi yang tidak memiliki nama", B: "Fungsi yang berjalan secara tersembunyi", C: "Fungsi yang hanya bisa dipanggil sekali", D: "Fungsi yang otomatis dihapus setelah digunakan" },
    answer: "A",
    explanation: "Anonymous function adalah fungsi tanpa nama yang bisa disimpan dalam variabel atau dikirim sebagai argumen. Contoh: $sapa = function($nama) { return 'Halo ' . $nama; }; Ini berguna untuk callback."
  },
  {
    id: 71,
    question: "Apa fungsi dari keyword 'use' dalam closure di PHP?",
    options: { A: "Mengimpor library eksternal", B: "Mewarisi variabel dari scope luar ke dalam closure", C: "Menggunakan fungsi built-in PHP", D: "Mendefinisikan tipe return" },
    answer: "B",
    explanation: "Keyword 'use' dalam closure memungkinkan akses ke variabel dari scope di mana closure didefinisikan. Contoh: $pesan = 'Halo'; $fungsi = function($nama) use ($pesan) { echo $pesan . ' ' . $nama; };"
  },
  {
    id: 72,
    question: "Apa itu variadic function di PHP?",
    options: { A: "Fungsi yang berjalan sangat cepat", B: "Fungsi yang menerima jumlah argumen tidak terbatas menggunakan ...$args", C: "Fungsi yang memiliki banyak return statement", D: "Fungsi yang bisa mewarisi dari fungsi lain" },
    answer: "B",
    explanation: "Variadic function menggunakan operator ... (splat) sebelum parameter terakhir untuk menerima jumlah argumen yang tidak terbatas. Contoh: function jumlah(...$angka) { return array_sum($angka); } bisa dipanggil dengan argumen sebanyak apapun."
  },
  {
    id: 73,
    question: "Apa perbedaan antara pass by value dan pass by reference di PHP?",
    options: { A: "Tidak ada perbedaan di PHP modern", B: "Pass by value mengirim salinan nilai, pass by reference mengirim referensi ke variabel asli", C: "Pass by reference lebih lambat", D: "Pass by value hanya untuk array" },
    answer: "B",
    explanation: "Pass by value (default) mengirim salinan nilai - perubahan di fungsi tidak mempengaruhi variabel asli. Pass by reference (menggunakan &) mengirim referensi sehingga perubahan di fungsi mempengaruhi variabel asli."
  },
  {
    id: 74,
    question: "Apa itu type hinting di PHP 7+?",
    options: { A: "Komentar yang menjelaskan tipe data", B: "Deklarasi tipe data untuk parameter dan return value fungsi", C: "Fungsi untuk mengkonversi tipe data", D: "Plugin IDE untuk mendeteksi tipe" },
    answer: "B",
    explanation: "Type hinting memungkinkan kita mendeklarasikan tipe data yang diharapkan untuk parameter dan nilai kembalian fungsi. Contoh: function tambah(int $a, int $b): int { return $a + $b; } PHP akan error jika tipe tidak sesuai."
  },

  // ── 75-82: SUPERGLOBAL ──────────────────────────────────
  {
    id: 75,
    question: "Apa itu superglobal di PHP?",
    options: { A: "Variabel yang sangat besar nilainya", B: "Variabel bawaan PHP yang dapat diakses dari mana saja dalam skrip", C: "Fungsi yang berjalan secara otomatis", D: "Kelas yang diwariskan ke semua kelas lain" },
    answer: "B",
    explanation: "Superglobal adalah array bawaan PHP yang otomatis tersedia di semua scope (global maupun di dalam fungsi/metode) tanpa perlu menggunakan keyword global. Contoh: $_GET, $_POST, $_SESSION, $_COOKIE, $_SERVER."
  },
  {
    id: 76,
    question: "Superglobal mana yang digunakan untuk mengambil data dari form yang dikirim dengan metode GET?",
    options: { A: "$_POST", B: "$_REQUEST", C: "$_GET", D: "$_FORM" },
    answer: "C",
    explanation: "$_GET berisi data yang dikirim via URL query string atau form dengan method='get'. Data tersedia sebagai array asosiatif. Contoh: URL ?nama=Budi membuat $_GET['nama'] = 'Budi'."
  },
  {
    id: 77,
    question: "Apa perbedaan antara $_GET dan $_POST?",
    options: { A: "Tidak ada perbedaan", B: "$_GET mengirim data melalui URL, $_POST mengirim data dalam body request (lebih aman untuk data sensitif)", C: "$_POST lebih cepat dari $_GET", D: "$_GET hanya untuk data numerik" },
    answer: "B",
    explanation: "$_GET mengirim data sebagai bagian dari URL (terlihat di address bar), cocok untuk pencarian/filter. $_POST mengirim data dalam HTTP body, tidak terlihat di URL, lebih cocok untuk data sensitif seperti password."
  },
  {
    id: 78,
    question: "Bagaimana cara memulai sesi (session) di PHP?",
    options: { A: "session = new Session();", B: "start_session();", C: "session_start();", D: "$_SESSION = start();" },
    answer: "C",
    explanation: "session_start() harus dipanggil di awal skrip (sebelum output HTML apapun) untuk memulai atau melanjutkan sesi. Setelah itu, data sesi disimpan dan diakses melalui superglobal $_SESSION."
  },
  {
    id: 79,
    question: "Apa perbedaan antara $_SESSION dan $_COOKIE?",
    options: { A: "Tidak ada perbedaan", B: "$_SESSION disimpan di server, $_COOKIE disimpan di browser klien", C: "$_COOKIE lebih aman dari $_SESSION", D: "$_SESSION hanya bisa menyimpan string" },
    answer: "B",
    explanation: "$_SESSION menyimpan data di server (lebih aman, tidak terekspos ke klien). $_COOKIE menyimpan data di browser pengguna (bisa dilihat/dimodifikasi pengguna). Session biasanya lebih aman untuk data sensitif."
  },
  {
    id: 80,
    question: "Superglobal $_SERVER['REQUEST_METHOD'] mengembalikan apa?",
    options: { A: "URL dari halaman saat ini", B: "Metode HTTP yang digunakan (GET, POST, dll)", C: "Nama server web", D: "Versi PHP yang digunakan" },
    answer: "B",
    explanation: "$_SERVER['REQUEST_METHOD'] mengembalikan metode HTTP yang digunakan untuk request saat ini, seperti 'GET', 'POST', 'PUT', 'DELETE'. Berguna untuk memeriksa bagaimana form dikirim."
  },
  {
    id: 81,
    question: "Apa fungsi dari $_SERVER['PHP_SELF']?",
    options: { A: "Mengembalikan nama file PHP yang sedang dieksekusi", B: "Mengembalikan versi PHP", C: "Mengembalikan nama server", D: "Mengembalikan direktori kerja saat ini" },
    answer: "A",
    explanation: "$_SERVER['PHP_SELF'] mengembalikan nama dan path file PHP yang sedang berjalan relatif terhadap document root. Berguna untuk action form yang mengarah ke dirinya sendiri. Namun harus di-sanitasi untuk keamanan (XSS)."
  },
  {
    id: 82,
    question: "Superglobal apa yang digunakan untuk menangani upload file di PHP?",
    options: { A: "$_POST", B: "$_FILES", C: "$_UPLOAD", D: "$_DATA" },
    answer: "B",
    explanation: "$_FILES adalah superglobal yang berisi informasi tentang file yang diupload melalui form. Berisi data seperti nama file, tipe MIME, ukuran, dan lokasi sementara file di server."
  },

  // ── 83-92: OOP DASAR ────────────────────────────────────
  {
    id: 83,
    question: "Apa itu OOP (Object-Oriented Programming)?",
    options: { A: "Cara menulis kode yang hanya menggunakan fungsi", B: "Paradigma pemrograman yang mengorganisir kode ke dalam objek yang memiliki properti dan metode", C: "Teknik optimasi kode PHP", D: "Cara menghubungkan PHP ke database" },
    answer: "B",
    explanation: "OOP adalah paradigma pemrograman yang menggunakan objek - entitas yang menggabungkan data (properti/atribut) dan perilaku (metode/fungsi) menjadi satu unit. OOP membuat kode lebih terorganisir, reusable, dan mudah dimaintain."
  },
  {
    id: 84,
    question: "Kata kunci apa yang digunakan untuk mendefinisikan kelas di PHP?",
    options: { A: "object", B: "type", C: "class", D: "struct" },
    answer: "C",
    explanation: "Keyword class digunakan untuk mendefinisikan blueprint/cetak biru dari objek. Contoh: class Mobil { public $warna; public function jalan() { echo 'Mobil berjalan'; } }"
  },
  {
    id: 85,
    question: "Bagaimana cara membuat objek (instance) dari sebuah kelas di PHP?",
    options: { A: "Mobil.create()", B: "$obj = new Mobil();", C: "$obj = Mobil::create()", D: "$obj = create(Mobil)" },
    answer: "B",
    explanation: "Keyword new digunakan untuk membuat instance (objek) dari sebuah kelas. $obj = new NamaKelas() mengalokasikan memori, membuat objek, dan menjalankan constructor jika ada."
  },
  {
    id: 86,
    question: "Apa itu constructor dalam OOP PHP?",
    options: { A: "Fungsi yang dipanggil ketika objek dihapus", B: "Metode khusus __construct() yang otomatis dipanggil ketika objek dibuat", C: "Metode untuk membuat kelas baru", D: "Fungsi yang menginisialisasi database" },
    answer: "B",
    explanation: "__construct() adalah magic method yang otomatis dipanggil ketika objek dibuat dengan new. Biasanya digunakan untuk menginisialisasi properti objek. Jika kelas tidak mendefinisikan constructor, PHP menggunakan constructor kosong."
  },
  {
    id: 87,
    question: "Perbedaan antara property dan method dalam sebuah kelas adalah...",
    options: { A: "Tidak ada perbedaan", B: "Property menyimpan data, method adalah fungsi yang mendefinisikan perilaku", C: "Method menyimpan data, property adalah fungsi", D: "Property hanya untuk angka, method hanya untuk string" },
    answer: "B",
    explanation: "Property (atribut) adalah variabel yang dimiliki oleh kelas/objek dan menyimpan data/state. Method adalah fungsi yang dimiliki oleh kelas/objek dan mendefinisikan perilaku. Contoh: Kelas Anjing punya property $nama dan method bark()."
  },
  {
    id: 88,
    question: "Apa fungsi dari keyword $this di dalam kelas PHP?",
    options: { A: "Merujuk ke kelas induk", B: "Merujuk ke objek saat ini (instance yang sedang digunakan)", C: "Membuat objek baru", D: "Menghapus objek saat ini" },
    answer: "B",
    explanation: "$this adalah referensi ke objek saat ini di dalam konteks kelas. Digunakan untuk mengakses properti dan metode dari dalam kelas itu sendiri. Contoh: $this->nama = 'Budi'; mengatur properti nama dari objek saat ini."
  },
  {
    id: 89,
    question: "Apa itu visibility (access modifier) di PHP OOP?",
    options: { A: "Kecepatan eksekusi metode", B: "Tingkat akses ke properti atau metode (public, protected, private)", C: "Urutan eksekusi metode", D: "Jumlah parameter metode" },
    answer: "B",
    explanation: "Visibility mengontrol dari mana properti/metode bisa diakses: public (dari mana saja), protected (dari kelas itu sendiri dan turunannya), private (hanya dari kelas itu sendiri). Ini adalah prinsip enkapsulasi OOP."
  },
  {
    id: 90,
    question: "Apa perbedaan antara properti public dan private?",
    options: { A: "public lebih cepat dari private", B: "public bisa diakses dari mana saja, private hanya dari dalam kelas itu sendiri", C: "private bisa diwariskan, public tidak", D: "Tidak ada perbedaan fungsional" },
    answer: "B",
    explanation: "Properti/metode public dapat diakses dari luar kelas (melalui objek). Properti/metode private hanya dapat diakses dari dalam kelas itu sendiri - tidak dari luar dan tidak dari kelas turunan. Ini melindungi data internal."
  },
  {
    id: 91,
    question: "Apa itu static method dan property di PHP?",
    options: { A: "Metode yang berjalan lebih cepat", B: "Metode/properti yang dimiliki oleh kelas, bukan oleh instance objek, diakses dengan ::", C: "Metode yang tidak bisa diubah", D: "Metode yang hanya ada di memory sesaat" },
    answer: "B",
    explanation: "Static method/property dimiliki oleh kelas, bukan instance. Dapat diakses tanpa membuat objek: NamaKelas::namaMetode(). Di dalam kelas, static member diakses dengan self::$properti. Berguna untuk utility functions."
  },
  {
    id: 92,
    question: "Bagaimana cara mengakses properti dari objek di luar kelas?",
    options: { A: "objek::properti", B: "$objek->properti", C: "$objek.properti", D: "objek[properti]" },
    answer: "B",
    explanation: "Operator -> (arrow/object operator) digunakan untuk mengakses properti dan metode dari sebuah objek. Contoh: $mobil->warna mengakses properti warna dari objek $mobil. Untuk static member, gunakan :: (scope resolution)."
  },

  // ── 93-100: OOP LANJUTAN ─────────────────────────────────
  {
    id: 93,
    question: "Apa itu inheritance (pewarisan) di OOP PHP?",
    options: { A: "Proses menyalin kelas", B: "Mekanisme di mana kelas anak mewarisi properti dan metode dari kelas induk menggunakan extends", C: "Cara menghubungkan dua objek", D: "Proses menginstansiasi kelas" },
    answer: "B",
    explanation: "Inheritance memungkinkan kelas anak (child class) mewarisi properti dan metode dari kelas induk (parent class) menggunakan keyword extends. Ini mendorong reusability kode. Contoh: class Anjing extends Hewan { }"
  },
  {
    id: 94,
    question: "Keyword apa yang digunakan untuk mewarisi sebuah kelas di PHP?",
    options: { A: "inherit", B: "implements", C: "extends", D: "parent" },
    answer: "C",
    explanation: "Keyword extends digunakan untuk membuat kelas yang mewarisi dari kelas lain. Contoh: class KucingAnggora extends Kucing { } - KucingAnggora mendapat semua properti dan metode public dan protected dari Kucing."
  },
  {
    id: 95,
    question: "Apa itu method overriding di PHP?",
    options: { A: "Membuat metode dengan nama sama di kelas anak yang menggantikan implementasi kelas induk", B: "Menambah lebih banyak metode ke kelas", C: "Menghapus metode dari kelas induk", D: "Memanggil metode dengan parameter berbeda" },
    answer: "A",
    explanation: "Method overriding terjadi ketika kelas anak mendefinisikan ulang metode yang sudah ada di kelas induk dengan nama yang sama. Implementasi kelas anak akan digunakan ketika metode dipanggil melalui objek kelas anak."
  },
  {
    id: 96,
    question: "Kata kunci apa yang digunakan untuk mengakses metode/properti kelas induk dari kelas anak?",
    options: { A: "$this->", B: "self::", C: "parent::", D: "super::" },
    answer: "C",
    explanation: "parent:: digunakan di dalam kelas anak untuk merujuk ke kelas induk. Berguna untuk memanggil constructor induk (parent::__construct()) atau metode yang di-override. self:: merujuk ke kelas saat ini."
  },
  {
    id: 97,
    question: "Apa itu abstract class di PHP?",
    options: { A: "Kelas yang sangat kompleks", B: "Kelas yang tidak bisa diinstansiasi langsung dan harus diwariskan; bisa berisi abstract method", C: "Kelas tanpa properti", D: "Kelas yang hanya berisi static method" },
    answer: "B",
    explanation: "Abstract class (keyword abstract) tidak bisa diinstansiasi langsung (tidak bisa new AbstractClass()). Digunakan sebagai template, harus diwariskan. Abstract method hanya dideklarasikan tanpa implementasi - kelas anak wajib mengimplementasikannya."
  },
  {
    id: 98,
    question: "Apa perbedaan antara abstract class dan interface di PHP?",
    options: { A: "Tidak ada perbedaan", B: "Abstract class bisa berisi implementasi metode dan properti; interface hanya berisi deklarasi method (kontrak)", C: "Interface bisa diinstansiasi, abstract class tidak", D: "Abstract class untuk OOP, interface untuk prosedural" },
    answer: "B",
    explanation: "Abstract class bisa memiliki metode dengan implementasi dan properti. Interface hanya berisi signature metode tanpa implementasi (PHP 8+ interface bisa punya constants). Kelas bisa implements banyak interface tapi hanya extends satu kelas."
  },
  {
    id: 99,
    question: "Apa itu magic method __toString() di PHP?",
    options: { A: "Metode untuk mengkonversi string ke integer", B: "Metode yang otomatis dipanggil ketika objek diperlakukan sebagai string", C: "Metode untuk membuat string baru", D: "Metode untuk menghapus string" },
    answer: "B",
    explanation: "__toString() adalah magic method yang dipanggil otomatis ketika objek dikonversi ke string (misalnya dengan echo $objek). Memungkinkan kita mendefinisikan representasi string dari objek. Harus mengembalikan string."
  },
  {
    id: 100,
    question: "Apa itu magic method __destruct() di PHP?",
    options: { A: "Metode untuk menghancurkan array", B: "Metode yang otomatis dipanggil ketika objek tidak lagi digunakan atau program berakhir", C: "Metode untuk menghapus file", D: "Metode untuk menghentikan loop" },
    answer: "B",
    explanation: "__destruct() adalah magic method yang dipanggil otomatis saat objek tidak lagi direferensikan atau saat skrip berakhir. Berguna untuk membersihkan resource seperti menutup koneksi database atau file handle."
  }
];

// ============================================================
//  STATE VARIABLES
// ============================================================
let currentQuestions = [];
let currentIndex    = 0;
let score           = 0;

// ============================================================
//  FISHER-YATES SHUFFLE
// ============================================================
function fisherYatesShuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ============================================================
//  SCREEN MANAGER
// ============================================================
function showScreen(screenId) {
  document.getElementById('screen-landing').classList.add('hidden');
  document.getElementById('screen-quiz').classList.add('hidden');
  document.getElementById('screen-result').classList.add('hidden');
  const target = document.getElementById(screenId);
  target.classList.remove('hidden');
  // Re-trigger animation
  target.querySelectorAll('.animate-in').forEach(el => {
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = '';
  });
}

// ============================================================
//  GAME FUNCTIONS
// ============================================================
function startGame() {
  currentQuestions = fisherYatesShuffle(questions).slice(0, 20);
  currentIndex     = 0;
  score            = 0;
  showScreen('screen-quiz');
  loadQuestion(0);
}

function loadQuestion(index) {
  const q = currentQuestions[index];

  // Counter
  document.getElementById('question-counter').textContent =
    `Pertanyaan ${index + 1} dari 20`;

  // Progress bar
  const pct = Math.round(((index + 1) / 20) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';

  // Question text
  document.getElementById('question-text').textContent = q.question;

  // Option buttons
  ['A', 'B', 'C', 'D'].forEach(key => {
    const btn = document.getElementById('opt-' + key);
    btn.textContent = key + '. ' + q.options[key];

    // Reset styles
    btn.className = 'option-btn w-full px-5 py-4 rounded-2xl font-medium text-sm md:text-base';
    btn.disabled  = false;
    btn.onclick   = () => handleAnswer(key);
  });

  // Hide explanation & next
  document.getElementById('explanation-block').classList.add('hidden');
  document.getElementById('btn-next').classList.add('hidden');
}

function handleAnswer(selectedKey) {
  const q = currentQuestions[currentIndex];
  const isCorrect = (selectedKey === q.answer);

  if (isCorrect) score++;

  // Color all buttons
  ['A', 'B', 'C', 'D'].forEach(key => {
    const btn = document.getElementById('opt-' + key);
    btn.disabled = true;
    btn.onclick  = null;

    if (key === q.answer) {
      btn.classList.add('option-correct');
    } else if (key === selectedKey && !isCorrect) {
      btn.classList.add('option-wrong');
    }
  });

  // Show explanation
  document.getElementById('explanation-text').textContent = q.explanation;
  document.getElementById('explanation-block').classList.remove('hidden');

  // Show next button
  document.getElementById('btn-next').classList.remove('hidden');
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < 20) {
    loadQuestion(currentIndex);
  } else {
    showResult();
  }
}

function showResult() {
  showScreen('screen-result');

  const pct = Math.round((score / 20) * 100);

  // Score circle conic gradient
  const circle = document.getElementById('score-circle');
  circle.style.setProperty('--pct', pct + '%');

  // Score display
  document.getElementById('score-display').textContent = `${score} / 20`;

  // Stats
  document.getElementById('stat-correct').textContent = score;
  document.getElementById('stat-wrong').textContent   = 20 - score;
  document.getElementById('stat-pct').textContent     = pct + '%';

  // Title & emoji
  let emoji, title, message;
  if (score === 20) {
    emoji = '🏆'; title = 'Sempurna!';
    message = 'Wow, kamu menjawab semua pertanyaan dengan benar! Kamu benar-benar menguasai PHP!';
  } else if (score >= 17) {
    emoji = '🌟'; title = 'Luar Biasa!';
    message = 'Hasil yang sangat bagus! Pemahamanmu tentang PHP sudah sangat kuat.';
  } else if (score >= 14) {
    emoji = '🎯'; title = 'Bagus Sekali!';
    message = 'Kamu sudah cukup mahir. Terus berlatih untuk mencapai hasil yang lebih baik!';
  } else if (score >= 10) {
    emoji = '👍'; title = 'Lumayan!';
    message = 'Dasar-dasar PHP sudah kamu kuasai. Pelajari topik yang belum dikuasai ya!';
  } else if (score >= 6) {
    emoji = '📚'; title = 'Terus Belajar!';
    message = 'Masih banyak hal yang perlu dipelajari. Jangan menyerah dan terus berlatih!';
  } else {
    emoji = '💪'; title = 'Semangat!';
    message = 'Ini baru permulaan! Pelajari materinya dari awal dan coba lagi. Kamu pasti bisa!';
  }

  document.getElementById('result-emoji').textContent   = emoji;
  document.getElementById('result-title').textContent   = title;
  document.getElementById('result-message').textContent = message;
}

// ============================================================
//  EVENT LISTENERS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-start').addEventListener('click',  startGame);
  document.getElementById('btn-next').addEventListener('click',   nextQuestion);
  document.getElementById('btn-replay').addEventListener('click', startGame);
  document.getElementById('btn-home').addEventListener('click',   () => showScreen('screen-landing'));
});
