export interface Project {
  id: string;
  name: string;
  developer: string;
  location: string;
  area: string;
  address: string;
  mapsUrl: string;
  product: string;
  totalUnits: number;
  bookedUnits: number;
  bookingFee: string;
  images: string[];
  specs: string[];
  simulation: {
    tenor: string;
    rows: { dp: string; amount: string }[];
  }[];
  tag: string;
}

export const projects: Project[] = [
  {
    id: "ayyana-residence",
    name: "Ayyana Residence",
    developer: "Cozy Land Group",
    location: "Pringgabaya, Lombok Timur, NTB",
    area: "Pringgabaya",
    address: "Depan Kompi TNI Pringgabaya, sebelum Pertamina Labuan Lombok",
    mapsUrl: "https://maps.app.goo.gl/RHiwpVJaFGR49BH78",
    product: "Rumah subsidi Type 30/80",
    totalUnits: 35,
    bookedUnits: 8,
    bookingFee: "Rp500.000",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    specs: [
      "Rumah subsidi Type 30/80",
      "2 kamar tidur",
      "KM/WC",
      "Ruang keluarga",
      "Meja dapur",
      "Sisa tanah depan dan belakang",
      "Listrik 1300 VA",
      "Jalan paving block",
      "Sumur bor",
      "Pondasi batu kali / batu belah",
      "Struktur beton bertulang SNI",
      "Dinding bata merah",
      "Lantai keramik",
      "Kusen aluminium",
      "Plafon gypsum board",
    ],
    simulation: [
      {
        tenor: "10 Tahun",
        rows: [
          { dp: "0%", amount: "Rp1.953.400" },
          { dp: "1%", amount: "Rp1.933.900" },
          { dp: "5%", amount: "Rp1.855.700" },
          { dp: "10%", amount: "Rp1.758.100" },
        ],
      },
      {
        tenor: "15 Tahun",
        rows: [
          { dp: "0%", amount: "Rp1.435.200" },
          { dp: "1%", amount: "Rp1.438.700" },
          { dp: "5%", amount: "Rp1.380.600" },
          { dp: "10%", amount: "Rp1.307.900" },
        ],
      },
      {
        tenor: "20 Tahun",
        rows: [
          { dp: "0%", amount: "Rp1.210.400" },
          { dp: "1%", amount: "Rp1.170.300" },
          { dp: "5%", amount: "Rp1.149.900" },
          { dp: "10%", amount: "Rp1.089.300" },
        ],
      },
    ],
    tag: "Hot Project",
  },
];

export const WA_NUMBER = "6285173221561";
export const WA_LINK =
  "https://wa.me/6285173221561?text=Halo%20RumahPertama%2C%20saya%20ingin%20konsultasi%20rumah%20pertama.%20Saya%20tertarik%20dengan%20Ayyana%20Residence%20atau%20proyek%20lain%20yang%20cocok%20untuk%20saya.";
export const WA_LINK_AYYANA =
  "https://wa.me/6285173221561?text=Halo%20RumahPertama%2C%20saya%20tertarik%20dengan%20Ayyana%20Residence%20Pringgabaya.%20Boleh%20info%20lebih%20lanjut%3F";

export const problemCards = [
  "Bingung syarat rumah subsidi",
  "Takut salah pilih lokasi",
  "Belum tahu estimasi cicilan",
  "Ragu proses KPR",
  "Butuh pendampingan yang jelas",
];

export const solutionCards = [
  "Konsultasi kebutuhan rumah",
  "Cek syarat awal",
  "Rekomendasi proyek yang cocok",
  "Simulasi cicilan",
  "Jadwal survey lokasi",
  "Pendampingan proses KPR",
];

export const requirements = [
  "Fotokopi KTP, KK, Buku Nikah/Cerai",
  "Pas foto terbaru pemohon dan pasangan",
  "Slip gaji / keterangan penghasilan",
  "Rekening koran 3 bulan terakhir",
  "Fotokopi NPWP",
  "Surat keterangan tidak memiliki rumah",
  "Usia minimal 21 tahun",
  "Masa kerja minimal 1 tahun",
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Klik WhatsApp",
    desc: "Hubungi kami via WhatsApp untuk konsultasi awal",
  },
  {
    step: 2,
    title: "Ceritakan kebutuhan dan budget",
    desc: "Tim kami akan mendengarkan kebutuhan rumah pertama kamu",
  },
  {
    step: 3,
    title: "Dibantu cek syarat awal",
    desc: "Kami bantu periksa dokumen dan persyaratan dasar",
  },
  {
    step: 4,
    title: "Direkomendasikan proyek yang cocok",
    desc: "Kami arahkan ke proyek yang sesuai kebutuhan & budget kamu",
  },
  {
    step: 5,
    title: "Jadwalkan survey lokasi",
    desc: "Kunjungi langsung lokasi proyek yang direkomendasikan",
  },
  {
    step: 6,
    title: "Lanjut booking dan proses KPR jika cocok",
    desc: "Booking unit pilihan dan proses KPR dengan pendampingan",
  },
];

export const faqs = [
  {
    q: "Apa itu RumahPertama?",
    a: "RumahPertama adalah layanan konsultasi untuk membantu kamu yang sedang mencari rumah pertama. Kami bantu cek kebutuhan, syarat awal, estimasi cicilan, dan mengarahkan kamu ke proyek rumah yang cocok.",
  },
  {
    q: "Apakah konsultasi benar-benar gratis?",
    a: "Ya, 100% gratis tanpa biaya tersembunyi. Kamu bisa konsultasi via WhatsApp untuk diskusi kebutuhan, budget, dan tipe rumah yang cocok. Tidak ada komitmen apapun di awal.",
  },
  {
    q: "Apakah RumahPertama hanya punya proyek Ayyana Residence?",
    a: "Saat ini Ayyana Residence adalah proyek pilihan kami. Namun RumahPertama bisa mengarahkan kamu ke proyek-proyek lain yang sesuai dengan kebutuhan dan lokasi yang kamu inginkan. Konsultasikan preferensi kamu dengan tim kami.",
  },
  {
    q: "Berapa minimal penghasilan untuk KPR rumah subsidi?",
    a: "Syarat penghasilan mengikuti ketentuan pemerintah untuk rumah subsidi. Umumnya penghasilan pokok maksimal sekitar Rp6-8 juta/bulan (tergantung wilayah). Kami bantu hitungkan dan cek kelayakan kamu saat konsultasi.",
  },
  {
    q: "Berapa lama proses KPR sampai akad?",
    a: "Rata-rata proses dari konsultasi awal hingga akad sekitar 2-4 bulan, tergantung kelengkapan dokumen dan antrian bank. Tim kami akan mendampingi di setiap tahap.",
  },
  {
    q: "Apakah bisa survey lokasi dulu sebelum booking?",
    a: "Tentu. Kami justru mendorong kamu untuk survey lokasi langsung. Hubungi kami untuk jadwalkan kunjungan ke Ayyana Residence atau proyek lain yang direkomendasikan.",
  },
  {
    q: "Bagaimana jika pengajuan KPR ditolak?",
    a: "Kami akan bantu analisis penyebab penolakan dan memberikan rekomendasi langkah selanjutnya — baik perbaikan dokumen, pengajuan ulang, atau opsi bank lain yang lebih cocok dengan profil kamu.",
  },
  {
    q: "Apakah Ayyana Residence masih tersedia?",
    a: "Ayyana Residence tahap pertama menyediakan 35 unit, dan saat ini sudah 8 unit yang dibooking. Tersisa 27 unit. Ketersediaan bisa berubah sewaktu-waktu. Segera konsultasi via WhatsApp untuk info unit terbaru.",
  },
];
