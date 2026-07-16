const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const menuLabel = menuButton.querySelector('.sr-only');

function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuLabel.textContent = 'Open navigation menu';
}

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuLabel.textContent = open ? 'Close navigation menu' : 'Open navigation menu';
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 12), { passive: true });

document.querySelector('#year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((item) => observer.observe(item));
}

const motionButton = document.querySelector('#motion-toggle');
if (reduceMotion) {
  motionButton.textContent = 'Reduced motion active';
  motionButton.disabled = true;
} else {
  motionButton.addEventListener('click', () => {
    const paused = document.body.classList.toggle('motion-paused');
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.textContent = paused ? 'Resume motion' : 'Pause motion';
  });
}

const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');

function setError(input, message) {
  input.setAttribute('aria-invalid', 'true');
  document.querySelector(`#${input.id}-error`).textContent = message;
}
function clearError(input) {
  input.removeAttribute('aria-invalid');
  document.querySelector(`#${input.id}-error`).textContent = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name;
  const email = form.elements.email;
  const message = form.elements.message;
  [name, email, message].forEach(clearError);
  status.textContent = '';
  let firstInvalid = null;

  if (name.value.trim().length < 2) { setError(name, 'Please enter at least two characters.'); firstInvalid ??= name; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { setError(email, 'Please enter a valid email address.'); firstInvalid ??= email; }
  if (message.value.trim().length < 10) { setError(message, 'Please enter at least ten characters.'); firstInvalid ??= message; }

  if (firstInvalid) {
    status.textContent = 'Please correct the fields marked above.';
    firstInvalid.focus();
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name.value.trim()}`);
  const body = encodeURIComponent(`${message.value.trim()}\n\nFrom: ${name.value.trim()}\nEmail: ${email.value.trim()}`);
  status.textContent = 'Your email application is opening with the message prepared.';
  window.location.href = `mailto:chyparsa@gmail.com?subject=${subject}&body=${body}`;
});


// Movable butterfly: supports mouse, touch, and keyboard controls.
const movableButterfly = document.querySelector('#movable-butterfly');
if (movableButterfly) {
  let dragging = false;
  let pointerOffsetX = 0;
  let pointerOffsetY = 0;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  function placeButterfly(clientX, clientY) {
    const width = movableButterfly.offsetWidth;
    const height = movableButterfly.offsetHeight;
    const left = clamp(clientX - pointerOffsetX, 0, window.innerWidth - width);
    const top = clamp(clientY - pointerOffsetY, 0, window.innerHeight - height);
    movableButterfly.style.left = `${left}px`;
    movableButterfly.style.top = `${top}px`;
    movableButterfly.style.transform = 'none';
  }

  movableButterfly.addEventListener('pointerdown', (event) => {
    dragging = true;
    const rect = movableButterfly.getBoundingClientRect();
    pointerOffsetX = event.clientX - rect.left;
    pointerOffsetY = event.clientY - rect.top;
    movableButterfly.classList.add('dragging', 'user-positioned');
    movableButterfly.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  movableButterfly.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    placeButterfly(event.clientX, event.clientY);
  });

  function stopDragging(event) {
    if (!dragging) return;
    dragging = false;
    movableButterfly.classList.remove('dragging');
    if (event.pointerId !== undefined && movableButterfly.hasPointerCapture(event.pointerId)) {
      movableButterfly.releasePointerCapture(event.pointerId);
    }
  }

  movableButterfly.addEventListener('pointerup', stopDragging);
  movableButterfly.addEventListener('pointercancel', stopDragging);

  movableButterfly.addEventListener('keydown', (event) => {
    const step = event.shiftKey ? 25 : 10;
    const rect = movableButterfly.getBoundingClientRect();
    let left = rect.left;
    let top = rect.top;

    if (event.key === 'ArrowLeft') left -= step;
    else if (event.key === 'ArrowRight') left += step;
    else if (event.key === 'ArrowUp') top -= step;
    else if (event.key === 'ArrowDown') top += step;
    else if (event.key === 'Home') { left = 16; top = 90; }
    else return;

    event.preventDefault();
    movableButterfly.classList.add('user-positioned');
    movableButterfly.style.transform = 'none';
    movableButterfly.style.left = `${clamp(left, 0, window.innerWidth - movableButterfly.offsetWidth)}px`;
    movableButterfly.style.top = `${clamp(top, 0, window.innerHeight - movableButterfly.offsetHeight)}px`;
  });

  window.addEventListener('resize', () => {
    if (!movableButterfly.classList.contains('user-positioned')) return;
    const rect = movableButterfly.getBoundingClientRect();
    movableButterfly.style.left = `${clamp(rect.left, 0, window.innerWidth - movableButterfly.offsetWidth)}px`;
    movableButterfly.style.top = `${clamp(rect.top, 0, window.innerHeight - movableButterfly.offsetHeight)}px`;
  });
}
