export default function convertFloat(valor) {
    let v = parseFloat(valor).toFixed(2).replace(".", ",")
    return v
}