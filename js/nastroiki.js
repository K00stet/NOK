document.getElementById('file-input').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const imageContainer = document.getElementById('image-container');
  const uploadBox = document.querySelector('.upload-box'); // Ссылаемся на кнопку загрузки

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {


      // Отображаем контейнер для картинки
      imageContainer.style.display = 'block';

      // Создаем изображение и добавляем его в контейнер
      const img = document.createElement('img');
      img.src = e.target.result;
      imageContainer.innerHTML = ''; // Очищаем контейнер, если там что-то было
      imageContainer.appendChild(img);
    };

    reader.readAsDataURL(file);
  } else {
    imageContainer.innerHTML = '';
  }
});

