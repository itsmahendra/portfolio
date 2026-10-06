// Initialize AOS Animation Library
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
});

// Modal Logic for In-Portfolio Project Previews
function openProjectModal(url) {
  const modal = document.getElementById('projectModal');
  const iframe = document.getElementById('projectIframe');
  iframe.src = url;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  const iframe = document.getElementById('projectIframe');
  iframe.src = '';
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target == modal) {
    closeProjectModal();
  }
}
