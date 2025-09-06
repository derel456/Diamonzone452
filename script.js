// Data untuk game
const popularGames = [
    { name: "Mobile Legends: Bang Bang", img: "https://via.placeholder.com/100x100?text=MLBB" },
    { name: "Free Fire", img: "https://via.placeholder.com/100x100?text=FF" },
    { name: "Roblox", img: "https://via.placeholder.com/100x100?text=Roblox" },
];

const allGames = [
    ...popularGames,
    { name: "FC Mobile", img: "https://via.placeholder.com/100x100?text=FCM" },
    { name: "Call of Duty Mobile", img: "https://via.placeholder.com/100x100?text=CODM" },
    { name: "Honkai: Star Rail", img: "https://via.placeholder.com/100x100?text=HSR" },
    { name: "PUBG Mobile", img: "https://via.placeholder.com/100x100?text=PUBG" },
    { name: "Genshin Impact", img: "https://via.placeholder.com/100x100?text=Genshin" },
    { name: "Super Sus", img: "https://via.placeholder.com/100x100?text=Super+Sus" },
    { name: "Magic Chess", img: "https://via.placeholder.com/100x100?text=MC" },
    { name: "Honkai Impact 3", img: "https://via.placeholder.com/100x100?text=HI3" },
    { name: "League of Legends", img: "https://via.placeholder.com/100x100?text=LOL" },
    { name: "Stumble Guys", img: "https://via.placeholder.com/100x100?text=Stumble" },
    { name: "Valorant", img: "https://via.placeholder.com/100x100?text=Valorant" },
];

// Data untuk harga diamond
const diamondOptions = {
    'Mobile Legends: Bang Bang': [
        { amount: '44 (+4 Bonus)', price: '13.000' },
        { amount: '59 (+6 Bonus)', price: '17.000' },
        { amount: '85 (+8 Bonus)', price: '24.000' },
        { amount: '129 (+12 Bonus)', price: '35.750' },
        { amount: '170 (+16 Bonus)', price: '46.750' },
        { amount: '240 (+23 Bonus)', price: '65.500' },
        { amount: '296 (+40 Bonus)', price: '80.500' },
        { amount: '408 (+41 Bonus)', price: '110.500' },
        { amount: '568 (+65 Bonus)', price: '152.500' },
        { amount: '875 (+101 Bonus)', price: '233.000' },
        { amount: '1171 (+141 Bonus)', price: '313.000' },
        { amount: '1443 (+166 Bonus)', price: '385.000' },
    ],
    'Free Fire': [
        { amount: '70 Diamonds', price: '10.000' },
        { amount: '140 Diamonds', price: '20.000' },
        // Tambahkan opsi lainnya
    ],
    'Roblox': [
        { amount: '800 Robux', price: '100.000' },
        { amount: '1700 Robux', price: '200.000' },
        // Tambahkan opsi lainnya
    ],
};

const whatsappAdmin = '6281234567890'; // Ganti dengan nomor WhatsApp admin Anda

let selectedGame = null;
let selectedDiamond = null;

// Fungsi untuk render daftar game
function renderGames(containerSelector, games) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = games.map(game => `
        <div class="game-item" data-game-name="${game.name}">
            <img src="${game.img}" alt="${game.name}">
            <p>${game.name}</p>
        </div>
    `).join('');
}

// Fungsi untuk menampilkan halaman pembelian
function showPurchasePage(gameName) {
    selectedGame = gameName;
    document.querySelector('.game-list-section').classList.add('hidden');
    document.querySelector('.section-title').classList.add('hidden');
    document.querySelector('.banner-slider').classList.add('hidden');
    const purchasePage = document.getElementById('purchase-page');
    purchasePage.classList.remove('hidden');
    document.getElementById('game-title').innerText = gameName;

    // Render opsi diamond
    const diamondContainer = document.getElementById('diamond-options');
    diamondContainer.innerHTML = '';
    const options = diamondOptions[gameName] || [];
    options.forEach(option => {
        const div = document.createElement('div');
        div.classList.add('diamond-option');
        div.dataset.amount = option.amount;
        div.dataset.price = option.price;
        div.innerHTML = `
            <div>${option.amount} Diamonds</div>
            <div>Rp ${option.price}</div>
        `;
        div.addEventListener('click', () => {
            document.querySelectorAll('.diamond-option').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
            selectedDiamond = option;
        });
        diamondContainer.appendChild(div);
    });
}

// Event listener untuk klik game item
document.addEventListener('DOMContentLoaded', () => {
    renderGames('.popular-games', popularGames);
    renderGames('.all-games', allGames);

    document.querySelectorAll('.game-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const gameName = e.currentTarget.dataset.gameName;
            showPurchasePage(gameName);
        });
    });
});

// Fungsi untuk slider banner
let slideIndex = 1;
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Otomatis ganti slide setiap 5 detik
setInterval(() => {
    plusSlides(1);
}, 5000);

showSlides(slideIndex);

// Handle form submission untuk WhatsApp
document.getElementById('purchase-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const gameId = document.getElementById('game-id').value;
    const gameServer = document.getElementById('game-server').value;
    const whatsappNum = document.getElementById('whatsapp-number').value;
    const totalAmount = document.getElementById('total-amount').value;

    if (!selectedGame || !selectedDiamond || !gameId || !gameServer || !whatsappNum) {
        alert('Mohon lengkapi semua data.');
        return;
    }

    const message = `Halo admin Diamond Zone, saya ingin melakukan top up game.
Game: ${selectedGame}
ID Game: ${gameId}
Server: ${gameServer}
Jumlah Beli: ${totalAmount}
Pilihan Diamond: ${selectedDiamond.amount} Diamond (Rp ${selectedDiamond.price})
WhatsApp: ${whatsappNum}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappAdmin}?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
});

