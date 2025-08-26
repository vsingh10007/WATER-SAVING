    // Tracker Logic
    let totalLiters = 0;
    const maxCapacity = 500; // adjust capacity (liters)
    const waterFill = document.getElementById("waterFill");
    const tankLabel = document.getElementById("tankLabel");

    function logUsage(event) {
      event.preventDefault();
      const liters = parseInt(document.getElementById("liters").value);
      if (!isNaN(liters) && liters > 0) {
        totalLiters += liters;
        if (totalLiters > maxCapacity) totalLiters = maxCapacity;

        const percentage = (totalLiters / maxCapacity) * 100;
        waterFill.style.height = percentage + "%";
        tankLabel.textContent = totalLiters + " Liters Logged";
      }
      event.target.reset();
      return false;
    }