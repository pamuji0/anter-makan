const {Menu, Pelanggan, Pesanan} = require("./models")

Menu.create({
    nama: "Es Teh",
    jenis: "minuman",
    stock: "1",
    url:"https://drive.google.com/file/d/1bEZZGTR2nnqs4BgzLo20nsUFFHz_wjaU/view?usp=sharing"

})

// Menu.create({
//     nama: "Nasi Goreng",
//     jenis: "makanan",
//     stock: "1",
//     url:"https://drive.google.com/file/d/1ECD0gIpqwJie20A_6U55vT0Tg0ZXFQHb/view?usp=sharing"
// },{
//     nama: "Bakso",
//     jenis: "makanan",
//     stock: "1",
//     url:"https://drive.google.com/file/d/1bSlLmiqDFb9ifl_C-HKPwfnfhf3HhcRu/view?usp=sharing"
// },{
//     nama: "Mi Ayam",
//     jenis: "makanan",
//     stock: "2",
//     url:"https://drive.google.com/file/d/1ECD0gIpqwJie20A_6U55vT0Tg0ZXFQHb/view?usp=sharing"
// },{
//     nama: "Es Teh",
//     jenis: "minuman",
//     stock: "1",
//     url:"https://drive.google.com/file/d/1bEZZGTR2nnqs4BgzLo20nsUFFHz_wjaU/view?usp=sharing"
// },{
//     nama: "Dawet Ireng",
//     jenis: "makanan",
//     stock: "0",
//     url:"https://drive.google.com/file/d/140T_qfR7M4LSpivDY6ICZx--_qrTsoaR/view?usp=sharing",
// })

// Pelanggan.create({
    // nama:"paijo",
    // email:"paijo@mail.com",
    // password:"paijo@MAIL",
    // alamat:"alamat",
    // noHP:"09876421"
// })

// Pesanan.create({
    // pemesan:"paijo",
    // menu:"Nasi Goreng",
    // jumlah:1,
    // status: "menunggu",
    // catatan:"pedas"
// })