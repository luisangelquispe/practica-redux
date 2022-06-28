const deposit = (montoSuma) => {
    console.log(montoSuma);
    return {
        type: "DEPOSIT",
        payload: parseInt(montoSuma)
    }

}
const withdraw = (montoResta) => {

    return {
        type: "WITHDRAW",
        payload: parseInt(montoResta)
    }
}

export { deposit, withdraw };