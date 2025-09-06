// Data game dan nominal
const gamesData = {
    "mobile-legend": {
        title: "Mobile Legends: Bang Bang",
        subtitle: "Moonton",
        logo: "https://placehold.co/40x40/505050/ffffff?text=ML",
        nominals: [
            { amount: "95 Diamond", price: "Rp 27.500" },
            { amount: "170 Diamond", price: "Rp 46.000" },
            { amount: "257 Diamond", price: "Rp 69.500" },
            { amount: "305 Diamond", price: "Rp 80.000" },
            { amount: "500 Diamond", price: "Rp 91.000" },
            { amount: "568 Diamond", price: "Rp 143.500" },
            { amount: "875 Diamond", price: "Rp 230.000" },
            { amount: "1048 Diamond", price: "Rp 270.000" },
            { amount: "1159 Diamond", price: "Rp 299.500" },
            { amount: "Wdp", price: "Rp 28.000" },
        ]
    },
    "free-fire": {
        title: "Free Fire",
        subtitle: "Garena",
        logo: "https://placehold.co/40x40/505050/ffffff?text=FF",
        nominals: [
            { amount: "5 Diamond", price: "Rp 1.000" },
            { amount: "12 Diamond", price: "Rp 2.000" },
            { amount: "50 Diamond", price: "Rp 8.000" },
            { amount: "70 Diamond", price: "Rp 10.000" },
            { amount: "120 Diamond", price: "Rp 19.000" },
            { amount: "355 Diamond", price: "Rp 48.000" },
            { amount: "720 Diamond", price: "Rp 98.000" },
            { amount: "1450 Diamond", price: "Rp 201.000" },
            { amount: "2180 Diamond", price: "Rp 302.000" },
            { amount: "Membership Mingguan Lite", price: "Rp 15.000" },
            { amount: "Membership Mingguan Biasa", price: "Rp 30.000" },
            { amount: "Membership Bulanan", price: "Rp 86.000" },
        ]
    },
    "roblox": {
        title: "Roblox",
        subtitle: "Roblox Corporation",
        logo: "https://placehold.co/40x40/505050/ffffff?text=R",
        nominals: [
            { amount: "400 Robux (Biasa)", price: "Rp 85.000" },
            { amount: "800 Robux (Biasa)", price: "Rp 159.000" },
            { amount: "1600 Robux (Biasa)", price: "Rp 310.000" },
            { amount: "4000 Robux (Biasa)", price: "Rp 762.000" },
            { amount: "100 Robux (Gamepass)", price: "Rp 14.000" },
            { amount: "200 Robux (Gamepass)", price: "Rp 27.000" },
            { amount: "300 Robux (Gamepass)", price: "Rp 40.000" },
            { amount: "400 Robux (Gamepass)", price: "Rp 54.000" },
            { amount: "500 Robux (Gamepass)", price: "Rp 67.000" },
            { amount: "600 Robux (Gamepass)", price: "Rp 80.000" },
            { amount: "700 Robux (Gamepass)", price: "Rp 93.000" },
            { amount: "800 Robux (Gamepass)", price: "Rp 106.000" },
            { amount: "900 Robux (Gamepass)", price: "Rp 120.000" },
            { amount: "1000 Robux (Gamepass)", price: "Rp 133.000" },
        ]
    },
    "fc-mobile": {
        title: "FC Mobile",
        subtitle: "EA Sports",
        logo: "https://placehold.co/40x40/505050/ffffff?text=FC",
        nominals: [
            { amount: "40 FC Point", price: "Rp 6.500" },
            { amount: "100 FC Point", price: "Rp 16.000" },
            { amount: "520 FC Point", price: "Rp 78.000" },
            { amount: "1070 FC Point", price: "Rp 156.500" },
            { amount: "2200 FC Point", price: "Rp 232.500" },
            { amount: "5750 FC Point", price: "Rp 785.000" },
            { amount: "12000 FC Point", price: "Rp 1.571.000" },
            { amount: "39 Silver", price: "Rp 6.500" },
            { amount: "99 Silver", price: "Rp 16.000" },
            { amount: "499 Silver", price: "Rp 78.000" },
            { amount: "999 Silver", price: "Rp 156.500" },
            { amount: "1999 Silver", price: "Rp 232.500" },
            { amount: "4999 Silver", price: "Rp 785.000" },
            { amount: "9999 Silver", price: "Rp 1.571.000" },
        ]
    },
    "codm": {
        title: "Call of Duty: Mobile",
        subtitle: "Activision",
        logo: "https://placehold.co/40x40/505050/ffffff?text=CODM",
        nominals: [
            { amount: "33 Garena Shells", price: "Rp 10.000" },
            { amount: "66 Garena Shells", price: "Rp 20.000" },
            { amount: "165 Garena Shells", price: "Rp 50.000" },
            { amount: "330 Garena Shells", price: "Rp 100.000" },
        ]
    },
    "hok": {
        title: "Honor of Kings",
        subtitle: "TiMi Studio Group",
        logo: "https://placehold.co/40x40/505050/ffffff?text=HoK",
        nominals: [
            { amount: "16 Tokens", price: "Rp 3.000" },
            { amount: "80 + 8 Tokens", price: "Rp 15.000" },
            { amount: "240 + 17 Tokens", price: "Rp 44.000" },
            { amount: "400 + 32 Tokens", price: "Rp 73.000" },
            { amount: "560 + 45 Tokens", price: "Rp 102.000" },
            { amount: "800 + 95 Tokens", price: "Rp 146.000" },
            { amount: "1200 + 153 Tokens", price: "Rp 220.000" },
        ]
    },
    "guardian-tales": {
        title: "Guardian Tales",
        subtitle: "Kakao Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=GT",
        nominals: [
            { amount: "Bundle Starter S3", price: "Rp 277.000" },
            { amount: "Bundle Special Costume", price: "Rp 510.000" },
            { amount: "Bundle Skip Iklan", price: "Rp 70.000" },
            { amount: "Paket Special Bulanan", price: "Rp 50.000" },
        ]
    },
    "pubg": {
        title: "PUBG Mobile",
        subtitle: "Tencent Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=PUBG",
        nominals: [
            { amount: "60 UC", price: "Rp 14.500" },
            { amount: "120 UC", price: "Rp 29.000" },
            { amount: "180 UC", price: "Rp 43.000" },
            { amount: "240 UC", price: "Rp 58.000" },
            { amount: "325 UC", price: "Rp 73.991" },
            { amount: "385 UC", price: "Rp 87.500" },
            { amount: "445 UC", price: "Rp 101.910" },
            { amount: "505 UC", price: "Rp 116.500" },
        ]
    },
    "genshin-impact": {
        title: "Genshin Impact",
        subtitle: "miHoYo",
        logo: "https://placehold.co/40x40/505050/ffffff?text=GI",
        nominals: [
            { amount: "60 Crystal", price: "Rp 13.000" },
            { amount: "330 Crystal", price: "Rp 59.000" },
            { amount: "1090 Crystal (980 + 110)", price: "Rp 177.000" },
            { amount: "2240 Crystal (1980 + 260)", price: "Rp 381.000" },
            { amount: "Blessing of the Welkin Moon", price: "Rp 58.000" },
            { amount: "2x Blessing of the Welkin Moon", price: "Rp 116.000" },
        ]
    },
    "super-sus": {
        title: "Super Sus",
        subtitle: "Pigeon Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=SS",
        nominals: [
            { amount: "250 Gem", price: "Rp 9.000" },
            { amount: "800 Gem", price: "Rp 14.000" },
            { amount: "900 Gem", price: "Rp 15.000" },
            { amount: "1800 Gem", price: "Rp 22.000" },
            { amount: "5750 Gem", price: "Rp 52.000" },
            { amount: "15000 Gem", price: "Rp 131.000" },
            { amount: "32000 Gem", price: "Rp 171.000" },
            { amount: "120 Token", price: "Rp 34.000" },
            { amount: "1300 Token", price: "Rp 271.000" },
        ]
    },
    "magic-chest": {
        title: "Magic Chess",
        subtitle: "Moonton",
        logo: "https://placehold.co/40x40/505050/ffffff?text=MC",
        nominals: [
            { amount: "12 Diamond", price: "Rp 3.000" },
            { amount: "28 Diamond", price: "Rp 6.000" },
            { amount: "44 Diamond", price: "Rp 9.500" },
            { amount: "59 Diamond", price: "Rp 13.000" },
            { amount: "85 Diamond", price: "Rp 15.000" },
            { amount: "170 Diamond", price: "Rp 36.000" },
            { amount: "240 Diamond", price: "Rp 49.000" },
            { amount: "296 Diamond", price: "Rp 61.000" },
            { amount: "408 Diamond", price: "Rp 82.000" },
            { amount: "568 Diamond", price: "Rp 111.000" },
            { amount: "875 Diamond", price: "Rp 106.000" },
            { amount: "2010 Diamond", price: "Rp 78.000" },
            { amount: "4830 Diamond", price: "Rp 57.000" },
            { amount: "WDP", price: "Rp 27.000" },
        ]
    },
    "honkai-impact-3": {
        title: "Honkai Impact 3",
        subtitle: "miHoYo",
        logo: "https://placehold.co/40x40/505050/ffffff?text=HI3",
        nominals: [
            { amount: "65 Crystal", price: "Rp 15.000" },
            { amount: "330 Crystal", price: "Rp 74.000" },
            { amount: "710 Crystal", price: "Rp 160.000" },
            { amount: "1430 Crystal", price: "Rp 330.000" },
            { amount: "30 B-chips", price: "Rp 8.000" },
            { amount: "65 B-chips", price: "Rp 16.000" },
            { amount: "330 B-chips", price: "Rp 74.000" },
            { amount: "990 B-chips", price: "Rp 227.000" },
        ]
    },
    "lol": {
        title: "League of Legends",
        subtitle: "Riot Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=LoL",
        nominals: [
            { amount: "575 RP", price: "Rp 58.000" },
            { amount: "2800 RP", price: "Rp 267.000" },
            { amount: "4500 RP", price: "Rp 423.000" },
            { amount: "6500 RP", price: "Rp 595.000" },
        ]
    },
    "stumble-guys": {
        title: "Stumble Guys",
        subtitle: "Kitka Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=SG",
        nominals: [
            { amount: "160 Gems", price: "Rp 16.000" },
            { amount: "800 Gems", price: "Rp 72.000" },
            { amount: "1600 Gems", price: "Rp 144.000" },
            { amount: "16000 Gems", price: "Rp 1.440.000" },
        ]
    },
    "valorant": {
        title: "Valorant",
        subtitle: "Riot Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=V",
        nominals: [
            { amount: "475 Points", price: "Rp 55.000" },
            { amount: "1000 Points", price: "Rp 112.000" },
            { amount: "1475 Points", price: "Rp 162.000" },
            { amount: "2050 Points", price: "Rp 214.000" },
        ]
    }
};

// Elemen DOM
const homePage = document.getElementById('home-page');
const paymentPage = document.getElementById('payment-page');
const gameCards = document.querySelectorAll('.game-card');
const backButton = document.getElementById('back-button');
const gameTitleEl = document.getElementById('game-title');
const gameSubtitleEl = document.getElementById('game-subtitle');
const gameLogoEl = document.getElementById('game-logo');
const nominalOptionsEl = document.getElementById('nominal-options');
const paymentMethodsEl = document.getElementById('payment-methods');
const userIdInput = document.getElementById('user-id');
const buyButton = document.getElementById('buy-button');
const confirmationModal = document.getElementById('confirmation-modal');
const closeModalButton = document.getElementById('close-modal');
const modalOkButton = document.getElementById('modal-ok-button');
const modalTextEl = document.getElementById('modal-text');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu-button');
const carouselContainer = document.getElementById('carousel-container');

let selectedNominal = null;
let selectedPaymentMethod = null;
let selectedGame = null;
let currentSlide = 0;

// Fungsi untuk mengirim pesan ke WhatsApp
function sendToWhatsApp(message) {
    const phoneNumber = "6281234567890";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Fungsi untuk menampilkan modal
function showModal(message, isConfirmation = false) {
    modalTextEl.textContent = message;
    confirmationModal.classList.remove('hidden');
    confirmationModal.classList.add('flex', 'items-center', 'justify-center');

    const newModalOkButton = modalOkButton.cloneNode(true);
    modalOkButton.parentNode.replaceChild(newModalOkButton, modalOkButton);
    newModalOkButton.addEventListener('click', () => {
        confirmationModal.classList.add('hidden');
    });

    if (isConfirmation) {
        newModalOkButton.textContent = "OK";
        newModalOkButton.addEventListener('click', () => {
            const game = gamesData[selectedGame];
            const userId = userIdInput.value;
            const message = `Halo Admin, saya ingin top up game.\n\nDetail Pesanan:\n- Game: ${game.title}\n- ID Pengguna: ${userId}\n- Nominal: ${selectedNominal.amount}\n- Harga: ${selectedNominal.price}\n- Pembayaran: ${selectedPaymentMethod.toUpperCase()}\n\nMohon diproses, terima kasih.`;
            sendToWhatsApp(message);
            confirmationModal.classList.add('hidden');
        }, { once: true });
    }
}

// Fungsi untuk menggeser banner
function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Tambahkan event listener untuk memastikan DOM sudah terisi penuh
document.addEventListener('DOMContentLoaded', () => {

    setInterval(nextSlide, 5000);

    function showPaymentPage(gameId) {
        const game = gamesData[gameId];
        if (!game) {
            return;
        }

        selectedGame = gameId;
        gameTitleEl.textContent = game.title.toUpperCase();
        gameSubtitleEl.textContent = game.subtitle.toUpperCase();
        gameLogoEl.src = game.logo;

        nominalOptionsEl.innerHTML = '';
        game.nominals.forEach((nominal) => {
            const nominalCard = document.createElement('div');
            nominalCard.classList.add('payment-option', 'text-center', 'cursor-pointer', 'rounded-xl', 'p-4', 'bg-gray-800', 'hover:bg-gray-700', 'transition-colors');
            nominalCard.innerHTML = `
                <p class="font-bold text-lg">${nominal.amount.toUpperCase()}</p>
                <p class="text-sm text-gray-400">${nominal.price.toUpperCase()}</p>
            `;
            nominalCard.dataset.amount = nominal.amount;
            nominalCard.dataset.price = nominal.price;
            nominalCard.addEventListener('click', () => {
                document.querySelectorAll('#nominal-options .payment-option').forEach(el => el.classList.remove('selected'));
                nominalCard.classList.add('selected');
                selectedNominal = nominal;
            });
            nominalOptionsEl.appendChild(nominalCard);
        });
        
        selectedNominal = null;
        selectedPaymentMethod = null;
        document.querySelectorAll('#payment-methods .payment-option').forEach(el => el.classList.remove('selected'));

        homePage.classList.add('hidden');
        paymentPage.classList.remove('hidden');
        window.scrollTo(0, 0); // Gulir ke atas
    }

    backButton.addEventListener('click', () => {
        homePage.classList.remove('hidden');
        paymentPage.classList.add('hidden');
    });

    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const gameId = card.dataset.game;
            showPaymentPage(gameId);
        });
    });

    paymentMethodsEl.addEventListener('click', (e) => {
        const target = e.target.closest('.payment-option');
        if (target) {
            document.querySelectorAll('#payment-methods .payment-option').forEach(el => el.classList.remove('selected'));
            target.classList.add('selected');
            selectedPaymentMethod = target.dataset.method;
        }
    });

    buyButton.addEventListener('click', () => {
        const userId = userIdInput.value;
        if (!userId) {
            showModal("MOHON MASUKKAN ID PENGGUNA ANDA.");
            return;
        }
        if (!selectedNominal) {
            showModal("MOHON PILIH NOMINAL TOP UP.");
            return;
        }
        if (!selectedPaymentMethod) {
            showModal("MOHON PILIH METODE PEMBAYARAN.");
            return;
        }
        
        showModal("PESANAN ANDA AKAN DIKIRIMKAN KE WHATSAPP ADMIN. TEKAN OK UNTUK MELANJUTKAN.", true);
    });

    closeModalButton.addEventListener('click', () => {
        confirmationModal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === confirmationModal) {
            confirmationModal.classList.add('hidden');
        }
    });

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
