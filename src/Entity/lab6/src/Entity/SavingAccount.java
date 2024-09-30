package Entity;

public class SavingAccount extends BankAccount {

    public SavingAccount(String accountNumber,double balance) {
        super(accountNumber,balance);
    }
    public SavingAccount() {;}
    @Override
    public void deposit(double amount){
        setBalance(getBalance()+amount);
        System.out.println("Deposit of $"+amount+"successful. Current balance:$ "+getBalance());

    }
    @Override
    public void withdraw
