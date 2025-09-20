document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mainPage = document.getElementById('main-page');
    const paymentPage = document.getElementById('payment-page');
    const backBtn = document.getElementById('back-btn');
    const gameCards = document.querySelectorAll('.game-card');
    const gameTitle = document.getElementById('game-title');
    const gameLogo = document.getElementById('game-logo');
    const nominalGrid = document.getElementById('nominal-grid');
    const buyNowBtn = document.getElementById('buy-now-btn');
    const userIdInput = document.getElementById('user-id');
    
    let selectedNominal = null;

    const gameData = {
        'Mobile Legend': {
            logo: 'ml.jpg',
            nominals: [
                { value: '5 diamond', price: 'Rp 1.000' },
                { value: '14 diamond', price: 'Rp 3.000' },
                { value: '36 diamond', price: 'Rp 10.000' },
                { value: '56 diamond', price: 'Rp 15.000' },
                { value: '71 diamond', price: 'Rp 20.000' },
                { value: '176 diamond', price: 'Rp 50.000' },
                { value: '370 diamond', price: 'Rp 100.000' },
                { value: '1048 diamond', price: 'Rp 280.000' },
                { value: 'Weekly Diamond Pass', price: 'Rp 27.000' },
                { value: 'Weekly Diamond Pass x2', price: 'Rp 54.000' }
            ]
        },
        'Free Fire': {
            logo: 'ff1.jpg',
            nominals: [
                { value: '10 diamond', price: 'Rp 1.000' },
                { value: '30 diamond', price: 'Rp 5.000' },
                { value: '75 diamond', price: 'Rp 10.000' },
                { value: '145 diamond', price: 'Rp 20.000' },
                { value: '375 diamond', price: 'Rp 50.000' },
                { value: '740 diamond', price: 'Rp 95.000' },
                { value: '770 diamond', price: 'Rp 100.000' },
                { value: '800 diamond', price: 'Rp 102.000' },
                { value: '1.000 diamond', price: 'Rp 127.000' },
                { value: '2.000 diamond', price: 'Rp 260.000' },
                { value: 'Membership Mingguan', price: 'Rp 28.000' },
                { value: 'Membership Bulanan', price: 'Rp 82.000' }
            ]
        },
        'Roblox': {
            logo: 'roblox1.jpg',
            nominals: [
                { value: '160 Robux', price: 'Rp 34.000' },
                { value: '200 Robux', price: 'Rp 63.000' },
                { value: '400 Robux', price: 'Rp 76.000' },
                { value: '800 Robux', price: 'Rp 154.000' },
                { value: '2100 Robux', price: 'Rp 314.000' }
            ]
        },
        'CODM': {
            logo: 'cod1. jpg',
            nominals: [
                { value: '33 Garena Shells', price: 'Rp 10.000' },
                { value: '66 Garena Shells', price: 'Rp 20.000' },
                { value: '165 Garena Shells', price: 'Rp 50.000' },
                { value: '330 Garena Shells', price: 'Rp 100.000' }
            ]
        },
        'HOK': {
            logo: 'hok1.jpg',
            nominals: [
                { value: '16 Tokens', price: 'Rp 3.000' },
                { value: '80 + 8 Tokens', price: 'Rp 15.000' },
                { value: '240 + 17 Tokens', price: 'Rp 44.000' },
                { value: '400 + 32 Tokens', price: 'Rp 73.000' },
                { value: '560 + 45 Tokens', price: 'Rp 102.000' },
                { value: '800 + 95 Tokens', price: 'Rp 146.000' },
                { value: '1200 + 153 Tokens', price: 'Rp 220.000' }
            ]
        },
        'FC Mobile': {
            logo: 'fc1.jpg',
            nominals: [
                { value: '40 FC Point', price: 'Rp 6.500' },
                { value: '100 FC Point', price: 'Rp 16.000' },
                { value: '520 FC Point', price: 'Rp 78.000' },
                { value: '1070 FC Point', price: 'Rp 156.500' },
                { value: '2200 FC Point', price: 'Rp 232.500' },
                { value: '5750 FC Point', price: 'Rp 785.000' },
                { value: '12000 FC Point', price: 'Rp 1.571.000' },
                { value: '39 Silver', price: 'Rp 6.500' },
                { value: '99 Silver', price: 'Rp 16.000' },
                { value: '499 Silver', price: 'Rp 78.000' },
                { value: '999 Silver', price: 'Rp 156.500' },
                { value: '1999 Silver', price: 'Rp 232.500' },
                { value: '4999 Silver', price: 'Rp 785.000' },
                { value: '9999 Silver', price: 'Rp 1.571.000' }
            ]
        },
        'Guardian Tales': {
            logo: 'guardian1.jpg',
            nominals: [
                { value: 'Bundle Starter S3', price: 'Rp 277.000' },
                { value: 'Bundle Special Costume', price: 'Rp 510.000' },
                { value: 'Bundle Skip Iklan', price: 'Rp 70.000' },
                { value: 'Paket Special Bulanan', price: 'Rp 50.000' }
            ]
        },
        'PUBG': {
            logo: 'pubg1.jpg',
            nominals: [
                { value: '60 UC', price: 'Rp 14.500' },
                { value: '120 UC', price: 'Rp 29.000' },
                { value: '180 UC', price: 'Rp 43.000' },
                { value: '240 UC', price: 'Rp 58.000' },
                { value: '325 UC', price: 'Rp 73.991' },
                { value: '385 UC', price: 'Rp 87.500' },
                { value: '445 UC', price: 'Rp 101.910' },
                { value: '505 UC', price: 'Rp 116.500' }
            ]
        },
        'Genshin Impact': {
            logo: 'genshin1.jpg',
            nominals: [
                { value: '60 Genesis Crystals', price: 'Rp 13.000' },
                { value: '330 Genesis Crystals', price: 'Rp 59.000' },
                { value: '1090 Genesis Crystals (980 +110)', price: 'Rp 177.000' },
                { value: '2240 Genesis Crystals (1980 + 260)', price: 'Rp 381.000' },
                { value: 'Blessing of the Welkin Moon', price: 'Rp 58.000' },
                { value: 'Blessing of the Welkin Moon x2', price: 'Rp 116.000' }
            ]
        },
        'Super Sus': {
            logo: 'super1.jpg',
            nominals: [
                { value: '100 golden star', price: 'Rp 11.500' },
                { value: '310 golden star', price: 'Rp 14.000' },
                { value: '520 golden star', price: 'Rp 15.000' },
                { value: '1060 golden star', price: 'Rp 22.000' },
                { value: '2180 golden star', price: 'Rp 52.000' },
                { value: '5600 golden star', price: 'Rp 131.000' },
                { value: 'weakly cardcard', price: 'Rp 11.000' },
                { value: 'monthly card', price: 'Rp 34.000' },
                { value: 'super vip card', price: 'Rp 271.000' }
            ]
        },
        'Magic Chess': {
            logo: 'magic1.jpg',
            nominals: [
                { value: '12 Diamond', price: 'Rp 3.000' },
                { value: '28 diamond', price: 'Rp 6.000' },
                { value: '44 diamond', price: 'Rp 9.500' },
                { value: '59 diamond', price: 'Rp 13.000' },
                { value: '85 diamond', price: 'Rp 15.000' },
                { value: '170 diamond', price: 'Rp 36.000' },
                { value: '240 diamond', price: 'Rp 49.000' },
                { value: '296 diamond', price: 'Rp 61.000' },
                { value: '408 diamond', price: 'Rp 82.000' },
                { value: '568 diamond', price: 'Rp 111.000' },
                { value: '875 diamond', price: 'Rp 106.000' },
                { value: '2010 diamond', price: 'Rp 78.000' },
                { value: '4830 diamond', price: 'Rp 57.000' },
                { value: 'Weekly Diamond Pass', price: 'Rp 27.000' }
            ]
        },
        'Honkai Impact 3': {
            logo: 'genshin1. jpg',
            nominals: [
                { value: '65 Crystal', price: 'Rp 15.000' },
                { value: '330 Crystal', price: 'Rp 74.000' },
                { value: '710 Crystal', price: 'Rp 160.000' },
                { value: '1430 Crystal', price: 'Rp 330.000' },
                { value: '30 B-chips', price: 'Rp 8.000' },
                { value: '65 B-chips', price: 'Rp 16.000' },
                { value: '330 B-chips', price: 'Rp 74.000' },
                { value: '990 B-chips', price: 'Rp 227.000' }
            ]
        },
        'LOL': {
            logo: 'lol1.jpg',
            nominals: [
                { value: '575 RP', price: 'Rp 58.000' },
                { value: '2800 RP', price: 'Rp 267.000' },
                { value: '4500 RP', price: 'Rp 423.000' },
                { value: '6500 RP', price: 'Rp 595.000' }
            ]
        },
        'Stumble Guys': {
            logo: 'stumble1.jpg',
            nominals: [
                { value: '250 Gems', price: 'Rp 12.000' },
                { value: '800 Gems', price: 'Rp 25.000' },
                { value: '15000 Gems', price: 'Rp 229.000' }
            ]
        },
        'Valorant': {
            logo: 'valorant1.jpg',
            nominals: [
                { value: '475 Points', price: 'Rp 55.000' },
                { value: '1000 Points', price: 'Rp 112.000' },
                { value: '1475 Points', price: 'Rp 162.000' },
                { value: '2050 Points', price: 'Rp 214.000' }
            ]
        },
    };

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('-translate-y-full');
    });

    // Banner Slider
    const bannerSlider = document.getElementById('banner-slider');
    const bannerImages = bannerSlider.querySelectorAll('img');
    let currentIndex = 0;

    const updateSlider = () => {
        bannerSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    document.getElementById('next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % bannerImages.length;
        updateSlider();
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length;
        updateSlider();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % bannerImages.length;
        updateSlider();
    }, 5000);

    // Game Card Click Handler
    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const gameName = card.dataset.game;
            const gameInfo = gameData[gameName];

            if (gameInfo) {
                // Set data for payment page
                gameTitle.textContent = gameName;
                gameLogo.src = gameInfo.logo;
                nominalGrid.innerHTML = '';
                selectedNominal = null;

                gameInfo.nominals.forEach(nominal => {
                    const btn = document.createElement('button');
                    btn.className = 'nominal-btn';
                    btn.innerHTML = `<span class="block text-lg font-bold">${nominal.value}</span><span class="block text-sm text-gray-400">${nominal.price}</span>`;
                    btn.dataset.value = nominal.value;
                    btn.dataset.price = nominal.price;

                    btn.addEventListener('click', () => {
                        // Remove 'selected' class from all buttons
                        nominalGrid.querySelectorAll('.nominal-btn').forEach(b => b.classList.remove('selected'));
                        // Add 'selected' class to the clicked button
                        btn.classList.add('selected');
                        selectedNominal = nominal;
                    });

                    nominalGrid.appendChild(btn);
                });

                // Show payment page and hide main page
                mainPage.classList.add('hidden');
                paymentPage.classList.remove('hidden');
            }
        });
    });

    // Back button handler
    backBtn.addEventListener('click', () => {
        paymentPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
    });

    // Buy Now button handler
    buyNowBtn.addEventListener('click', () => {
        const userId = userIdInput.value;
        const gameName = gameTitle.textContent;
        
        if (!userId || !selectedNominal) {
            // Using a custom message box instead of alert()
            const messageBox = document.createElement('div');
            messageBox.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white p-4 rounded-lg shadow-xl z-50';
            messageBox.textContent = 'Mohon masukkan User ID dan pilih nominal terlebih dahulu.';
            document.body.appendChild(messageBox);
            setTimeout(() => {
                messageBox.remove();
            }, 3000); // Hapus pesan setelah 3 detik
            return;
        }
        
        const message = `Halo Diamond Zone, saya ingin top up game ${gameName} dengan detail:\nUser ID: ${userId}\nNominal: ${selectedNominal.value}\nHarga: ${selectedNominal.price}\n\nMohon bantuannya. Terima kasih!`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });
});
