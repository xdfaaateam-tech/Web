# DF STUDIOS - Website Official

Website profesional untuk channel DF STUDIOS - Tempatnya film pendek seru yang bikin nagih!

## 🎬 Fitur Utama

### 1. **Hero Section dengan Banner**
   - Banner logo DF STUDIOS yang menarik
   - Call-to-action button untuk support
   - Animasi floating untuk visual yang menarik

### 2. **Sistem Notifikasi Real-time** 🔔
   - Notifikasi donasi muncul di kanan atas
   - Efek animasi yang smooth
   - Suara notifikasi otomatis
   - Auto-close setelah 8 detik

### 3. **Halaman About**
   - Deskripsi lengkap tentang DF STUDIOS
   - 4 fitur unggulan dengan icon
   - Jadwal upload (setiap minggu)
   - Desain card yang responsif

### 4. **Halaman Support/Donasi** 💖
   - Tombol Sociabuzz terintegrasi
   - Link donation alert visual
   - Penjelasan tentang penggunaan donasi
   - Call-to-action yang jelas

### 5. **Social Media Links**
   - Facebook, Instagram, YouTube
   - Design card yang menarik per platform
   - Icon yang colorful sesuai platform

### 6. **Responsive Design**
   - Mobile-friendly
   - Hamburger menu untuk mobile
   - Grid layout yang adaptif
   - Optimized untuk semua device

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur semantic
- **CSS3** - Styling modern dengan gradients dan animations
- **JavaScript Vanilla** - Tanpa framework dependencies
- **Font Awesome** - Icon library
- **Sociabuzz API** - Integration untuk donation button dan alerts

## 📁 Struktur File

```
df-studios-website/
├── index.html          # Halaman utama
├── styles.css          # Styling lengkap
├── script.js           # Functionality & notifications
├── banner.png          # Logo DF STUDIOS (upload file ini)
└── README.md          # Dokumentasi
```

## 🚀 Cara Menggunakan

### 1. **Setup Awal**
   - Download semua file di atas
   - Ganti `banner.png` dengan file banner DF STUDIOS Anda
   - Buka `index.html` di browser

### 2. **Customization**

#### Mengubah Informasi
Edit `index.html` dan ubah:
- Nama channel
- Deskripsi
- Link social media
- Logo/banner

#### Mengubah Warna
Edit `:root` di `styles.css`:
```css
:root {
    --primary-color: #D4AF37;      /* Warna emas */
    --accent-color: #76CC11;       /* Warna hijau */
    --secondary-color: #1a1a2e;    /* Warna gelap */
}
```

#### Integrasi Sociabuzz Real-time
Di `script.js`, uncomment bagian WebSocket untuk real-time donations:
```javascript
const ws = new WebSocket('wss://api.sociabuzz.com/donations');
ws.onmessage = (event) => {
    const donation = JSON.parse(event.data);
    this.showNotification(donation);
};
```

### 3. **Testing Notifikasi**
Buka console browser dan jalankan:
```javascript
testNotification('Nama Anda', 'Rp 50.000');
```

## 📱 Fitur Notifikasi Lengkap

### Notification Properties:
```javascript
{
    name: 'Nama Pendonasi',
    amount: 'Rp 50.000',
    message: 'Pesan custom' // Optional
}
```

### Sound Notification:
- Menggunakan Web Audio API
- Frequency: 800Hz
- Duration: 0.5 detik
- Volume: 0.3 (dapat disesuaikan)

## 🎨 Desain & UI

### Color Scheme
- **Primary**: #D4AF37 (Emas) - Brand color
- **Accent**: #76CC11 (Hijau) - Call-to-action
- **Dark**: #1a1a2e - Background
- **Light**: #f5f5f5 - Secondary background

### Typography
- Font: Segoe UI, Tahoma, Geneva, Verdana
- Headings: Bold & Large
- Body: Regular weight, readable

### Animasi
- Hero banner: Floating effect
- Buttons: Hover transform
- Cards: Lift on hover
- Notifications: Slide in dari kanan
- Shimmer effect pada notification

## 🔗 Link Penting

- **Facebook**: https://www.facebook.com/share/1DkPQ5mVfK/
- **Instagram**: https://www.instagram.com/df_studios.id?igsh=YmN2bXFraHF5YjM1
- **YouTube**: https://youtube.com/@dfstudios01?si=9nUgRmaL09z-_CUU
- **Sociabuzz Donation**: https://sociabuzz.com/pro/tribe/alert1/v3/8187414594...

## 📈 Deployment

### Opsi 1: GitHub Pages
1. Upload ke GitHub repository
2. Enable GitHub Pages di settings
3. Website live di `username.github.io`

### Opsi 2: Netlify
1. Drag & drop folder ke Netlify
2. Website live dalam hitungan detik
3. Custom domain support

### Opsi 3: Hosting Biasa
1. Upload ke hosting provider
2. Akses via domain Anda
3. Setup di cPanel/dashboard

## 📝 Catatan Penting

- Ganti semua placeholder dengan informasi asli Anda
- Upload banner dalam format .png atau .jpg
- Pastikan link social media dan donation link benar
- Test di mobile device sebelum launch
- Monitor notification system di production

## ✨ Bonus Features

- Smooth scrolling antar section
- Mobile hamburger menu
- Intersection observer untuk animasi scroll
- Console function untuk testing
- Meta tags untuk SEO (dapat ditambahkan)

## 🎯 Future Enhancements

- [ ] Dark mode toggle
- [ ] Testimonial section
- [ ] Video gallery integration
- [ ] Blog/News section
- [ ] Contact form
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] Multi-language support

## 💬 Support

Jika ada pertanyaan atau perlu customization lebih lanjut, hubungi:
- Email: support@dfstudios.id
- Social media: @df_studios.id

---

**Dibuat dengan ❤️ untuk DF STUDIOS** 🎬
