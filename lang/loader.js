// ================================================================
// LANGUAGE LOADER - Star Tools
// ================================================================

var langData = {};
var currentLang = localStorage.getItem('appLanguage') || 'id';

// ===== LOAD LANGUAGE FILE =====
function loadLanguage(lang) {
  return fetch('lang/' + lang + '.json')
    .then(function(response) {
      if (!response.ok) throw new Error('Gagal load bahasa');
      return response.json();
    })
    .then(function(data) {
      langData = data;
      currentLang = lang;
      localStorage.setItem('appLanguage', lang);
      return data;
    })
    .catch(function(error) {
      console.error('Error load language:', error);
      return fetch('lang/id.json').then(function(res) {
        return res.json();
      }).then(function(data) {
        langData = data;
        currentLang = 'id';
        return data;
      });
    });
}

// ===== TRANSLATE =====
function t(key) {
  return langData[key] || key;
}

// ===== APPLY TRANSLATION TO PAGE =====
function applyTranslations() {
  // Sidebar
  document.querySelectorAll('.sidebar-text').forEach(function(el, i) {
    var keys = ['sidebar_utama', 'sidebar_berita', 'sidebar_premium', 'sidebar_akun', 'sidebar_kelas'];
    if (i < keys.length) el.innerText = t(keys[i]);
  });

  // Back
  var backEl = document.getElementById('subHeaderTitle');
  if (backEl) backEl.innerText = t('back');

  // Main Menu Grid
  document.querySelectorAll('.menu-edit-profil').forEach(function(el) { el.innerText = t('menu_edit_profil'); });
  document.querySelectorAll('.menu-ubah-data').forEach(function(el) { el.innerText = t('menu_ubah_data'); });
  document.querySelectorAll('.menu-riwayat').forEach(function(el) { el.innerText = t('menu_riwayat'); });
  document.querySelectorAll('.menu-aktivitas').forEach(function(el) { el.innerText = t('menu_aktivitas'); });
  document.querySelectorAll('.menu-ganti-tema').forEach(function(el) { el.innerText = t('menu_ganti_tema'); });
  document.querySelectorAll('.menu-tentang').forEach(function(el) { el.innerText = t('menu_tentang'); });
  document.querySelectorAll('.menu-info-app').forEach(function(el) { el.innerText = t('menu_info_app'); });
  document.querySelectorAll('.menu-bantuan').forEach(function(el) { el.innerText = t('menu_bantuan'); });
  document.querySelectorAll('.menu-pusat-bantuan').forEach(function(el) { el.innerText = t('menu_pusat_bantuan'); });
  document.querySelectorAll('.menu-kelola-akun').forEach(function(el) { el.innerText = t('menu_kelola_akun'); });
  document.querySelectorAll('.menu-keamanan').forEach(function(el) { el.innerText = t('menu_keamanan'); });

  // Menu List
  document.querySelectorAll('.menu-pengaturan').forEach(function(el) { el.innerText = t('menu_pengaturan'); });
  document.querySelectorAll('.menu-pengaturan-sub').forEach(function(el) { el.innerText = t('menu_pengaturan_sub'); });
  document.querySelectorAll('.menu-prestasi').forEach(function(el) { el.innerText = t('menu_prestasi'); });
  document.querySelectorAll('.menu-prestasi-sub').forEach(function(el) { el.innerText = t('menu_prestasi_sub'); });
  document.querySelectorAll('.menu-privasi').forEach(function(el) { el.innerText = t('menu_privasi'); });
  document.querySelectorAll('.menu-privasi-sub').forEach(function(el) { el.innerText = t('menu_privasi_sub'); });
  document.querySelectorAll('.menu-pelayanan').forEach(function(el) { el.innerText = t('menu_pelayanan'); });
  document.querySelectorAll('.menu-pelayanan-sub').forEach(function(el) { el.innerText = t('menu_pelayanan_sub'); });
  document.querySelectorAll('.menu-logout').forEach(function(el) { el.innerText = t('menu_logout'); });
  document.querySelectorAll('.menu-logout-sub').forEach(function(el) { el.innerText = t('menu_logout_sub'); });

  // Edit Profile
  document.querySelectorAll('.page-edit-title').forEach(function(el) { el.innerText = t('edit_title'); });
  document.querySelectorAll('.page-edit-sub').forEach(function(el) { el.innerText = t('edit_sub'); });
  document.querySelectorAll('.page-tap-ganti').forEach(function(el) { el.innerText = t('edit_tap'); });
  document.querySelectorAll('.page-simpan').forEach(function(el) { el.innerText = t('edit_simpan'); });

  // Kelola Akun
  document.querySelectorAll('.page-kelola-title').forEach(function(el) { el.innerText = t('kelola_title'); });
  document.querySelectorAll('.page-kelola-sub').forEach(function(el) { el.innerText = t('kelola_sub'); });
  document.querySelectorAll('.page-ganti-pass').forEach(function(el) { el.innerText = t('ganti_pass'); });
  document.querySelectorAll('.page-ganti-pass-sub').forEach(function(el) { el.innerText = t('ganti_pass_sub'); });
  document.querySelectorAll('.page-ganti-email').forEach(function(el) { el.innerText = t('ganti_email'); });
  document.querySelectorAll('.page-ganti-email-sub').forEach(function(el) { el.innerText = t('ganti_email_sub'); });
  document.querySelectorAll('.page-privasi').forEach(function(el) { el.innerText = t('privasi'); });
  document.querySelectorAll('.page-privasi-sub').forEach(function(el) { el.innerText = t('privasi_sub'); });
  document.querySelectorAll('.page-sesi').forEach(function(el) { el.innerText = t('sesi'); });
  document.querySelectorAll('.page-sesi-sub').forEach(function(el) { el.innerText = t('sesi_sub'); });

  // Ganti Password
  document.querySelectorAll('.page-ganti-pass-title').forEach(function(el) { el.innerText = t('ganti_pass_title'); });
  document.querySelectorAll('.page-ganti-pass-sub2').forEach(function(el) { el.innerText = t('ganti_pass_sub'); });
  document.querySelectorAll('.page-ganti-pass-btn').forEach(function(el) { el.innerText = t('ganti_pass_btn'); });

  // Ganti Email
  document.querySelectorAll('.page-ganti-email-title').forEach(function(el) { el.innerText = t('ganti_email_title'); });
  document.querySelectorAll('.page-ganti-email-sub2').forEach(function(el) { el.innerText = t('ganti_email_sub'); });
  document.querySelectorAll('.page-ganti-email-btn').forEach(function(el) { el.innerText = t('ganti_email_btn'); });

  // Sesi
  document.querySelectorAll('.page-sesi-title').forEach(function(el) { el.innerText = t('sesi_title'); });
  document.querySelectorAll('.page-sesi-sub2').forEach(function(el) { el.innerText = t('sesi_sub2'); });
  document.querySelectorAll('.page-aktif').forEach(function(el) { el.innerText = t('sesi_aktif'); });
  document.querySelectorAll('.page-sesi-note').forEach(function(el) { el.innerText = t('sesi_note'); });

  // Riwayat
  document.querySelectorAll('.page-riwayat-title').forEach(function(el) { el.innerText = t('riwayat_title'); });
  document.querySelectorAll('.page-riwayat-sub').forEach(function(el) { el.innerText = t('riwayat_sub'); });

  // Tentang
  document.querySelectorAll('.page-tentang-title').forEach(function(el) { el.innerText = t('tentang_title'); });
  document.querySelectorAll('.page-tentang-sub').forEach(function(el) { el.innerText = t('tentang_sub'); });
  document.querySelectorAll('.page-tentang-desc').forEach(function(el) { el.innerText = t('tentang_desc'); });
  document.querySelectorAll('.page-tujuan').forEach(function(el) { el.innerText = t('tentang_tujuan'); });
  document.querySelectorAll('.page-tujuan1').forEach(function(el) { el.innerText = t('tentang_tujuan1'); });
  document.querySelectorAll('.page-tujuan2').forEach(function(el) { el.innerText = t('tentang_tujuan2'); });
  document.querySelectorAll('.page-tujuan3').forEach(function(el) { el.innerText = t('tentang_tujuan3'); });

  // Bantuan
  document.querySelectorAll('.page-bantuan-title').forEach(function(el) { el.innerText = t('bantuan_title'); });
  document.querySelectorAll('.page-bantuan-sub').forEach(function(el) { el.innerText = t('bantuan_sub'); });
  document.querySelectorAll('.page-faq1-q').forEach(function(el) { el.innerText = t('faq1_q'); });
  document.querySelectorAll('.page-faq1-a').forEach(function(el) { el.innerText = t('faq1_a'); });
  document.querySelectorAll('.page-faq2-q').forEach(function(el) { el.innerText = t('faq2_q'); });
  document.querySelectorAll('.page-faq2-a').forEach(function(el) { el.innerText = t('faq2_a'); });
  document.querySelectorAll('.page-faq3-q').forEach(function(el) { el.innerText = t('faq3_q'); });
  document.querySelectorAll('.page-faq3-a').forEach(function(el) { el.innerText = t('faq3_a'); });

  // Pengaturan
  document.querySelectorAll('.page-pengaturan-title').forEach(function(el) { el.innerText = t('pengaturan_title'); });
  document.querySelectorAll('.page-pengaturan-sub').forEach(function(el) { el.innerText = t('pengaturan_sub'); });
  document.querySelectorAll('.page-notif-label').forEach(function(el) { el.innerText = t('notif_label'); });
  document.querySelectorAll('.page-notif-sub').forEach(function(el) { el.innerText = t('notif_sub'); });
  document.querySelectorAll('.page-dark-label').forEach(function(el) { el.innerText = t('dark_label'); });
  document.querySelectorAll('.page-dark-sub').forEach(function(el) { el.innerText = t('dark_sub'); });
  document.querySelectorAll('.page-bahasa-label').forEach(function(el) { el.innerText = t('bahasa_label'); });
  document.querySelectorAll('.page-bahasa-sub').forEach(function(el) { el.innerText = t('bahasa_sub'); });
  document.querySelectorAll('.page-reset-label').forEach(function(el) { el.innerText = t('reset_label'); });
  document.querySelectorAll('.page-reset-sub').forEach(function(el) { el.innerText = t('reset_sub'); });
  document.querySelectorAll('.page-reset-btn').forEach(function(el) { el.innerText = t('reset_btn'); });

  // Prestasi
  document.querySelectorAll('.page-prestasi-title').forEach(function(el) { el.innerText = t('prestasi_title'); });
  document.querySelectorAll('.page-prestasi-sub2').forEach(function(el) { el.innerText = t('prestasi_sub'); });
  document.querySelectorAll('.page-prestasi-empty').forEach(function(el) { el.innerText = t('prestasi_empty'); });
  document.querySelectorAll('.page-prestasi-empty-desc').forEach(function(el) { el.innerText = t('prestasi_empty_desc'); });

  // Keamanan
  document.querySelectorAll('.page-keamanan-title').forEach(function(el) { el.innerText = t('keamanan_title'); });
  document.querySelectorAll('.page-keamanan-sub').forEach(function(el) { el.innerText = t('keamanan_sub'); });
  document.querySelectorAll('.page-data-title').forEach(function(el) { el.innerText = t('data_title'); });
  document.querySelectorAll('.page-data1').forEach(function(el) { el.innerText = t('data1'); });
  document.querySelectorAll('.page-data2').forEach(function(el) { el.innerText = t('data2'); });
  document.querySelectorAll('.page-data3').forEach(function(el) { el.innerText = t('data3'); });
  document.querySelectorAll('.page-data4').forEach(function(el) { el.innerText = t('data4'); });
  document.querySelectorAll('.page-keamanan-title2').forEach(function(el) { el.innerText = t('keamanan_title2'); });
  document.querySelectorAll('.page-keamanan1').forEach(function(el) { el.innerText = t('keamanan1'); });
  document.querySelectorAll('.page-keamanan2').forEach(function(el) { el.innerText = t('keamanan2'); });
  document.querySelectorAll('.page-keamanan3').forEach(function(el) { el.innerText = t('keamanan3'); });
  document.querySelectorAll('.page-hapus-data').forEach(function(el) { el.innerText = t('hapus_data'); });

  // Logout
  document.querySelectorAll('.logout-confirm-text').forEach(function(el) { el.innerText = t('logout_confirm'); });
  document.querySelectorAll('.logout-batal').forEach(function(el) { el.innerText = t('logout_batal'); });
  document.querySelectorAll('.logout-keluar').forEach(function(el) { el.innerText = t('logout_keluar'); });

  // Bottom Nav
  document.querySelectorAll('.nav-utama').forEach(function(el) { el.innerText = t('nav_utama'); });
  document.querySelectorAll('.nav-berita').forEach(function(el) { el.innerText = t('nav_berita'); });
  document.querySelectorAll('.nav-premium').forEach(function(el) { el.innerText = t('nav_premium'); });
  document.querySelectorAll('.nav-akun').forEach(function(el) { el.innerText = t('nav_akun'); });
  document.querySelectorAll('.nav-kelas').forEach(function(el) { el.innerText = t('nav_kelas'); });

  // Alert
  document.querySelectorAll('.alert-ok').forEach(function(el) { el.innerText = t('alert_ok'); });
  document.querySelectorAll('.alert-upgrade').forEach(function(el) { el.innerText = t('alert_upgrade'); });

  // Update select
  var select = document.getElementById('languageSelect');
  if (select) select.value = currentLang;
}

// ===== CHANGE LANGUAGE =====
function changeLanguage(lang) {
  loadLanguage(lang).then(function() {
    applyTranslations();
  }).catch(function(err) {
    console.error('Gagal ganti bahasa:', err);
  });
}

// ===== INIT =====
function initLanguage() {
  var savedLang = localStorage.getItem('appLanguage') || 'id';
  loadLanguage(savedLang).then(function() {
    applyTranslations();
  });
    }
