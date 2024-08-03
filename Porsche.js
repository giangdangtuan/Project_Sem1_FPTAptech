const search_item = document.getElementById('search-item');
const element_all= document.querySelectorAll('.element_all');
const filter_button = document.querySelectorAll('#filter_button .tab-item')

//search

search_item.addEventListener('keyup',searchItem);

function searchItem(){
    let valueItem = search_item.value.toLowerCase();
    Array.from(element_all).forEach(function (ele){
        let name = ele.querySelector('.info').firstElementChild.textContent;
        let price = ele.querySelector('.info').children[2].textContent;
        if(name.toLowerCase().indexOf(valueItem) !== -1){
            ele.style.display = 'block';
        }
        else if (price.toLowerCase().indexOf(valueItem) !== -1) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
    })
}





Array.from(filter_button).forEach(function(element){
    element.addEventListener('click',function(event){
        // when click filter current button has class active
        for(let i=0;i<filter_button.length;i++){
            filter_button[i].classList.remove('active');
        }
        this.classList.add('active');

        let name_filter = element.dataset.filter// get data of filter

        Array.from(element_all).forEach(function (ele){
            if (ele.dataset.item === name_filter || name_filter === 'all'){
                ele.style.display = 'block';
                console.log(ele.dataset.item)
            }
            else {
                ele.style.display = 'none'
            }
        })
        })



})



// class Product {
//     name;
//     img;
//     priceCurrent;
//     review;
//
//
//     constructor(name, img, priceCurrent, review) {
//         this.name = name;
//         this.img = img;
//         this.priceCurrent = priceCurrent;
//         this.review = review;
//     }
//
//     getName() {
//         return this.name;
//     }
//
//     setName(value) {
//         this.name = value;
//     }
//
//     getImg() {
//         return this.img;
//     }
//
//     setImg(value) {
//         this.img = value;
//     }
//
//     getPriceCurrent() {
//         return this.priceCurrent;
//     }
//
//     setPriceCurrent(value) {
//         this.priceCurrent = value;
//     }
//
//     getReview() {
//         return this.review;
//     }
//
//     setReview(value) {
//         this.review = value;
//     }
// }
// // Porsche
// var product1 = new Product( "718 Cayman T 222939", "asset/img/pc1.jpg", "$219.991", "(3k5 Reviews");
// var product2 = new Product("Taycan 4S 222691", "asset/img/pc2.jpg", "$307.108", "3k5 Reviews");
// var product3 = new Product("Macan 233048", "asset/img/pc3.jpg", "$192.634","3k3 Reviews");
// var product4 = new Product("Cayenne Coupé Platinum Edition 233198", "asset/img/pc4.jpg", "$320.785");
// var product5 = new Product("Taycan 4S Cross Turismo 222861", "asset/img/pc5.jpg", "$350.982");
// var product6 = new Product("Panamera GTS 222521", "asset/img/pc6.jpg", "$702.893");
// // Audi
// var product7 = new Product("2023 Audi e-tron", "asset/img/audi1.jpg", "3700.000");
// var product8 = new Product("2023 Audi SQ5", "asset/img/audi2.jpg", "4000.000");
// var product9 = new Product("2023 SQ7", "asset/img/audi3.jpg", "4300.000");
// var product10 = new Product("2023 SQ8", "asset/img/audi4.jpg", "8000.000");
// var product11 = new Product("2023 A3", "asset/img/audi5.jpg", "8000.000");
// var product12 = new Product("2023 S3 Prestige", "asset/img/audi6.jpg", "8000.000");
// //Mercedes
// var product13 = new Product("W211 E350", "asset/img/merc1.png", "3700.000");
// var product14 = new Product("W221 S550", "asset/img/merc2.png", "4000.000");
// var product15 = new Product("W205 C300", "asset/img/merc3.png", "4300.000");
// var product16 = new Product("X-Class", "asset/img/merc4.png", "8000.000");
// var product17 = new Product("GLC 2023", "asset/img/merc5.png", "8000.000");
// var product18 = new Product("E 300 AMG", "asset/img/merc6.png", "8000.000");
//
//
// arrProductPorsche = [product1, product2, product3, product4, product5, product6]
// display(arrProductPorsche)
//
// function display(arrProductPorsche) {
//     let data = "";
//     for (let i = 0; i < arrProductPorsche.length; i++) {
//         data += `
//
//              <div class="box info">
//                 <h3 class="name_item">${arrProductPorsche[i].name}</h3>
//                 <img src="${arrProductPorsche[i].img}" alt="" >
//                 <span>${arrProductPorsche[i].priceCurrent}</span>
//                 <i class='bx bxs-star'><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>${arrProductPorsche[i].review}</i>
//                 <a href="#" class="btn">Buy Now</a>
//                 <a href="" class="details">View Details</a>
//              </div>
//             `
//     }
//     document.getElementById("displayElement").innerHTML = data;
//     localStorage.setItem('Product', JSON.stringify(Product));
// }
//
// function changeProductList(){
//     console.log('ok')
// }



