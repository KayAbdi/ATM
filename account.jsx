const ATMDeposit = ({ onChange }) => {
    return (
        <label className="label huge">
           Deposit:
           <input type="number" onChange={onChange}/> 
           <input type="submit"/>
        </label>
    );
};

const Account = () => {
    const [accountState, setAccountState] = React.useState(0);
    const handleChange =(event) => {
        console.log(`handleChange ${event.target.value}`)
        setAccountState(event.target.value);
    };
    const handleSubmit = (event) => {
        alert(`Account total = ${accountState}`);
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Account Balance is: {accountState}</h2>
            <ATMDeposit onChange={handleChange}>Deposit</ATMDeposit>
        </form>
    );
};

ReactDOM.render(<Account/>, document.getElementById("root"));