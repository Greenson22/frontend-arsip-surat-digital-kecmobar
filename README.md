# Arsip Surat Digital - Kecamatan Motoling Barat (Frontend)

Repositori ini berisi kode *frontend* untuk aplikasi web Arsip Surat Digital, yang dirancang khusus untuk Kecamatan Motoling Barat (Kecmobar). Aplikasi ini dibangun menggunakan React, Vite, dan Redux Toolkit.

**Dibuat oleh Frendy Gerung**

## 📜 Deskripsi Proyek

Aplikasi ini berfungsi sebagai platform terpusat untuk mengelola, mengarsipkan, dan melacak surat masuk dan surat keluar dalam format digital. Tujuannya adalah untuk memodernisasi proses administrasi persuratan, membuatnya lebih efisien, mudah diakses, dan terorganisir.

Aplikasi ini terhubung ke *backend* API untuk mengelola semua data dan dilengkapi dengan fitur-fitur canggih seperti analisis surat berbasis AI untuk mengekstrak data secara otomatis dari dokumen PDF yang diunggah.

## ✨ Fitur Utama

* **Autentikasi Pengguna:** Sistem login aman menggunakan JWT (JSON Web Token), lengkap dengan validasi token dan mekanisme *refresh token*.
* **Manajemen Surat Masuk:** Fungsionalitas CRUD (Create, Read, Update, Delete) penuh untuk surat masuk.
* **Manajemen Surat Keluar:** Fungsionalitas CRUD penuh untuk surat keluar.
* **Manajemen Pengguna (Admin):** Kemampuan bagi *superuser* untuk menambah, melihat, dan mengedit profil pengguna lain, serta mengelola status (aktif/nonaktif).
* **Analisis Surat Berbasis AI:**

  * Secara otomatis mengekstrak entitas penting (seperti nomor surat, tanggal, perihal, asal, dan tujuan) dari file PDF yang diunggah.
  * Mendukung analisis untuk surat masuk dan surat keluar.
* **Klasifikasi Surat Berbasis AI:**

  * Halaman khusus untuk mengklasifikasikan surat masuk dan keluar yang belum terklasifikasi.
  * Kemampuan untuk mengklasifikasikan semua surat sekaligus.
* **Konfigurasi Dinamis:**

  * **Pengaturan Hostname:** Memungkinkan pengguna untuk beralih antara *endpoint* API (Local, Public, atau Kustom) langsung dari aplikasi.
  * **Pemilihan Model GenAI:** Pengguna dapat memilih model AI generatif (seperti Gemini Pro, Gemini Flash, dll.) yang akan digunakan untuk analisis surat.
* **Penanganan File:**

  * Upload satu per satu atau **beberapa file PDF sekaligus**.
  * Pratinjau (preview) dokumen PDF langsung di dalam *modal* aplikasi.
* **Antarmuka Pengguna (UI) yang Responsif:**

  * Tabel data dengan fitur **pencarian**, **pagination**, dan pemilihan **jumlah entri per halaman**.
  * Tata letak modern dengan *sidebar* yang dapat diciutkan (collapsible).
  * Tampilan *login* yang adaptif, mendeteksi mode *local development*.

## 🛠️ Teknologi yang Digunakan

* **Framework/Library:** [React](https://react.dev/)
* **Bundler:** [Vite](https://vitejs.dev/)
* **Manajemen State:** [Redux Toolkit](https://redux-toolkit.js.org/)
* **Routing:** [React Router v6](https://reactrouter.com/)
* **UI & Styling:**

  * [MDB React UI Kit](https://mdbootstrap.com/docs/react/)
  * [Bootstrap 5](https://getbootstrap.com/)
  * [FontAwesome](https://fontawesome.com/)
* **Klien HTTP:** [Axios](https://axios-http.com/)
* **Utilitas:**

  * [JWT Decode](https://github.com/auth0/jwt-decode) (untuk autentikasi)
  * [SweetAlert2](https://sweetalert2.github.io/) (untuk notifikasi dan konfirmasi)

## 📂 Struktur Proyek

Struktur direktori utama dalam `src` diatur sebagai berikut:

```
/src
├── /assets         # Gambar, SVG, dan data JSON statis
├── /components     # Komponen React
│   ├── /Elements   # Komponen UI dasar (Tombol, Card, Modal, Tabel)
│   ├── /Fragments  # Komponen UI gabungan (Navbar, Sidebar, Modal spesifik)
│   ├── /Layouts    # Tata letak halaman utama (Container, Login, Mail Layouts)
│   └── /pages      # Komponen halaman (Home, Login, IncomingMail, dll.)
├── /config         # Konfigurasi aplikasi
│   └── /Router     # Pengaturan React Router
├── /hooks          # Kumpulan custom hooks (logika bisnis utama)
│   ├── /actions    # Logika aksi utama per halaman (data fetching, state update)
│   ├── /alert      # Hooks untuk menampilkan notifikasi SweetAlert
│   ├── /effects    # Hooks 'useEffect' yang dapat digunakan kembali
│   ├── /form_data  # Hooks untuk mempersiapkan FormData
│   ├── /handle     # Hooks untuk event handler spesifik
│   ├── /page       # Hooks terkait navigasi dan efek halaman
│   ├── /pagination # Hooks untuk logika pagination
│   ├── /request    # Hooks untuk abstraksi request Axios (GET, POST, PUT, DELETE)
│   ├── /security   # Hooks untuk validasi login dan token
│   └── /url        # Hooks utilitas untuk memanipulasi URL
├── /redux          # Konfigurasi Redux Toolkit
│   ├── /slices     # Definisi slice (command, data, pagination)
│   └── store.js    # Konfigurasi store Redux
└── main.jsx        # Titik masuk aplikasi
```

## 🚀 Panduan Instalasi dan Menjalankan

1. **Clone Repositori:**

   ```bash
   git clone https://github.com/greenson22/frontend-arsip-surat-digital-kecmobar.git
   cd frontend-arsip-surat-digital-kecmobar
   ```

2. **Instal Dependensi:**

   ```bash
   npm install
   ```

3. **Buat File Environment:**
   Buat file `.env` di direktori *root* proyek dan isi dengan variabel yang diperlukan. (Lihat bagian di bawah).

4. **Jalankan Server Pengembangan:**

   ```bash
   npm run dev
   ```

   Aplikasi akan berjalan di `http://localhost:5173` (atau port lain yang tersedia).

## 🔑 Variabel Environment (.env)

Aplikasi ini bergantung pada beberapa variabel environment untuk terhubung ke API. Pastikan file `.env` Anda berisi variabel-variabel berikut:

```env
# URL dasar untuk API (pilihan default saat pertama kali memuat)
VITE_HOSTNAME_PUBLIC="https://api.public.com"
VITE_HOSTNAME_LOCAL="http://localhost:8000"

# Endpoint API
VITE_ACCESS_TOKEN_API_KEY="/api/token/"
VITE_REFRESH_TOKEN_API_KEY="/api/token/refresh/"
VITE_USERS_API_KEY="/users/?page=1&page_size=5"
VITE_INCOMINGMAIL_API_KEY="/incoming_mail/?page=1&page_size=5"
VITE_OUTGOINGMAIL_API_KEY="/outgoing_mail/?page=1&page_size=5"
VITE_GENAI_API_KEY="/genai/"
VITE_CLASSIFY_LETTER_API_KEY="/classify/"
```

**Catatan:** *Endpoint* di atas didasarkan pada referensi dalam kode. Sesuaikan nilai *string* agar cocok dengan arsitektur *backend* Anda.
