export default class TextFormatter {

    static truncate = (text, count) => {
        if (text.length <= count) {
            return text;
        }
        const truncated = text.substring(0, count).trim()
        const last = truncated.charAt(truncated.length - 1)
        if ('.?!;'.includes(last)) {
            return truncated
        }
        return truncated + "..."
    };

    static formatCurrency = price => {
        let format = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        return format.format(price)
    }

    static formatDate = date => {
        const mm = date.getMonth() + 1;
        const dd = date.getDate();

        return [
            (dd > 9 ? '' : '0') + dd,
            (mm > 9 ? '' : '0') + mm,
            date.getFullYear()
        ].join('.');
    };
}