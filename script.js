// Mengambil elemen-elemen dari DOM
const body = document.body;
const audio = document.getElementById('audio-ultah');
const musicBtn = document.getElementById('music-btn');

// Fungsi untuk membuat confetti secara acak
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Posisi dan warna acak untuk confetti
    const size = Math.random() * 8 + 4;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.left = `${Math.random() * 100}vw`;

    // Pilihan warna confetti
    const colors = ['#f87171', '#fbbf24', '#a855f7', '#4ade80', '#22d3ee'];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Kecepatan dan durasi animasi acak
    confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
    confetti.style.animationDelay = `${Math.random() * 1}s`;

    body.appendChild(confetti);

    // Hapus confetti setelah animasinya selesai
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Membuat confetti setiap interval waktu
setInterval(createConfetti, 100);

// Tambahkan event listener untuk tombol musik
musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.textContent = 'Jeda Musik';
    } else {
        audio.pause();
        musicBtn.textContent = 'Putar Musik';
    }
});
