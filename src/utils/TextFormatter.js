export default class TextFormatter {

    static truncate(text, count) {
        if (text.length <= count) {
            return text;
        }
        const truncated = text.substring(0, count).trim()
        const last = truncated.charAt(truncated.length - 1)
        if ('.?!;'.includes(last)) {
            return truncated
        }
        return truncated + "..."
    }
}