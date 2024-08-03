let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    menu.classList.toggle('active');
    search.classList.remove('active');
}
// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}
// Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


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
//         this.review1 = review;
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
//
// var product1 = new Product("718 Cayman T 222939", "asset/img/pic1.jpg", "$219.991", "3k5 Reviews");
// var product2 = new Product("Taycan 4S 222691", "asset/img/pic2.jpg", "$307.108", "3k5 Reviews");
// var product3 = new Product("Macan 233048", "asset/img/pic3.jpg", "$192.634","3k3 Reviews");
// var product4 = new Product("Điện thoại Iphone 13 pro max 64GB", "./img/13pro.jpeg", "20.000.000");
// var product5 = new Product("Điện thoại Iphone 14 pro max 64GB", "./img/iPhone14pro.jpg", "37.000.000");
// var product6 = new Product("Apple Watch series 3", "./img/appleseries3.jpg", "3000.000");
// var product7 = new Product("Apple Watch series 4", "./img/watchseries4.jpg", "3700.000");
// var product8 = new Product("Apple Watch series 5", "./img/watchseri5.jpg", "4000.000");
// var product9 = new Product("Apple Watch series 6", "./img/Series6.jpg", "4300.000");
// var product10 = new Product("Apple Watch series 7", "./img/Seri7.jpg", "8000.000");
//
// arrProductPorsche = [product1, product2, product3]
// display(arrProductPorsche)
//
// arrProductAll = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];
// display(arrProductAll);
//
// // localStorage.setItem('product',JSON.stringify(arrProductAll));
// let product = JSON.parse(localStorage.getItem('product'));
// display(product);
//
//
// function display(arrProductPorsche) {
//     let data = "";
//     for (let i = 0; i < arrProductPorsche.length; i++) {
//         data += `
//              <div class="box">
//                 <img src="${arrProductPorsche[i].img}" alt="" >
//                 <h3>${arrProductPorsche[i].name}</h3>
//                 <span>${arrProductPorsche[i].priceCurrent}</span>
//                 <i class='bx bxs-star'><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>${arrProductPorsche[i].review}</i>
//                 <a href="#" class="btn">Buy Now</a>
//                 <a href="" class="details">View Details</a>
//              </div>`
//     }
//     document.getElementById("displayElement").innerHTML = data;
//     localStorage.setItem('product', JSON.stringify(product));
// }
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {

                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });
        });
    }

}



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
