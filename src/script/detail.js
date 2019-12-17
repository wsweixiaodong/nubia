class detail {

    constructor() {
        this.sid = location.search.substring(1).split('=')[1];
        this.pic = document.querySelector('#spic img');
        this.sf = document.querySelector('#sf');
        this.bf = document.querySelector('#bf');
        this.bpic = document.querySelector('#bpic');
        this.loadtitle = document.querySelector('.loadtitle'); //标题
        this.loadpcp = document.querySelector('.loadpcp'); //价格
        this.list = document.querySelector('#list ul'); //渲染底部小图
    }

    init() {
        let _this = this;
        ajax({
            url: 'http://localhost/php.php/nubia/php/detail.php',
            data: {
                picsid: this.sid
            },
            dataType: 'json'
        }).then(function(data) {
            console.log(data);
            _this.render(data)
        });
    }
    render(data) {
        this.pic.src = data.url;
        this.loadtitle.innerHTML = data.title;
        this.loadpcp.innerHTML = data.price;
        let picarr = data.imgurls.split(',');
        let strhtml = '';
        console.log(picarr);
        for (let value of picarr) {
            strhtml += `
                    <li><img src="${value}"></li>
                    `;
        }
        this.list.innerHTML = strhtml
    }
}
new detail().init();


// 加号 减号
class Modified {
    constructor() {
        this.dash = document.querySelector('.dash');
        this.sign = document.querySelector('.sign');
        this.count = document.querySelector('#count');
        this.loadpcp = document.querySelector('.loadpcp');
    }

    init() {
        let _this = this;
        this.dash.onclick = function() {
            if (_this.count.value > 1) {
                _this.count.value--;

            }
        }
        this.sign.onclick = function() {
            _this.count.value++;

        }

    }
}
new Modified().init();