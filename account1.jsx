const ATMDeposit = ({ onChange }) => {
    return (
        <label className="label huge">
            Deposit: 
            <input type="number" onChange={onChange}></input>
            <input type="submit" value="Submit"></input>
        </label>
    );
};

const Account = () => {
    let transactionState = 0;
    let totalState = 0;
    let status = "Account Balance is $zero";
    const handleChange = event => {
        console.log(`handleChange ${event.target.value}`);
        transactionState = Number(event.target.value);
    };
    const handleSubmit = event => {
        totalState += transactionState;
        status = `Account Balance is $ ${totalState}`;
        document.getElementById("total").innerHTML = status;
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2 id="total">{status}</h2>
            <ATMDeposit onChange={handleChange}>Deposit</ATMDeposit>
        </form>
    );
};
ReactDOM.render(<Account/>,document.getElementById("root"));
