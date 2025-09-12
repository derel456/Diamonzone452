const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mainPage = document.getElementById('main-page');
const paymentPage = document.getElementById('payment-page');
const gameCards = document.querySelectorAll('.game-card');
const backBtn = document.getElementById('back-btn');
const gameTitle = document.getElementById('game-title');
const gameLogo = document.getElementById('game-logo');
const nominalGrid = document.getElementById('nominal-grid');
const buyNowBtn = document.getElementById('buy-now-btn');
const userIdInput = document.getElementById('user-id');
const bannerSlider = document.getElementById('banner-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const totalBanners = 3;

const games = {
    "Mobile Legend": {
        logo: "ml1.jpg",
        nominals: [
            { amount: '98 Diamond', price: 'Rp 27.500' },
            { amount: '170 Diamond', price: 'Rp 46.000' },
            { amount: '277 Diamond', price: 'Rp 76.000' },
            { amount: '305 Diamond', price: 'Rp 84.000' },
            { amount: '518 Diamond', price: 'Rp 142.000' },
            { amount: '568 Diamond', price: 'Rp 149.500' },
            { amount: '875 Diamond', price: 'Rp 228.000' },
            { amount: '1048 Diamond', price: 'Rp 280.000' },
            { amount: '1067 Diamond', price: 'Rp 285.500' },
            { amount: 'Wdp', price: 'Rp 28.000' }
            { amount: '2x Wdp', price: 'Rp 56.000' }
        ]
    },
    "Free Fire": {
        logo: "ff1.jpg",
        nominals: [
            { amount: '5 Diamond', price: 'Rp 1.000' },
            { amount: '12 Diamond', price: 'Rp 2.000' },
            { amount: '50 Diamond', price: 'Rp 7.000' },
            { amount: '70 Diamond', price: 'Rp 9.000' },
            { amount: '120 Diamond', price: 'Rp 16.000' },
            { amount: '140 Diamond', price: 'Rp 19.000' },
            { amount: '355 Diamond', price: 'Rp 46.000' },
            { amount: '720 Diamond', price: 'Rp 91.000' },
            { amount: '740 Diamond', price: 'Rp 96.000' },
            { amount: '800 Diamond', price: 'Rp 101.000' },
            { amount: '1450 Diamond', price: 'Rp 190.000' },
            { amount: '2180 Diamond', price: 'Rp 290.000' },
            { amount: 'Membership mingguan lite', price: 'Rp 15.000' },
            { amount: 'Membership mingguan biasa', price: 'Rp 30.000' },
            { amount: 'Membership bulanan', price: 'Rp 82.000' }
        ]
    },
    "Roblox": {
        logo: "roblox1.jpg",
        nominals: [
            { amount: '100 Robux (Biasa)', price: 'Rp 85.000' },
            { amount: '200 Robux (Biasa)', price: 'Rp 105.000' },
            { amount: '400 Robux (Biasa)', price: 'Rp 114.000' },
            { amount: '800 Robux (Biasa)', price: 'Rp 159.000' },
            { amount: '2000 Robux (Biasa)', price: 'Rp 389.000' },
            { amount: '100 Robux (Gamepass)', price: 'Rp 14.000' },
            { amount: '200 Robux (Gamepass)', price: 'Rp 27.000' },
            { amount: '300 Robux (Gamepass)', price: 'Rp 40.000' },
            { amount: '400 Robux (Gamepass)', price: 'Rp 54.000' },
            { amount: '500 Robux (Gamepass)', price: 'Rp 67.000' },
            { amount: '600 Robux (Gamepass)', price: 'Rp 80.000' },
            { amount: '700 Robux (Gamepass)', price: 'Rp 93.000' },
            { amount: '800 Robux (Gamepass)', price: 'Rp 106.000' },
            { amount: '900 Robux (Gamepass)', price: 'Rp 120.000' },
            { amount: '1000 Robux (Gamepass)', price: 'Rp 133.000' }
        ]
    },
    "CODM": {
        logo: "cod1.jpg",
        nominals: [
            { amount: '33 Garena shells', price: 'Rp 10.000' },
            { amount: '66 Garena shells', price: 'Rp 20.000' },
            { amount: '165 Garena shells', price: 'Rp 50.000' },
            { amount: '330 Garena shells', price: 'Rp 100.000' }
        ]
    },
    "HOK": {
        logo: "hok1.jpg",
        nominals: [
            { amount: '16 Tokens', price: 'Rp 3.000' },
            { amount: '80 + 8 Tokens', price: 'Rp 15.000' },
            { amount: '240 + 17 Tokens', price: 'Rp 44.000' },
            { amount: '400 + 32 Tokens', price: 'Rp 73.000' },
            { amount: '560 + 45 Tokens', price: 'Rp 102.000' },
            { amount: '800 + 95 Tokens', price: 'Rp 146.000' },
            { amount: '1200 + 153 Tokens', price: 'Rp 220.000' }
        ]
    },
    "Fc Mobile": {
        logo: "fc1.jpg",
        nominals: [
            { amount: '40 FC Point', price: 'Rp 6.500' },
            { amount: '100 FC Point', price: 'Rp 16.000' },
            { amount: '520 FC Point', price: 'Rp 78.000' },
            { amount: '1070 FC Point', price: 'Rp 156.500' },
            { amount: '2200 FC Point', price: 'Rp 232.500' },
            { amount: '5750 FC Point', price: 'Rp 785.000' },
            { amount: '12000 FC Point', price: 'Rp 1.571.000' },
            { amount: '39 Silver', price: 'Rp 6.500' },
            { amount: '99 Silver', price: 'Rp 16.000' },
            { amount: '499 Silver', price: 'Rp 78.000' },
            { amount: '999 Silver', price: 'Rp 156.500' },
            { amount: '1999 Silver', price: 'Rp 232.500' },
            { amount: '4999 Silver', price: 'Rp 785.000' },
            { amount: '9999 Silver', price: 'Rp 1.571.000' }
        ]
    },
    "Guardian Tales": {
        logo: "guardian1.jpg",
        nominals: [
            { amount: 'Bundle starter s3', price: 'Rp 277.000' },
            { amount: 'Bundle special costume', price: 'Rp 510.000' },
            { amount: 'Bundle skip iklan', price: 'Rp 70.000' },
            { amount: 'Paket special bulanan', price: 'Rp 50.000' }
        ]
    },
    "PUBG": {
        logo: "pubg1.jpg",
        nominals: [
            { amount: '60 UC', price: 'Rp 14.500' },
            { amount: '120 UC', price: 'Rp 29.000' },
            { amount: '180 UC', price: 'Rp 43.000' },
            { amount: '240 UC', price: 'Rp 58.000' },
            { amount: '325 UC', price: 'Rp 73.991' },
            { amount: '385 UC', price: 'Rp 87.500' },
            { amount: '445 UC', price: 'Rp 101.910' },
            { amount: '505 UC', price: 'Rp 116.500' }
        ]
    },
    "Super Sus": {
        logo: "super1.jpg",
        nominals: [
            { amount: '250 Gem', price: 'Rp 9.000' },
            { amount: '800 Gem', price: 'Rp 14.000' },
            { amount: '900 Gem', price: 'Rp 15.000' },
            { amount: '1800 Gem', price: 'Rp 22.000' },
            { amount: '5750 Gem', price: 'Rp 52.000' },
            { amount: '15000 Gem', price: 'Rp 131.000' },
            { amount: '32000 Gem', price: 'Rp 171.000' },
            { amount: '120 Token', price: 'Rp 34.000' },
            { amount: '1300 Token', price: 'Rp 271.000' }
        ]
    },
    "Magic Chess": {
        logo: "magic1.jpg",
        nominals: [
            { amount: '12 Diamond', price: 'Rp 3.000' },
            { amount: '28 Diamond', price: 'Rp 6.000' },
            { amount: '44 Diamond', price: 'Rp 9.500' },
            { amount: '59 Diamond', price: 'Rp 13.000' },
            { amount: '85 Diamond', price: 'Rp 15.000' },
            { amount: '170 Diamond', price: 'Rp 36.000' },
            { amount: '240 Diamond', price: 'Rp 49.000' },
            { amount: '296 Diamond', price: 'Rp 61.000' },
            { amount: '408 Diamond', price: 'Rp 82.000' },
            { amount: '568 Diamond', price: 'Rp 111.000' },
            { amount: '875 Diamond', price: 'Rp 106.000' },
            { amount: '2010 Diamond', price: 'Rp 78.000' },
            { amount: '4830 Diamond', price: 'Rp 57.000' },
            { amount: 'WDP', price: 'Rp 27.000' }
        ]
    },
    "Genshin Impact": {
        logo: "genshin1.jpg",
        nominals: [
            { amount: '60 Crystal', price: 'Rp 13.000' },
            { amount: '330 Crystal', price: 'Rp 59.000' },
            { amount: '1090 Crystal', price: 'Rp 177.000' },
            { amount: '2240 Crystal', price: 'Rp 381.000' },
            { amount: 'Blessing of the welkin moon', price: 'Rp 58.000' },
            { amount: '2x Blessing of the welkin moon', price: 'Rp 116.000' }
        ]
    },
    "Honkai Impact 3": {
        logo: "honkai1.jpg",
        nominals: [
            { amount: '65 Crystal', price: 'Rp 15.000' },
            { amount: '330 Crystal', price: 'Rp 74.000' },
            { amount: '710 Crystal', price: 'Rp 160.000' },
            { amount: '1430 Crystal', price: 'Rp 330.000' },
            { amount: '30 B-chips', price: 'Rp 8.000' },
            { amount: '65 B-chips', price: 'Rp 16.000' },
            { amount: '330 B-chips', price: 'Rp 74.000' },
            { amount: '990 B-chips', price: 'Rp 227.0.0' }
        ]
    },
    "LOL": {
        logo: "lol1.jpg",
        nominals: [
            { amount: '575 RP', price: 'Rp 58.000' },
            { amount: '2800 RP', price: 'Rp 267.000' },
            { amount: '4500 RP', price: 'Rp 423.000' },
            { amount: '6500 RP', price: 'Rp 595.000' }
        ]
    },
    "Stumble Guys": {
        logo: "stumble1.jpg",
        nominals: [
                { amount: '250 Gems', price: 'Rp 11.000' },
                { amount: '800 Gems', price: 'Rp 25.000' },
                { amount: '15000 Gems', price: 'Rp 229.000' }
            ]
    },
    "Valorant": {
        logo: "valo1.jpg",
        nominals: [
            { amount: '475 Points', price: 'Rp 55.000' },
            { amount: '1000 Points', price: 'Rp 112.000' },
            { amount: '1475 Points', price: 'Rp 162.000' },
            { amount: '2050 Points', price: 'Rp 214.000' }
        ]
    }
};

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-y-full');
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        mobileMenu.classList.add('-translate-y-full');
    }
});

function updateSlider() {
    bannerSlider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalBanners - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalBanners - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

gameCards.forEach(card => {
    card.addEventListener('click', () => {
        const gameName = card.dataset.game;
        const gameData = games[gameName];

        if (gameData) {
            gameTitle.textContent = gameName.toUpperCase();
            gameLogo.src = gameData.logo;
            gameLogo.alt = gameName + " Logo";
            
            nominalGrid.innerHTML = '';
            gameData.nominals.forEach(nominal => {
                const div = document.createElement('div');
                div.className = 'nominal-item p-4 rounded-lg text-center cursor-pointer hover:bg-opacity-80 transition-colors duration-200';
                div.innerHTML = `
                    <p class="font-bold text-base sm:text-lg">${nominal.amount}</p>
                    <p class="text-sm text-gray-400">${nominal.price}</p>
                `;
                div.dataset.amount = nominal.amount;
                div.dataset.price = nominal.price;
                nominalGrid.appendChild(div);
            });

            document.querySelectorAll('.nominal-item').forEach(item => {
                item.addEventListener('click', () => {
                    document.querySelectorAll('.nominal-item').forEach(el => el.classList.remove('selected'));
                    item.classList.add('selected');
                });
            });

            mainPage.classList.add('hidden');
            paymentPage.classList.remove('hidden');
        }
    });
});

backBtn.addEventListener('click', () => {
    paymentPage.classList.add('hidden');
    mainPage.classList.remove('hidden');
    userIdInput.value = '';
});

buyNowBtn.addEventListener('click', () => {
    const userId = userIdInput.value;
    const selectedNominal = document.querySelector('.nominal-item.selected');

    if (!userId) {
        alert('Mohon masukkan User ID Anda.');
        return;
    }

    if (!selectedNominal) {
        alert('Mohon pilih nominal top up.');
        return;
    }

    const amount = selectedNominal.dataset.amount;
    const price = selectedNominal.dataset.price;
    const gameName = gameTitle.textContent;

    const message = `Halo, saya ingin top up ${amount} untuk game ${gameName} dengan harga ${price}. User ID saya: ${userId}.`;
    const whatsappUrl = `https://wa.me/6281410545261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});
