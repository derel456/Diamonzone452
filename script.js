// Data game dan nominal
const gamesData = {
    "mobile-legend": {
        title: "Mobile Legends: Bang Bang",
        subtitle: "Moonton",
        logo: "https://placehold.co/40x40/505050/ffffff?text=ML",
        nominals: [
            { amount: 50, price: "Rp 15.000" },
            { amount: 100, price: "Rp 30.000" },
            { amount: 200, price: "Rp 60.000" },
            { amount: 500, price: "Rp 150.000" }
        ]
    },
    "free-fire": {
        title: "Free Fire",
        subtitle: "Garena",
        logo: "https://placehold.co/40x40/505050/ffffff?text=FF",
        nominals: [
            { amount: 70, price: "Rp 10.000" },
            { amount: 140, price: "Rp 20.000" },
            { amount: 355, price: "Rp 50.000" },
            { amount: 720, price: "Rp 100.000" }
        ]
    },
    "roblox": {
        title: "Roblox",
        subtitle: "Roblox Corporation",
        logo: "https://placehold.co/40x40/505050/ffffff?text=R",
        nominals: [
            { amount: 80, price: "Rp 12.000" },
            { amount: 160, price: "Rp 24.000" },
            { amount: 400, price: "Rp 60.000" },
            { amount: 800, price: "Rp 120.000" }
        ]
    },
    // Tambahkan data game lain di sini
    "fc-mobile": {
        title: "FC Mobile",
        subtitle: "EA Sports",
        logo: "https://placehold.co/40x40/505050/ffffff?text=FC",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
        ]
    },
    "codm": {
        title: "Call of Duty: Mobile",
        subtitle: "Activision",
        logo: "https://placehold.co/40x40/505050/ffffff?text=CODM",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
        ]
    },
    "hok": {
        title: "Honor of Kings",
        subtitle: "TiMi Studio Group",
        logo: "https://placehold.co/40x40/505050/ffffff?text=HoK",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
        ]
    },
    "guardian-tales": {
        title: "Guardian Tales",
        subtitle: "Kakao Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=GT",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
        ]
    },
    "pubg": {
        title: "PUBG Mobile",
        subtitle: "Tencent Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=PUBG",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
        ]
    },
    "genshin-impact": {
        title: "Genshin Impact",
        subtitle: "miHoYo",
        logo: "https://placehold.co/40x40/505050/ffffff?text=GI",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
        ]
    },
    "super-sus": {
        title: "Super Sus",
        subtitle: "Pigeon Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=SS",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
        ]
    },
    "magic-chest": {
        title: "Magic Chess",
        subtitle: "Moonton",
        logo: "https://placehold.co/40x40/505050/ffffff?text=MC",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
        ]
    },
    "honkai-impact-3": {
        title: "Honkai Impact 3",
        subtitle: "miHoYo",
        logo: "https://placehold.co/40x40/505050/ffffff?text=HI3",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
        ]
    },
    "lol": {
        title: "League of Legends",
        subtitle: "Riot Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=LoL",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
        ]
    },
    "stumble-guys": {
        title: "Stumble Guys",
        subtitle: "Kitka Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=SG",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
        ]
    },
    "valorant": {
        title: "Valorant",
        subtitle: "Riot Games",
        logo: "https://placehold.co/40x40/505050/ffffff?text=V",
        nominals: [
            { amount: 100, price: "Rp 15.000" },
            { amount: 200, price: "Rp 30.000" }
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

// Carousel elements
const carouselTrack = document.getElementById('carousel-track');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

let selectedNominal = null;
let selectedPaymentMethod = null;
let selectedGame = null;

// Fungsi Carousel
function updateCarousel() {
    carouselTrack.style.transform = `translateX(${-currentSlide * 100}%)`;
}

carouselNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

carouselPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Auto-geser setiap 5 detik
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}, 5000);

// Fungsi untuk menampilkan halaman pembayaran
function showPaymentPage(gameId) {
    const game = gamesData[gameId];
    if (!game) {
        return;
    }

    selectedGame = gameId;

    // Update info game di halaman pembayaran
    gameTitleEl.textContent = game.title;
    gameSubtitleEl.textContent = game.subtitle;
    gameLogoEl.src = game.logo;

    // Tampilkan nominal
    nominalOptionsEl.innerHTML = '';
    game.nominals.forEach((nominal, index) => {
        const nominalCard = document.createElement('div');
        nominalCard.classList.add('payment-option', 'text-center', 'cursor-pointer');
        nominalCard.innerHTML = `
            <p class="font-bold text-lg">${nominal.amount} Diamond</p>
            <p class="text-sm text-gray-400">${nominal.price}</p>
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
    
    // Atur kembali pilihan nominal dan pembayaran
    selectedNominal = null;
    selectedPaymentMethod = null;
    document.querySelectorAll('#payment-methods .payment-option').forEach(el => el.classList.remove('selected'));

    homePage.classList.add('hidden');
    paymentPage.classList.remove('hidden');
}

// Event listener untuk tombol kembali
backButton.addEventListener('click', () => {
    homePage.classList.remove('hidden');
    paymentPage.classList.add('hidden');
});

// Event listener untuk setiap kartu game
gameCards.forEach(card => {
    card.addEventListener('click', () => {
        const gameId = card.dataset.game;
        showPaymentPage(gameId);
    });
});

// Event listener untuk metode pembayaran
paymentMethodsEl.addEventListener('click', (e) => {
    const target = e.target.closest('.payment-option');
    if (target) {
        document.querySelectorAll('#payment-methods .payment-option').forEach(el => el.classList.remove('selected'));
        target.classList.add('selected');
        selectedPaymentMethod = target.dataset.method;
    }
});

// Fungsi untuk mengirim pesan ke WhatsApp
function sendToWhatsApp(message) {
    // Ganti nomor ini dengan nomor WhatsApp admin Anda
    const phoneNumber = "6281410545261"; // Ganti dengan nomor WhatsApp admin

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Event listener untuk tombol "Beli Sekarang"
buyButton.addEventListener('click', () => {
    const userId = userIdInput.value;
    if (!userId) {
        showModal("Mohon masukkan ID Pengguna Anda.");
        return;
    }
    if (!selectedNominal) {
        showModal("Mohon pilih nominal top up.");
        return;
    }
    if (!selectedPaymentMethod) {
        showModal("Mohon pilih metode pembayaran.");
        return;
    }

    const game = gamesData[selectedGame];
    const message = `Halo Admin, saya ingin top up game.\n\nDetail Pesanan:\n- Game: ${game.title}\n- ID Pengguna: ${userId}\n- Nominal: ${selectedNominal.amount} Diamond\n- Harga: ${selectedNominal.price}\n- Pembayaran: ${selectedPaymentMethod.toUpperCase()}\n\nMohon diproses, terima kasih.`;
    
    // Tampilkan konfirmasi dan kirim ke WhatsApp
    showModal("Pesanan Anda akan dikirimkan ke WhatsApp admin. Tekan OK untuk melanjutkan.");
    modalOkButton.onclick = () => {
        sendToWhatsApp(message);
        confirmationModal.classList.add('hidden');
    };
});

// Fungsi untuk menampilkan modal
function showModal(message) {
    modalTextEl.textContent = message;
    confirmationModal.classList.remove('hidden');
    confirmationModal.classList.add('flex', 'items-center', 'justify-center');
}

// Event listener untuk menutup modal
closeModalButton.addEventListener('click', () => {
    confirmationModal.classList.add('hidden');
});
