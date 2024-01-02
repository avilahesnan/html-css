const btnCamera = document.querySelector('[data-video-botao]');
const fieldCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const btnPhoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const message = document.querySelector('[data-mensagem]');
const btnSubmit = document.querySelector('[data-enviar]');

let imgURL = '';

btnCamera.addEventListener('click', async function () {
    const initVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    btnCamera.style.display = 'none';
    fieldCamera.style.display = 'block';
    video.srcObject = initVideo;
});

btnPhoto.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    imgURL = canvas.toDataURL('image/jpeg');
    fieldCamera.style.display = 'none';
    message.style.display = 'block';
});

btnSubmit.addEventListener('click', () => {
    const data = localStorage.getItem('register');
    const dataConverted = JSON.parse(data);
    dataConverted.image = imgURL;
    localStorage.setItem('register', JSON.stringify(dataConverted));
    window.location.href = 'abrir-conta-form-3.html';
});
