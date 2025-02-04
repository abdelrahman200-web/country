function startCounting() {
  const counters = document.querySelectorAll('.counter');
  
  for (let i = 0 ; i < counters.length ; i++) { // 3
    let count = 0;
    const target = 1000;
    // increament step = 10 
    const increment = Math.ceil(target / 100);

    function updateCounter() {
      // count = count + increment;
      count += increment;
      if (count > target) {
        count = target;
      }
      counters[i].innerText = count;

      if (count < target) {
        setTimeout(updateCounter, 10);
      }
    }

    updateCounter();
  }
}

startCounting();
