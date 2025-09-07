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
            groups: [
                {
                    title: 'Diamond',
                    nominals: [
                        { diamond: '95 Diamond', price: 'Rp 27.500' },
                        { diamond: '170 Diamond', price: 'Rp 46.000' },
                        { diamond: '257 Diamond', price: 'Rp 69.500' },
                        { diamond: '305 Diamond', price: 'Rp 80.000' },
                        { diamond: '500 Diamond', price: 'Rp 91.000' },
                        { diamond: '568 Diamond', price: 'Rp 143.500' },
                        { diamond: '875 Diamond', price: 'Rp 230.000' },
                        { diamond: '1048 Diamond', price: 'Rp 270.000' },
                        { diamond: '1159 Diamond', price: 'Rp 299.500' }
                    ]
                },
                {
                    title: 'Lainnya',
                    nominals: [
                        { diamond: 'WDP', price: 'Rp 28.000' }
                    ]
                }
            ]
        },
        'Free Fire': {
            logo: 'https://placehold.co/200x250/dc2626/ffffff?text=Free+Fire',
            groups: [
                {
                    title: 'Diamond',
                    nominals: [
                        { diamond: '5 Diamond', price: 'Rp 1.000' },
                        { diamond: '12 Diamond', price: 'Rp 2.000' },
                        { diamond: '50 Diamond', price: 'Rp 8.000' },
                        { diamond: '70 Diamond', price: 'Rp 10.000' },
                        { diamond: '120 Diamond', price: 'Rp 19.000' },
                        { diamond: '355 Diamond', price: 'Rp 48.000' },
                        { diamond: '720 Diamond', price: 'Rp 98.000' },
                        { diamond: '1450 Diamond', price: 'Rp 201.000' },
                        { diamond: '2180 Diamond', price: 'Rp 302.000' }
                    ]
                },
                {
                    title: 'Membership',
                    nominals: [
                        { diamond: 'Membership Mingguan Lite', price: 'Rp 15.000' },
                        { diamond: 'Membership Mingguan Biasa', price: 'Rp 30.000' },
                        { diamond: 'Membership Bulanan', price: 'Rp 86.000' }
                    ]
                }
            ]
        },
        'Roblox': {
            logo: 'https://placehold.co/200x250/2563eb/ffffff?text=Roblox',
            groups: [
                {
                    title: 'Robux Biasa',
                    nominals: [
                        { diamond: '400 Robux', price: 'Rp 85.000' },
                        { diamond: '800 Robux', price: 'Rp 159.000' },
                        { diamond: '1600 Robux', price: 'Rp 310.000' },
                        { diamond: '400 Robux', price: 'Rp 762.000' }
                    ]
                },
                {
                    title: 'Robux Gamepass',
                    nominals: [
                        { diamond: '100 Robux', price: 'Rp 14.000' },
                        { diamond: '200 Robux', price: 'Rp 27.000' },
                        { diamond: '300 Robux', price: 'Rp 40.000' },
                        { diamond: '400 Robux', price: 'Rp 54.000' },
                        { diamond: '500 Robux', price: 'Rp 67.000' },
                        { diamond: '600 Robux', price: 'Rp 80.000' },
                        { diamond: '700 Robux', price: 'Rp 93.000' },
                        { diamond: '800 Robux', price: 'Rp 106.000' },
                        { diamond: '900 Robux', price: 'Rp 120.000' },
                        { diamond: '1000 Robux', price: 'Rp 133.000' }
                    ]
                }
            ]
        },
        'FC Mobile': {
            logo: 'https://placehold.co/200x250/16a34a/ffffff?text=FC+Mobile',
            groups: [
                {
                    title: 'FC Point',
                    nominals: [
                        { diamond: '40 FC Point', price: 'Rp 6.500' },
                        { diamond: '100 FC Point', price: 'Rp 16.000' },
                        { diamond: '520 FC Point', price: 'Rp 78.000' },
                        { diamond: '1070 FC Point', price: 'Rp 156.500' },
                        { diamond: '2200 FC Point', price: 'Rp 232.500' },
                        { diamond: '5750 FC Point', price: 'Rp 785.000' },
                        { diamond: '12000 FC Point', price: 'Rp 1.571.000' }
                    ]
                },
                {
                    title: 'Silver',
                    nominals: [
                        { diamond: '39 Silver', price: 'Rp 6.500' },
                        { diamond: '99 Silver', price: 'Rp 16.000' },
                        { diamond: '499 Silver', price: 'Rp 78.000' },
                        { diamond: '999 Silver', price: 'Rp 156.500' },
                        { diamond: '1999 Silver', price: 'Rp 232.500' },
                        { diamond: '4999 Silver', price: 'Rp 785.000' },
                        { diamond: '9999 Silver', price: 'Rp 1.571.000' }
                    ]
                }
            ]
        },
        'CODM': {
            logo: 'https://placehold.co/200x250/1f2937/ffffff?text=CODM',
            groups: [
                {
                    title: 'Garena Shells',
                    nominals: [
                        { diamond: '33 Garena Shells', price: 'Rp 10.000' },
                        { diamond: '66 Garena Shells', price: 'Rp 20.000' },
                        { diamond: '165 Garena Shells', price: 'Rp 50.000' },
                        { diamond: '330 Garena Shells', price: 'Rp 100.000' }
                    ]
                }
            ]
        },
        'HOK': {
            logo: 'https://placehold.co/200x250/991b1b/ffffff?text=HOK',
            groups: [
                {
                    title: 'Tokens',
                    nominals: [
                        { diamond: '16 Tokens', price: 'Rp 3.000' },
                        { diamond: '80 + 8 Tokens', price: 'Rp 15.000' },
                        { diamond: '240 + 17 Tokens', price: 'Rp 44.000' },
                        { diamond: '400 + 32 Tokens', price: 'Rp 73.000' },
                        { diamond: '560 + 45 Tokens', price: 'Rp 102.000' },
                        { diamond: '800 + 95 Tokens', price: 'Rp 146.000' },
                        { diamond: '1200 + 153 Tokens', price: 'Rp 220.000' }
                    ]
                }
            ]
        },
        'Guardian Tales': {
            logo: 'https://placehold.co/200x250/f59e0b/ffffff?text=Guardian+Tales',
            groups: [
                {
                    title: 'Items',
                    nominals: [
                        { diamond: 'Bundle Starter S3', price: 'Rp 277.000' },
                        { diamond: 'Bundle Special Costume', price: 'Rp 510.000' },
                        { diamond: 'Bundle Skip Iklan', price: 'Rp 70.000' },
                        { diamond: 'Paket Special Bulanan', price: 'Rp 50.000' }
                    ]
                }
            ]
        },
        'PUBG': {
            logo: 'https://placehold.co/200x250/334155/ffffff?text=PUBG',
            groups: [
                {
                    title: 'UC',
                    nominals: [
                        { diamond: '60 UC', price: 'Rp 14.500' },
                        { diamond: '120 UC', price: 'Rp 29.000' },
                        { diamond: '180 UC', price: 'Rp 43.000' },
                        { diamond: '240 UC', price: 'Rp 58.000' },
                        { diamond: '325 UC', price: 'Rp 73.991' },
                        { diamond: '385 UC', price: 'Rp 87.500' },
                        { diamond: '445 UC', price: 'Rp 101.910' },
                        { diamond: '505 UC', price: 'Rp 116.500' }
                    ]
                }
            ]
        },
        'Genshin Impact': {
            logo: 'https://placehold.co/200x250/6b21a8/ffffff?text=Genshin',
            groups: [
                {
                    title: 'Crystal',
                    nominals: [
                        { diamond: '60 Crystal', price: 'Rp 13.000' },
                        { diamond: '330 Crystal', price: 'Rp 59.000' },
                        { diamond: '1090 (980 + 110) Crystal', price: 'Rp 177.000' },
                        { diamond: '2240 (1980 + 260) Crystal', price: 'Rp 381.000' }
                    ]
                },
                {
                    title: 'Spesial Item',
                    nominals: [
                        { diamond: 'Blessing of the Welkin Moon', price: 'Rp 58.000' },
                        { diamond: '2x Blessing of the Welkin Moon', price: 'Rp 116.000' }
                    ]
                }
            ]
        },
        'Super Sus': {
            logo: 'https://placehold.co/200x250/065f46/ffffff?text=Super+Sus',
            groups: [
                {
                    title: 'Gems',
                    nominals: [
                        { diamond: '250 Gem', price: 'Rp 9.000' },
                        { diamond: '800 Gem', price: 'Rp 14.000' },
                        { diamond: '900 Gem', price: 'Rp 15.000' },
                        { diamond: '1800 Gem', price: 'Rp 22.000' },
                        { diamond: '5750 Gem', price: 'Rp 52.000' },
                        { diamond: '15000 Gem', price: 'Rp 131.000' },
                        { diamond: '32000 Gem', price: 'Rp 171.000' }
                    ]
                },
                {
                    title: 'Tokens',
                    nominals: [
                        { diamond: '120 Token', price: 'Rp 34.000' },
                        { diamond: '1300 Token', price: 'Rp 271.000' }
                    ]
                }
            ]
        },
        'Magic Chess': {
            logo: 'https://placehold.co/200x250/94a3b8/ffffff?text=Magic+Chess',
            groups: [
                {
                    title: 'Diamond',
                    nominals: [
                        { diamond: '12 Diamond', price: 'Rp 3.000' },
                        { diamond: '28 Diamond', price: 'Rp 6.000' },
                        { diamond: '44 Diamond', price: 'Rp 9.500' },
                        { diamond: '59 Diamond', price: 'Rp 13.000' },
                        { diamond: '85 Diamond', price: 'Rp 15.000' },
                        { diamond: '170 Diamond', price: 'Rp 36.000' },
                        { diamond: '240 Diamond', price: 'Rp 49.000' },
                        { diamond: '296 Diamond', price: 'Rp 61.000' },
                        { diamond: '408 Diamond', price: 'Rp 82.000' },
                        { diamond: '568 Diamond', price: 'Rp 111.000' },
                        { diamond: '875 Diamond', price: 'Rp 106.000' },
                        { diamond: '2010 Diamond', price: 'Rp 78.000' },
                        { diamond: '4830 Diamond', price: 'Rp 57.000' }
                    ]
                },
                {
                    title: 'Lainnya',
                    nominals: [
                        { diamond: 'WDP', price: 'Rp 27.000' }
                    ]
                }
            ]
        },
        'Honkai Impact 3': {
            logo: 'https://placehold.co/200x250/be185d/ffffff?text=Honkai+3',
            groups: [
                {
                    title: 'Crystal',
                    nominals: [
                        { diamond: '65 Crystal', price: 'Rp 15.000' },
                        { diamond: '330 Crystal', price: 'Rp 74.000' },
                        { diamond: '710 Crystal', price: 'Rp 160.000' },
                        { diamond: '1430 Crystal', price: 'Rp 330.000' }
                    ]
                },
                {
                    title: 'B-Chips',
                    nominals: [
                        { diamond: '30 B-Chips', price: 'Rp 8.000' },
                        { diamond: '65 B-Chips', price: 'Rp 16.000' },
                        { diamond: '330 B-Chips', price: 'Rp 74.000' },
                        { diamond: '990 B-Chips', price: 'Rp 227.000' }
                    ]
                }
            ]
        },
        'LOL': {
            logo: 'https://placehold.co/200x250/5b21b6/ffffff?text=LOL',
            groups: [
                {
                    title: 'Riot Points',
                    nominals: [
                        { diamond: '575 RP', price: 'Rp 58.000' },
                        { diamond: '2800 RP', price: 'Rp 267.000' },
                        { diamond: '4500 RP', price: 'Rp 423.000' },
                        { diamond: '6500 RP', price: 'Rp 595.000' }
                    ]
                }
            ]
        },
        'Stumble Guys': {
            logo: 'https://placehold.co/200x250/fde047/000000?text=Stumble+Guys',
            groups: [
                {
                    title: 'Gems',
                    nominals: [
                        { diamond: '100 Gems', price: 'Rp 15.000' }
                    ]
                }
            ]
        },
        'Valorant': {
            logo: 'https://placehold.co/200x250/991b1b/ffffff?text=Valorant',
            groups: [
                {
                    title: 'Valorant Points',
                    nominals: [
                        { diamond: '475 Points', price: 'Rp 55.000' },
                        { diamond: '1000 Points', price: 'Rp 112.000' },
                        { diamond: '1475 Points', price: 'Rp 162.000' },
                        { diamond: '2050 Points', price: 'Rp 214.000' }
                    ]
                }
            ]
        }
    };

    let selectedGame = null;
    let selectedNominal = null;

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

    const startBannerSlider = () => {
        bannerInterval = setInterval(() => {
            slideBanner(currentIndex + 1);
        }, 5000);
    };

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

    startBannerSlider();

    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const gameName = card.dataset.game;
            selectedGame = gameName;
            
            const data = gameData[gameName];
            gameTitle.textContent = gameName;
            gameLogo.src = data.logo;
            
            nominalGrid.innerHTML = '';
            selectedNominal = null;

            data.groups.forEach(group => {
                const groupTitle = document.createElement('h4');
                groupTitle.classList.add('font-semibold', 'text-white', 'mt-4', 'col-span-full', 'text-center', 'uppercase');
                groupTitle.textContent = group.title;
                nominalGrid.appendChild(groupTitle);
                
                group.nominals.forEach(nominal => {
                    const btn = document.createElement('button');
                    btn.classList.add('nominal-btn', 'p-2', 'rounded-lg', 'text-left', 'border', 'border-gray-600', 'hover:bg-purple-600', 'transition-colors');
                    btn.innerHTML = `<p class="font-semibold text-white text-sm sm:text-base">${nominal.diamond}</p><p class="text-xs sm:text-sm text-gray-300">${nominal.price}</p>`;
                    btn.addEventListener('click', () => {
                        document.querySelectorAll('.nominal-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        selectedNominal = nominal;
                    });
                    nominalGrid.appendChild(btn);
                });
            });

            mainPage.classList.add('hidden');
            paymentPage.classList.remove('hidden');
        });
    });

    backBtn.addEventListener('click', () => {
        paymentPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
    });

    buyNowBtn.addEventListener('click', () => {
        const userId = document.getElementById('user-id').value;
        if (!userId) {
            // Mengganti alert dengan popup kustom
            const alertBox = document.createElement('div');
            alertBox.classList.add('fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-50', 'z-50');
            alertBox.innerHTML = `
                <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <p class="text-white mb-4">Silakan masukkan User ID Anda.</p>
                    <button class="bg-purple-600 text-white px-4 py-2 rounded-lg" onclick="this.parentElement.parentElement.remove()">Tutup</button>
                </div>
            `;
            document.body.appendChild(alertBox);
            return;
        }

        if (!selectedNominal) {
            // Mengganti alert dengan popup kustom
            const alertBox = document.createElement('div');
            alertBox.classList.add('fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-50', 'z-50');
            alertBox.innerHTML = `
                <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                    <p class="text-white mb-4">Silakan pilih nominal top up.</p>
                    <button class="bg-purple-600 text-white px-4 py-2 rounded-lg" onclick="this.parentElement.parentElement.remove()">Tutup</button>
                </div>
            `;
            document.body.appendChild(alertBox);
            return;
        }

        const message = `Halo, saya ingin top up.\n\nGame: ${selectedGame}\nUser ID: ${userId}\nNominal: ${selectedNominal.diamond}\nHarga: ${selectedNominal.price}\n\nMohon petunjuk untuk melanjutkan pembayaran.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    });

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('transform');
        mobileMenu.classList.toggle('-translate-y-full');
    });
});
