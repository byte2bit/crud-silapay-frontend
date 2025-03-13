export default function convertFloatInv(valor) {
    let v = +parseFloat((valor).replace(",", ".")).toFixed(2)
    if (v<0) v=v*(-1)
    return v
}