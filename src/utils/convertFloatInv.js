export default function convertFloatInv(valor) {
    let v = parseFloat(valor).toFixed(2).replace(",", ".")
    return v
}