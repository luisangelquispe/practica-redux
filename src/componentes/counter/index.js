import { deposit, withdraw } from "../../store/amount/action";
import { connect } from "react-redux";
import { useState } from "react";



const mapStateToProps = (state) => {
    // console.log(state);
    return {
        amount: parseInt(state.amountRducer.amount)
    }
}

const Counter = ({ deposit, withdraw, amount }) => {

    //usestate
    const [actionSuma, setActionSuma] = useState("");
    const [actionResta, setActionResta] = useState("");
    //alog
    const algo = (e) => {
        if (e.target.value === "") {
            setActionSuma("0");
            setActionResta("0");
        } else {
            setActionSuma(e.target.value);
            setActionResta(e.target.value);
        }

    }


    return (
        <div>
            <h1>{amount}</h1>

            <input type="text" onChange={algo} placeholder={typeof (amount)} />

            <button onClick={() => deposit(actionSuma)}>Deposit</button>
            <button onClick={() => withdraw(actionResta)}>withdraw</button>
        </div>
    );
}
export default connect(mapStateToProps, { deposit, withdraw })(Counter);