// Получаем элементы
const openBtn = document.getElementById("open-video-btn");
const videoInput = document.getElementById("video-input");
const videoContainer = document.getElementById("video-container");
const videoPlayer = document.getElementById("video-player");

// Обработчик нажатия на картинку
openBtn.addEventListener("click", () => {
  videoInput.click(); // При нажатии на картинку, имитируем клик по input
});

// Обработчик выбора видео
videoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith("video")) {
    const videoURL = URL.createObjectURL(file);
    videoPlayer.src = videoURL;
    videoContainer.style.display = "block"; // Показываем контейнер с видео
    openBtn.style.display = "none"; // Скрываем картинку с плюсом
  } else {
    alert("Пожалуйста, выберите видео файл.");
  }
});
// Обработчик выбора изображения
imageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith("image")) {
    const imageURL = URL.createObjectURL(file);
    imagePreview.src = imageURL;
    imageContainer.style.display = "block"; // Показываем контейнер с изображением
    openBts.style.display = "none"; // Скрываем картинку с плюсом
  } else {
    alert("Пожалуйста, выберите изображение файл.");
  }
});
