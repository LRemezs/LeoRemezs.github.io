const icons = document.querySelectorAll('.skill-block');
const textSection = document.querySelector('#explanation');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const file = icon.getAttribute('data-file');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', file);
    xhr.onload = () => {
      if (xhr.status === 200) {
        textSection.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });
});