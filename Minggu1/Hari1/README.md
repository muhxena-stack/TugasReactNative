# Evaluasi Harian 

---

### *1. Definisi Mobile App Development*

*Mobile App Development* adalah proses membangun aplikasi yang berjalan di perangkat mobile (Android/iOS), mulai dari perancangan, pengkodean, pengujian, hingga rilis ke toko aplikasi.

*Fokus Utama:*
- Memberikan *pengalaman pengguna (UX)* yang sesuai platform (gesture, animasi, tata letak).
- Menjaga *performa stabil* di berbagai tipe perangkat.
- Mematuhi *kebijakan distribusi* Play Store / App Store.

*Output Teknis:*
- File rilis .APK / .AAB (Android) dan .IPA (iOS).
- Sertifikat signing untuk keamanan.
- Konfigurasi permissions dan metadata rilis seperti ikon dan deskripsi aplikasi.

---

### *2. Perbedaan Web Development vs Mobile App Development*

| Aspek | Web | Mobile |
|--------|------|--------|
| *Target Eksekusi* | Browser (DOM, dijalankan lewat internet) | Sistem native (Android/iOS runtime) |
| *Distribusi* | Lewat URL atau hosting website | Lewat toko aplikasi (Play Store / App Store) |
| *Akses Hardware* | Terbatas (kamera lewat API browser) | Luas (kamera, GPS, sensor, notifikasi, dll.) |

*Implikasi Praktis:*
- Aplikasi web cocok untuk akses cepat tanpa instalasi, tapi tidak bisa akses fitur dalam perangkat sepenuhnya.  
- Sebaliknya, aplikasi mobile bisa akses sensor atau kamera langsung, tapi perlu proses rilis dan update di toko aplikasi.

---

### *3. Tahap Discovery & Requirement*

Tahap *Discovery & Requirement* adalah langkah awal untuk memahami:
- Masalah utama yang ingin diselesaikan.
- Siapa target pengguna (Android, iOS, atau keduanya).
- Fitur utama (misal: offline mode atau real-time online data).

*Pengaruh terhadap keputusan platform:*
- Jika target pengguna mayoritas Android → fokus ke Android dulu.
- Jika butuh performa tinggi (misal game) → native mungkin lebih cocok.
- Jika butuh offline mode → perlu analisis penyimpanan lokal dan sinkronisasi data.

---

### *4. Tahapan Perancangan Arsitektur & Teknologi (React Native)*

Tahap ini menentukan *struktur dan teknologi utama* aplikasi.

Dalam *React Native*, yang perlu dirancang:
- *State Management* → bagaimana data disimpan dan berubah (misal: Context API, Redux, Zustand).
- *Navigasi* → bagaimana pengguna berpindah antar layar (misal: React Navigation).
- *Error handling & logging* → agar aplikasi tetap stabil.

*Kenapa penting?*
Tanpa perancangan arsitektur yang baik, aplikasi akan sulit dikembangkan, mudah bug, dan performanya tidak optimal.

---

### *5. Native vs Hybrid Development*

| Pendekatan | Keuntungan | Kekurangan | Contoh Framework |
|-------------|-------------|-------------|------------------|
| *Native* | - Performa terbaik.<br>- Akses penuh ke API perangkat.<br>- UX paling halus dan sesuai platform. | - Dua codebase terpisah (Android & iOS).<br>- Biaya dan waktu lebih besar. | Android Studio (Kotlin), Xcode (Swift) |
| *Hybrid* | - Satu codebase untuk semua platform.<br>- Cepat dan murah dikembangkan. | - Performa kurang maksimal (tergantung WebView).<br>- UX tidak sehalus native. | Ionic, Apache Cordova |

---

### *6. Cross-Platform Native Development*

*Cross-Platform Native Development* memungkinkan developer menulis *satu kode* (biasanya dengan JavaScript atau Dart) untuk membuat aplikasi *native di Android dan iOS* sekaligus.

| Aspek | Cross-Platform | Native |
|--------|----------------|--------|
| *Codebase* | Satu untuk semua platform | Terpisah per platform |
| *Performa* | Hampir sama dengan native | Performa maksimal |
| *Waktu & Biaya* | Lebih efisien | Lebih mahal dan lama |
| *Contoh* | React Native, Flutter | Kotlin (Android), Swift (iOS) |

---

### *7. Posisi React Native dalam Ekosistem Mobile*

React Native berada di kategori *cross-platform native framework*.  
Artinya, React Native memungkinkan developer membuat aplikasi mobile *dengan JavaScript dan React, tapi **UI-nya tetap native*, bukan web.

| Aspek | ReactJS | React Native |
|--------|----------|--------------|
| *Target* | Browser (DOM) | Perangkat (UI Native) |
| *Komponen* | <div>, <p>, <span> | <View>, <Text>, <Image> |
| *Styling* | CSS | StyleSheet (JS Object mirip Flexbox) |

---

### *8. Tantangan Mobile vs Web & Solusi React Native*

*Tantangan Utama Mobile:*
- Harus stabil di banyak perangkat & ukuran layar.
- Perlu izin akses (kamera, lokasi, dll.).
- Update versi lambat (karena lewat store).
- Optimasi memori dan baterai penting.

*Solusi React Native:*
- Gunakan satu codebase (efisien untuk banyak perangkat).  
- Komponen native otomatis adaptif ke Android/iOS.  
- Akses hardware lewat API RN (kamera, GPS, notifikasi).  
- Update cepat via OTA (Over The Air update).

---

### *9. Tahapan Pengujian dan Build, Signing, serta Release*

*1. Pengujian (Testing):*
- Unit test → menggunakan Jest untuk menguji fungsi kecil.
- E2E test → menggunakan Detox untuk simulasi interaksi pengguna.
- Manual test → di emulator atau perangkat nyata.

*2. Build:*
- Mengubah kode JS menjadi aplikasi .apk, .aab, atau .ipa.
- Dilakukan dengan perintah seperti npx react-native run-android.

*3. Signing:*
- Menandatangani aplikasi dengan sertifikat digital untuk keamanan dan identitas developer.

*4. Release:*
- Upload ke Play Store / App Store.
- Lengkapi metadata: ikon, deskripsi, kebijakan privasi.

---

### *10. Mengapa React Native Menjadi Pilihan Saat Ini*

React Native populer karena kombinasi *efisiensi, performa, dan kemudahan belajar*.

*Keunggulan utama:*
✅ Satu codebase untuk Android & iOS  
✅ Performa hampir sama dengan native  
✅ Ekosistem dan komunitas besar  
✅ Banyak library siap pakai  
✅ Proses pengembangan cepat dan fleksibel  

Cocok untuk startup atau tim kecil yang ingin membangun aplikasi *cepat, efisien, dan tetap terasa native.*

---