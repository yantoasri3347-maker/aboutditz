// ================= INTERAKSI LOADING SCREEN =================
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // Memberikan delay kecil (800ms) agar efek loading kerennya terlihat dulu
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('fade-out');
        }
    }, 800);
});

// ================= FITUR SALIN NOMOR (COPY TO CLIPBOARD) =================
function copyNumber(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('copyToast');
        toast.classList.add('active');

        const originalIcon = buttonElement.innerHTML;
        buttonElement.innerHTML = '<i class="fa-solid fa-check"></i>';
        buttonElement.style.background = 'var(--neon-cyan)';
        buttonElement.style.color = '#000';

        setTimeout(() => {
            toast.classList.remove('active');
            buttonElement.innerHTML = originalIcon;
            buttonElement.style.background = '';
            buttonElement.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin nomor: ', err);
    });
}

// ================= FITUR POPUP ZOOM IMAGE QRIS =================
const modal = document.getElementById('qrisModal');
const triggerBtn = document.getElementById('triggerQris');
const modalImg = document.getElementById('modalImg');
const closeModal = document.querySelector('.close-modal');

if (triggerBtn) {
    triggerBtn.addEventListener('click', function() {
        const targetImgSrc = this.querySelector('img').src;
        modal.style.display = 'flex';
        modalImg.src = targetImgSrc;
    });
}

if (closeModal) {
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
