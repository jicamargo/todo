const blinkEffect = (element) => {
  let count = 0;
  const interval = setInterval(() => {
    if (count % 2 === 0) {
      // element.style.backgroundColor = "yellow";
      element.style.boxShadow = 'inset 0 0 15px #88ccff';
    } else {
      element.style.backgroundColor = "";
      element.style.boxShadow = '';
    }
    count++;
    if (count >= 2) {
      clearInterval(interval);
      element.style.backgroundColor = "";
      element.style.boxShadow = '';
    }
  }, 125);
}

export default blinkEffect;