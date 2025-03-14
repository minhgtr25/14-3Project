function scrollToContent() {
    document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
}
window.addEventListener("load", function () {
    let audio = document.getElementById("bg-music");

    // Cố gắng phát nhạc khi trang tải xong
    audio.play().catch(error => {
        console.log("Autoplay bị chặn! Đợi người dùng tương tác...");
    });

    // Lặp lại nếu nhạc dừng
    audio.addEventListener("ended", function () {
        audio.play();
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbySWDEv0RkIS_4sKyUHGssV_qExkH3faFME6BUXcEUiQzK_oXizDCkKLI9kH7y5FiTCdQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Cảm ơn em bé vì đã gửi tin nhắn cho anh nhé ^^" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})