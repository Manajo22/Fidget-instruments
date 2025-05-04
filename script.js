const leftHand = document.querySelector('.hand.left');
const rightHand = document.querySelector('.hand.right');
const container = document.querySelector('.container');

// Synth for sound
const synth = new Tone.MembraneSynth().toDestination();

// 6 invisible pitch zones
const pitchZones = [130, 160, 180, 200, 230, 260];

function getPitchFromX(x) {
  const width = container.offsetWidth;
  const zone = Math.floor((x / width) * 6);
  return pitchZones[zone] || 200;
}

// Move hands upward on hover
container.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  leftHand.style.top = `${y - 100}px`;
  rightHand.style.top = `${y - 100}px`;
});

// Bang on mouse click
container.addEventListener('click', e => {
  const pitch = getPitchFromX(e.clientX);

  // Reset position and trigger animation
  leftHand.style.top = `50%`;
  rightHand.style.top = `50%`;

  // Play sound
  synth.triggerAttackRelease(pitch, '8n');
});
