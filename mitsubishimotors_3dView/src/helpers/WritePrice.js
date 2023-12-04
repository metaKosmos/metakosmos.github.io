function writePrice(price) {
    var price = price
        .toString()
        .split("");
    return "R$" + price[0] + price[1] + price[2] + "." + price[3] + price[4] + price[5];
}

export default writePrice;