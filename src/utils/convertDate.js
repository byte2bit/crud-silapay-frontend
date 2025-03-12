//converte data
export default function convertDate(data) {
    let a = data.split("T")[0]
    let d = a.split("-")
    let dat = d[2] + "/" + d[1] + "/" + d[0]
    return (dat)
}
