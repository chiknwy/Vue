// Create a new Vue instance
new Vue({
    el: '#app', // This connects to the div with id "app" in your HTML
    data: {
        loanAmount: null,   // Initial loan amount
        interestRate: null, // Initial interest rate
        loanTerm: null,     // Initial loan term
        monthlyPayment: null, // Calculated monthly payment
        calculationHistory: [] // To store the calculation history
    },
    methods: {
        calculateMonthlyPayment: function() {
            // Check if all inputs are provided
            if (this.loanAmount !== null && this.interestRate !== null && this.loanTerm !== null) {
                const monthlyInterestRate = this.interestRate / 100 / 12;
                const monthlyPayment = (this.loanAmount * monthlyInterestRate) /
                    (1 - Math.pow(1 + monthlyInterestRate, -this.loanTerm));
                this.monthlyPayment = monthlyPayment;

                // Add the current calculation to the history
                this.calculationHistory.push({
                    loanAmount: this.loanAmount,
                    interestRate: this.interestRate,
                    loanTerm: this.loanTerm,
                    monthlyPayment: monthlyPayment
                });
            } else {
                alert("Please fill in all the fields.");
            }
        }
    }
});
