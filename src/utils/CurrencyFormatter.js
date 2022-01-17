const formatCurrency = (price) => {
    let format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return format.format(price)
}

export default formatCurrency