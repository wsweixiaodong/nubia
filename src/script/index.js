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
                        <a href="#">
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
        _this.i1.onmouseover = function() {
            _this.personal.style.display = 'block';
            _this.personal.onmouseover = function() {
                _this.personal.style.display = 'block';
            }
        }
        _this.i1.onmouseout = function() {
            _this.personal.style.display = 'none';
            _this.personal.onmouseout = function() {
                _this.personal.style.display = 'none';
            }

        }
    }
}
new personal().init();