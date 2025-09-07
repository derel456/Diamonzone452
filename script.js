document.addEventListener('DOMContentLoaded', () => {
    const mainPage = document.getElementById('main-page');
    const paymentPage = document.getElementById('payment-page');
    const gameCards = document.querySelectorAll('.game-card');
    const backBtn = document.getElementById('back-btn');
    const gameTitle = document.getElementById('game-title');
    const gameLogo = document.getElementById('game-logo');
    const nominalGrid = document.getElementById('nominal-grid');
    const buyNowBtn = document.getElementById('buy-now-btn');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    const bannerSlider = document.getElementById('banner-slider');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;
    let bannerInterval;

    const adminWhatsAppNumber = '+6281234567890'; // Ganti dengan nomor WhatsApp admin Anda

    const gameData = {
        'Mobile Legend': {
            logo: 'https://placehold.co/200x250/312e81/ffffff?text=MLBB',
            nominals: [
                { diamond: '28 Diamond', price: 'Rp 8.047' },
                { diamond: '59 Diamond', price: 'Rp 16.500' },
                { diamond: '86 Diamond', price: 'Rp 24.500' },
                { diamond: '172 Diamond', price: 'Rp 48.000' },
                { diamond: '257 Diamond', price: 'Rp 70.000' },
                { diamond: '344 Diamond', price: 'Rp 93.000' },
                { diamond: '429 Diamond', price: 'Rp 115.000' }
            ]
        },
        'Free Fire': {
            logo: 'https://placehold.co/200x250/dc2626/ffffff?text=Free+Fire',
            nominals: [
                { diamond: '5 Diamond', price: 'Rp 843' },
                { diamond: '12 Diamond', price: 'Rp 1.880' },
                { diamond: '20 Diamond', price: 'Rp 3.370' },
                { diamond: '30 Diamond', price: 'Rp 5.055' },
                { diamond: '40 Diamond', price: 'Rp 6.732' },
                { diamond: '50 Diamond', price: 'Rp 8.414' },
                { diamond: '70 Diamond', price: 'Rp 11.780' }
            ]
        },
        'Roblox': {
            logo: 'https://placehold.co/200x250/2563eb/ffffff?text=Roblox',
            nominals: [
                { diamond: '400 Robux', price: 'Rp 50.000' },
                { diamond: '800 Robux', price: 'Rp 95.000' },
                { diamond: '1700 Robux', price: 'Rp 190.000' },
                { diamond: '4500 Robux', price: 'Rp 450.000' },
                { diamond: '10000 Robux', price: 'Rp 900.000' }
            ]
        },
        'FC Mobile': { logo: 'https://placehold.co/200x250/16a34a/ffffff?text=FC+Mobile', nominals: [{ diamond: '100 FC Points', price: 'Rp 15.000' }] },
        'CODM': { logo: 'https://placehold.co/200x250/1f2937/ffffff?text=CODM', nominals: [{ diamond: '100 CP', price: 'Rp 10.000' }] },
        'HOK': { logo: 'https://placehold.co/200x250/991b1b/ffffff?text=HOK', nominals: [{ diamond: '50 Voucher', price: 'Rp 12.000' }] },
        'Guardian Tales': { logo: 'https://placehold.co/200x250/f59e0b/ffffff?text=Guardian+Tales', nominals: [{ diamond: '100 Gem', price: 'Rp 15.000' }] },
        'PUBG': { logo: 'https://placehold.co/200x250/334155/ffffff?text=PUBG', nominals: [{ diamond: '60 UC', price: 'Rp 12.000' }] },
        'Genshin Impact': { logo: 'https://placehold.co/200x250/6b21a8/ffffff?text=Genshin', nominals: [{ diamond: '1 Blessing of the Welkin Moon', price: 'Rp 65.000' }] },
        'Super Sus': { logo: 'https://placehold.co/200x250/065f46/ffffff?text=Super+Sus', nominals: [{ diamond: '50 Star', price: 'Rp 10.000' }] },
        'Magic Chest': { logo: 'https://placehold.co/200x250/94a3b8/ffffff?text=Magic+Chest', nominals: [{ diamond: '100 Diamond', price: 'Rp 15.000' }] },
        'Honkai Impact 3': { logo: 'https://placehold.co/200x250/be185d/ffffff?text=Honkai+3', nominals: [{ diamond: '100 Kristal', price: 'Rp 15.000' }] },
        'LOL': { logo: 'https://placehold.co/200x250/5b21b6/ffffff?text=LOL', nominals: [{ diamond: '175 RP', price: 'Rp 12.000' }] },
        'Stumble Guys': { logo: 'https://placehold.co/200x250/fde047/000000?text=Stumble+Guys', nominals: [{ diamond: '100 Gems', price: 'Rp 15.000' }] },
        'Valorant': { logo: 'https://placehold.co/200x250/991b1b/ffffff?text=Valorant', nominals: [{ diamond: '125 Valorant Points', price: 'Rp 15.000' }] }
    };

    let selectedGame = null;
    let selectedNominal = null;

    // Fungsi untuk menggeser banner
    const slideBanner = (index) => {
        const totalBanners = bannerSlider.children.length;
        if (index >= totalBanners) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalBanners - 1;
        } else {
            currentIndex = index;
        }
        bannerSlider.style.transform = `translateX(${-currentIndex * 100}%)`;
    };

    // Otomatis geser banner setiap 5 detik
    const startBannerSlider = () => {
        bannerInterval = setInterval(() => {
            slideBanner(currentIndex + 1);
        }, 5000);
    };

    // Tombol navigasi banner
    prevBtn.addEventListener('click', () => {
        clearInterval(bannerInterval);
        slideBanner(currentIndex - 1);
        startBannerSlider();
    });

    nextBtn.addEventListener('click', () => {
        clearInterval(bannerInterval);
        slideBanner(currentIndex + 1);
        startBannerSlider();
    });

    // Mulai slider saat halaman dimuat
    startBannerSlider();

    // Handle klik pada kartu game
    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const gameName = card.dataset.game;
            selectedGame = gameName;
            
            const data = gameData[gameName];
            gameTitle.textContent = gameName;
            gameLogo.src = data.logo;
            
            // Reset nominal grid
            nominalGrid.innerHTML = '';
            selectedNominal = null;

            data.nominals.forEach(nominal => {
                const btn = document.createElement('button');
                btn.classList.add('nominal-btn', 'p-2', 'rounded-lg', 'text-left', 'border', 'border-gray-600', 'hover:bg-purple-600', 'transition-colors');
                btn.innerHTML = `<p class="font-semibold text-white">${nominal.diamond}</p><p class="text-sm text-gray-300">${nominal.price}</p>`;
                btn.addEventListener('click', () => {
                    // Hapus kelas 'active' dari semua tombol nominal
                    document.querySelectorAll('.nominal-btn').forEach(b => b.classList.remove('active'));
                    // Tambahkan kelas 'active' ke tombol yang diklik
                    btn.classList.add('active');
                    selectedNominal = nominal;
                });
                nominalGrid.appendChild(btn);
            });

            mainPage.classList.add('hidden');
            paymentPage.classList.remove('hidden');
        });
    });

    // Handle tombol kembali
    backBtn.addEventListener('click', () => {
        paymentPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
    });

    // Handle tombol Beli Sekarang (WhatsApp)
    buyNowBtn.addEventListener('click', () => {
        const userId = document.getElementById('user-id').value;
        if (!userId) {
            alert('Silakan masukkan User ID Anda.');
            return;
        }

        if (!selectedNominal) {
            alert('Silakan pilih nominal top up.');
            return;
        }

        const message = `Halo, saya ingin top up.\n\nGame: ${selectedGame}\nUser ID: ${userId}\nNominal: ${selectedNominal.diamond}\nHarga: ${selectedNominal.price}\n\nMohon petunjuk untuk melanjutkan pembayaran.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    });

    // Handle menu mobile
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('transform');
        mobileMenu.classList.toggle('-translate-y-full');
    });
});
