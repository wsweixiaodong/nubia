class commodity {

    constructor() {
        this.goodslist = document.querySelector('.goodslist');
    }


    init() {
        let _this = this;
        ajax({
            url: 'http://localhost/php.php/nubia/php/nubialist.php',
            dataType: 'json'
        }).then(function(date) {
            console.log(date);
            let strhtml = '<ul>';
            for (let value of date) {
                strhtml += `
                    <li>
                        <a href="detail.html?sid=${value.sid}" >
                            <img src="${value.url}">
                            <div>
                            <p>${value.title}</p> 
                            <span>
                                ${value.price}
                            </span>
                            </div>
                        </a>
                    </li>
                    `
            };
            strhtml += '</ul>'
            _this.goodslist.innerHTML = strhtml;
        });
    }
}
new commodity().init();




// 个人中心渲染的二级导航
class personal {

    constructor() {
        this.personal = document.querySelector('.personal');
        this.i1 = document.querySelector('.i1');
    }

    init() {
        let _this = this;
        this.i1.onmouseover = function() {
            _this.personal.style.display = 'block';
            _this.personal.onmouseover = function() {
                _this.personal.style.display = 'block';
            }
        }
        this.i1.onmouseout = function() {
            _this.personal.style.display = 'none';
            _this.personal.onmouseout = function() {
                _this.personal.style.display = 'none';
            }

        }
    }
}
new personal().init();


// 购物车渲染的二级导航

class cart {

    constructor() {
        this.shopping = document.querySelector('.shopping');
        this.i2 = document.querySelector('.i2');
    }

    init() {
        let _this = this;
        _this.i2.onmouseover = function() {
            _this.shopping.style.display = 'block';
            _this.shopping.onmouseover = function() {
                _this.shopping.style.display = 'block';
            }
        }
        _this.i2.onmouseout = function() {
            _this.shopping.style.display = 'none';
            _this.shopping.onmouseout = function() {
                _this.shopping.style.display = 'none';
            }

        }
    }
}
new cart().init();


//苹果图标鼠标移入出现二维码

class code {

    constructor() {
        this.pic = document.querySelector('.pic');
        this.i3 = document.querySelector('.i3');
    }

    init() {
        let _this = this;
        _this.i3.onmouseover = function() {
            _this.pic.style.display = 'block';
        }
        _this.i3.onmouseout = function() {
            _this.pic.style.display = 'none';
        }
    }
}
new code().init();