function createBackAccount(){
    let balance = 0;
    let transactionS_history = [];
    
    return {
        deposite(amount){
            if (amount <= 0){
                return "Deposit amount must be positive";
            }
            balance += amount;
            transactionS_history.push(`Deposited: ${amount}`);
            return `Deposited: ${amount}`;
        },
        
        withdraw(amount) {
            if (amount <= 0) {
                return "Withdrawl amount must be positive";
            }

            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            transactionS_history.push(`Withdrawn: ${amount}`);
            return `Withdrawn: ${amount}`;
        },

        getBalance(){
            return balance
        },

        getTransactionHistory() {
            return transactionS_history;
        }
    }
}

const account = createBackAccount();

account.deposite(1000);
console.log(account.getBalance()); // 1000
account.withdraw(800);
console.log(account.getBalance()); // 200
console.log(account.getTransactionHistory()); 