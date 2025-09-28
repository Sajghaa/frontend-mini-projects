const clockElement = document.getElementById('clock') as HTMLDivElement | null;

function updateClock(): void {
  if (!clockElement) return;

  const now = new Date();

  
  let hrs = now.getHours();
  const ampm = hrs >= 12 ? "PM" : "AM";
  hrs = hrs % 12 || 12; 

  const mins = now.getMinutes().toString().padStart(2, "0");
  const secs = now.getSeconds().toString().padStart(2, "0");

  clockElement.textContent = `${hrs.toString().padStart(2, "0")}:${mins}:${secs} ${ampm}`;

  const r = now.getSeconds() * 4 % 256; 
  const g = now.getMinutes() * 4 % 256;
  const b = now.getHours() * 10 % 256;
  clockElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

updateClock();

setInterval(updateClock, 1000);
