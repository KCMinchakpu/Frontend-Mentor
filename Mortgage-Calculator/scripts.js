document.getElementById("mortgageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("error-message").textContent = "";

    // Get input values
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseInt(document.getElementById("years").value);
    const mortgageType = document.querySelector('input[name="mortgageType"]:checked').value;

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(years) || !mortgageType) {
        document.getElementById("error-message").textContent = "Please fill out all fields.";
        return;
    }

    // Calculate monthly and total repayment
    let monthlyRepayment = 0;
    let totalRepayment = 0;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;

    if (mortgageType === "repayment") {
        monthlyRepayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
        totalRepayment = monthlyRepayment * numberOfPayments;
    } else if (mortgageType === "interestOnly") {
        monthlyRepayment = principal * monthlyRate;
        totalRepayment = monthlyRepayment * numberOfPayments;
    }

    // Display results
    document.getElementById("monthlyRepayment").textContent = `Monthly Repayment: ${monthlyRepayment.toFixed(2)}`;
    document.getElementById("totalRepayment").textContent = `Total Repayment: ${totalRepayment.toFixed(2)}`;
});

// Clear all fields
document.getElementById("clearAll").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("mortgageForm").reset();
    document.getElementById("monthlyRepayment").textContent = "Monthly Repayment: ";
    document.getElementById("totalRepayment").textContent = "Total Repayment: ";
    document.getElementById("error-message").textContent = "";
});
