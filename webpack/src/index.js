import css from './css/index.css';
import sass from './css/common.scss';
// import $ from 'jquery';
var oDiv1 = document.getElementById('div1');
oDiv1.innerHTML = "Hello World123456!!!";

let a = 5;
let add = (x, y) => x + y;
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

$('#div6').html('test JQ123');

let json = require('../author.json');
document.querySelector('#json').innerHTML = `zuozhe:${json.name},age:${json.age},company:${json.company}`