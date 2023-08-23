export default function deCapitalize(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}