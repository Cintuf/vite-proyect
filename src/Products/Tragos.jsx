const tragos = [{
  id: 1,
  name: "Campari",
  img: "https://www.magicovino.com/wp-content/uploads/2020/06/campari-1024x1024.jpg",
  price: 3300,
  category: "Aperitivos",
  stock: 5
},
{
  id: 2,
  name: "Fernet",
  img: "https://www.magicovino.com/wp-content/uploads/2020/06/fernet-1024x1024.jpg",
  price: 1000,
  category: "Aperitivos",
  stock: 20
},
{
  id: 3,
  name: "Ambar",
  img: "https://www.magicovino.com/wp-content/uploads/2020/10/ambar.jpg",
  price: 3000,
  category: "Vinos",

  stock: 15
},
{
  id: 4,
  name: "Amarone",
  img: "https://www.magicovino.com/wp-content/uploads/2020/09/amarone_zenato.jpg",
  price: 2000,
  category: "Vinos",
  stock: 10
},
{
  id: 5,
  name: "Altemasi Brut",
  img: "https://www.magicovino.com/wp-content/uploads/2020/05/altemasi-1-1024x1024.jpg",
  price: 1000,
  category: "Espumantes",
  stock: 8
},
{
  id: 6,
  name: "Bollinger",
  img: "https://www.magicovino.com/wp-content/uploads/2020/06/bollinger-2-1024x1024.jpg",
  price: 12000,
  category: "Espumantes",
  stock: 19
},
{
  id: 7,
  name: "Bulldog London Dry",
  img: 'https://www.magicovino.com/wp-content/uploads/2020/06/bulldog-1024x1024.jpg',
  price: 15000,
  category: "Aperitivos",
  stock: 20
},
{
  id: 8,
  name: "Cerveza Corona",
  img: "https://santacostilla.co/wp-content/uploads/2020/05/cerveza-corona-extra-santa-costilla.jpg",
  price: 1000,
  category: "Cervezas",
  stock: 12
},
{
  id: 9,
  name: "Cerveza Spencer",
  img: "https://assets.holyart.it/images/BB000014/es/500/A/SN061443/CLOSEUP01_HD/h-1bf50ce2/cerveza-spencer-quadrupel-monks-reserve-ale-quadrupel-33-cl.jpg",
  price: 800,
  category: "Cervezas",
  stock: 25
}]


export const myPromise = () => {
  return new Promise((res, rej) => {
    if (tragos.length > 0) {
      setTimeout(() => {
        res(tragos)
      }, 2000)
    } else {
      rej("error")
    }
  })
}

