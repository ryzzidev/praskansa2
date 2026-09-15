document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. DATA ANGGOTA (36 ORANG) --- */
    const daftarAnggota = [
        { nama: "Baso Asril", kelas: "X AKL 2" },
        { nama: "Nisrina Aulia B.", kelas: "X MPLB 3" },
        { nama: "Marsyanda", kelas: "X AKL 5" },
        { nama: "Arif Indra P.", kelas: "X AKL 5" },
        { nama: "Keyla Agista R.", kelas: "X MPLB 3" },
        { nama: "Nela Yuliana R.", kelas: "X MPLB 3" },
        { nama: "Rifat Sungkar M.", kelas: "X AKL 5" },
        { nama: "Indriyana", kelas: "X AKL 4" },
        { nama: "Nur Zakai Iqtifada", kelas: "X TJKT 1" },
        { nama: "Nur Aeni", kelas: "X AKL 3" },
        { nama: "Aira", kelas: "X AKL 5" },
        { nama: "Maisya Annur Rahma", kelas: "X AKL 4" },
        { nama: "Reavita Asrini Mulya", kelas: "X MPLB 3" },
        { nama: "Irsyad Arkana Achmadi", kelas: "X AKL 3" },
        { nama: "Juant Rahmatullah", kelas: "X AKL 3" },
        { nama: "Laode Dewa Kasim", kelas: "X TJKT 1" },
        { nama: "Fahri Hidayat", kelas: "X AKL 3" },
        { nama: "Suci Rahma Wati", kelas: "X AKL 2" },
        { nama: "Miska Yuliani", kelas: "X AKL 2" },
        { nama: "Muhamad Ifat A.", kelas: "X BDP 3" },
        { nama: "Jehan Rahmadani", kelas: "X TJKT 1" },
        { nama: "Andi Qalesya Alya", kelas: "X MPLB 3" },
        { nama: "Noven Fernando G.", kelas: "X BDP 3" },
        { nama: "Nurfiana Rahman", kelas: "X MPLB 3" },
        { nama: "Devina Evania D.", kelas: "X MPLB 3" },
        { nama: "Anjarwati", kelas: "X AKL 1" },
        { nama: "Ainun Julianti", kelas: "X BDP 2" },
        { nama: "Casma Ranti", kelas: "X BDP 2" },
        { nama: "Hadizah Al Munawar", kelas: "X AKL 1" },
        { nama: "Nurfadillah", kelas: "X MPLB 2" },
        { nama: "Fitrah Fadhilah", kelas: "X BDP 2" },
        { nama: "Aisya", kelas: "X BDP 2" },
        { nama: "Muh. Fitra S.", kelas: "X TJKT 1" },
        { nama: "Muh. Cessar Al D.", kelas: "X TJKT 1" },
        { nama: "Raisya", kelas: "X MPLB 3" },
        { nama: "Siti Rahmah", kelas: "X TJKT 2" }
    ];

    const container = document.getElementById('anggota-container');
    const searchInput = document.getElementById('search-input');

    // Render Kartu Anggota
    function renderAnggota(data) {
        if (!container) return;
        container.innerHTML = '';

        if (data.length === 0) {
            container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Anggota tidak ditemukan.</p>`;
            return;
        }

        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card-anggota';
            card.innerHTML = `
                <div class="icon-box"><i class="fa-solid fa-id-card"></i></div>
                <div class="info">
                    <span class="nama">${item.nama}</span>
                    <span class="kelas">${item.kelas}</span>
                </div>
            `;
            container.appendChild(card);
        });
    }

    renderAnggota(daftarAnggota);

    // Live Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = daftarAnggota.filter(item => 
                item.nama.toLowerCase().includes(query) || 
                item.kelas.toLowerCase().includes(query)
            );
            renderAnggota(filtered);
        });
    }

    /* --- 2. MOBILE MENU & OVERLAY --- */
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    const navOverlay = document.getElementById('nav-overlay');
    const menuIcon = document.getElementById('menu-icon');
    const navItems = document.querySelectorAll('.nav-item');

    function toggleMenu() {
        navList.classList.toggle('active');
        navOverlay.classList.toggle('active');
        if (navList.classList.contains('active')) {
            menuIcon.className = 'fa-solid fa-xmark';
        } else {
            menuIcon.className = 'fa-solid fa-bars-staggered';
        }
    }

    if (mobileMenu && navList && navOverlay) {
        mobileMenu.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu);

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navList.classList.remove('active');
                navOverlay.classList.remove('active');
                menuIcon.className = 'fa-solid fa-bars-staggered';
            });
        });
    }

    /* --- 3. SECURITY & INSPECT ELEMENT --- */
    const popup = document.getElementById('popup-inspect');
    const btnClosePopup = document.getElementById('btn-close-popup');

    function showPopup() { if (popup) popup.classList.add('active'); }
    function closePopup() { if (popup) popup.classList.remove('active'); }

    if (btnClosePopup) btnClosePopup.addEventListener('click', closePopup);

    document.addEventListener('contextmenu', e => { e.preventDefault(); showPopup(); });
    document.addEventListener('keydown', e => {
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) || (e.ctrlKey && [85, 83].includes(e.keyCode))) {
            e.preventDefault();
            showPopup();
        }
    });

});
