# 📱 Hari ke-2: Pengenalan React Native & Setup Environment (Tugas)

## 1. Konsep Dasar React Native dan Peran New Architecture

React Native adalah **framework open-source** untuk membangun aplikasi **mobile native (Android & iOS)** menggunakan **JavaScript atau TypeScript** dengan konsep **React (komponen, state, props)**.  
Berbeda dengan **React untuk web** yang merender UI ke **DOM (HTML dan CSS)**, React Native merender ke **komponen native** seperti `View`, `Text`, dan `Button`, sehingga aplikasi terasa dan berperforma seperti aplikasi native asli.

Pada **React Native v0.80**, diperkenalkan **New Architecture** yang menggantikan sistem lama berbasis *Bridge* dengan teknologi baru seperti **JSI (JavaScript Interface)**, **Fabric Renderer**, dan **TurboModules**.  
- *Bridge lama*: komunikasi JS ↔ native bersifat asynchronous dan lambat.  
- *JSI baru*: komunikasi langsung (synchronous), mengurangi *latency* hingga 50%.  

Dampaknya, aplikasi menjadi **lebih cepat, lebih efisien, dan stabil** terutama untuk operasi kompleks seperti animasi atau data intensif.

---

## 2. Perbandingan React Native CLI dan Expo

| Aspek | React Native CLI | Expo |
|-------|------------------|------|
| **Arsitektur** | Menghasilkan proyek *bare* dengan akses penuh ke folder `android/` dan `ios/`. | Menggunakan *managed workflow* dengan native code disembunyikan. |
| **Proses Build** | Build lokal menggunakan Gradle (Android) / Xcode (iOS). | Build menggunakan **Expo Go** / **EAS Build** (cloud). |

### Kelebihan & Kekurangan
- **React Native CLI**
  - ✅ *Kelebihan:* Akses penuh ke native code → bisa buat modul custom (misalnya Bluetooth, kamera khusus).
  - ❌ *Kekurangan:* Setup kompleks dan rawan error konfigurasi.
- **Expo**
  - ✅ *Kelebihan:* Setup cepat, langsung jalan lewat Expo Go tanpa build manual.
  - ❌ *Kekurangan:* Tidak bisa ubah native code di *managed workflow* (harus eject untuk custom).

### Contoh Skenario
- Gunakan **Expo** untuk proyek sederhana seperti **MVP, e-commerce, atau aplikasi demo** karena setup cepat dan stabil.  
- Gunakan **React Native CLI** untuk proyek **kompleks yang butuh modul native atau performa tinggi**, seperti game atau aplikasi hardware integration.

---

## 3. Fungsi SDK Platforms, Build Tools, dan Platform Tools (Android)

| Komponen | Fungsi | Masalah jika tidak ada |
|-----------|---------|-------------------------|
| **SDK Platforms (android-35)** | Menyediakan API Android 15 untuk *compile & target* OS terbaru. | Error `failed to find target android-35` saat build. |
| **Build Tools (35.0.0)** | Berisi alat seperti `aapt2`, `zipalign`, `apksigner` untuk memproses resource & build APK/AAB. | Error `aapt2 not found` atau `task assembleDebug failed`. |
| **Platform Tools** | Termasuk `adb` (Android Debug Bridge) untuk install & jalankan app di emulator/device. | Tidak bisa menjalankan app, error `adb command not found`. |

Tanpa salah satu dari tiga komponen ini, perintah `npx react-native run-android` tidak dapat berjalan sempurna karena sistem kehilangan salah satu elemen build pipeline utama.

---

## 4. Prasyarat Umum Setup React Native CLI v0.80

| Komponen | Versi | Alasan Diperlukan |
|-----------|--------|-------------------|
| **Node.js (20.18+)** | Runtime JavaScript yang menjalankan Metro Bundler dan CLI commands. Tanpa Node, `npx react-native init` tidak bisa dijalankan. |
| **Watchman (2025.04+)** | Tool untuk memantau perubahan file agar *fast refresh/hot reload* berfungsi dengan baik. |
| **Yarn (4.5+, opsional)** | Package manager yang lebih cepat dan stabil untuk mengelola dependencies dibanding npm. |

Ketiga komponen ini berfungsi sebagai **jembatan antara kode JavaScript dan native runtime**:  
- Node menjalankan proses bundling.  
- Watchman mendeteksi perubahan kode secara real-time.  
- Yarn memastikan dependency tersinkronisasi di berbagai platform.

---

## 5. Struktur Folder Proyek React Native CLI

```plaintext
MyFirstApp/
├── android/          # Kode native Android (Gradle, Java/Kotlin)
├── ios/              # Kode native iOS (Xcode, Swift/Obj-C)
├── App.js            # Komponen utama UI aplikasi
├── index.js          # Entry point JS untuk mendaftarkan App ke runtime native
├── metro.config.js   # Konfigurasi bundling dengan Metro
├── package.json      # Metadata proyek & scripts npm/yarn
├── babel.config.js   # Transpilasi JSX/TS ke JS
└── node_modules/     # Dependencies (jangan diubah manual)
