//Просьба - залейте на репощиторий и в настройках включите доступность на мастер бранч(блок GithubPages) - и скиньте ссылку по которой доступен реп
// чтобы я мог не стягивая репозиторий сразу смотреть.

/*1 Напишите функции :
- 1 - удаляет из ДОМ структуры все узлы которые не елемент(метод removeChild), возращает массив елементов.
- 2 - возвращает в виде массива узлы только типа коммент
*/

/*2
Создайте div, a, ul>li*5
у дива, ссылки и ул есть ИД
Напишите функцию
- 1 - выводит промпт с вопросом "с каким элементом вы хотите взаимодействовать"(напишите перечень ид, я буду пробовать), вы вводите ид получаете к нему доступ
(если это список - доп вопрос к какому по счёту элементу списка применятся действия)
следущий промпт  спрашивает "что вы хотите изменить (a - аттрибут, s - стили)"
- для аатрибута - спрашивает - что вы хотите сделать(установить, удалить, отредактировать) - если установить или редактировать - то 2 промпта спрашивают имя атрибута и значение, для удаления только имя
- для стилей - промпт принимает значение как и аттрибут style , т.е. 'width:20px;height:20px' и т.д. - как реализовывать - на ваше усмотрение
*/




var idList = [];


//1. Функции
function clearDomFromText(){
	for(var i = 0; i < document.body.childNodes.length; i++){
		if(document.body.childNodes[i].nodeType === 3){document.body.removeChild(document.body.childNodes[i])};
	};
}

function clearDomFromComments(){
	for(var i = 0; i < document.body.childNodes.length; i++){
		if(document.body.childNodes[i].nodeType === 8){document.body.removeChild(document.body.childNodes[i])};
	};
}

function clearDomFromNonElements(){
	clearDomFromText();
	clearDomFromComments();
	getElementNodesArray()
}

function getElementNodesArray(){
	var arr = [];
	var temp = document.body.getElementsByTagName('*');
	for(var i = 0; i < temp.length; i ++){
		if(temp[i].nodeType === 1){
			arr.push(temp[i]);
			if(temp[i].id != '') {idList.push(temp[i].id)}
		}
	};
	return arr;
};

function getCommentNodesArray(){
	var arr = [];
	for(var i = 0; i < document.body.childNodes.length; i ++){
		if(document.body.childNodes[i].nodeType === 8) arr.push(document.body.childNodes[i]);
	};
	return arr;
};




//2. div
function createElementWithId(element, withId){
	var temp = document.createElement(element);
	if(withId == true) temp.id = element;
	temp.innerHTML = element + ' ' + element;
	return temp;
}

function fillUl(qntOfLi){
	var li
	for(var i = 0; i<qntOfLi;i++){
		li = createElementWithId('li', '',false);
		document.getElementById('ul').appendChild(li);
		li.innerHTML = 'li'
	}
}

var div = createElementWithId('div',  true);
var a = createElementWithId('a', true);
var ul = createElementWithId('ul', true);
var button = createElementWithId('button', false);


document.body.appendChild(div);
document.body.appendChild(button);
document.getElementById('div').appendChild(a);
document.getElementById('div').appendChild(ul);

button.onclick = culmination;

fillUl(5);



/*
Напишите функцию
- 1 - выводит промпт с вопросом "с каким элементом вы хотите взаимодействовать"(напишите перечень ид, я буду пробовать), вы вводите ид получаете к нему доступ
(если это список - доп вопрос к какому по счёту элементу списка применятся действия)
следущий промпт  спрашивает "что вы хотите изменить (a - аттрибут, s - стили)"
- для аатрибута - спрашивает - что вы хотите сделать(установить, удалить, отредактировать) - если установить или редактировать - то 2 промпта спрашивают имя атрибута и значение, для удаления только имя
- для стилей - промпт принимает значение как и аттрибут style , т.е. 'width:20px;height:20px' и т.д. - как реализовывать - на ваше усмотрение
*/

var useThisElement;
var getIntentions;

function getIdToWorkWith(){
	idList = idList.toString()
	const input = prompt('There are such ID\'s on the page right now: ' + idList + '\n Which one You would like to work with?', '');
	if(input == 'div' || input == 'a'|| input == 'ul' ){
		if(input == 'ul'){
			const inputLi = prompt('Which li are You interested in? \nIndex starts from 1, currently there are ' + document.getElementById('ul').children.length + ' li\'s inside ul#ul', '');
			if(inputLi >= 1 && inputLi < document.getElementById('ul').children.length + 1){
				return document.getElementById('ul').children[inputLi] - 1;
			}else{
				alert('There is no such li tag index in ul#ul element children!');
			}
		}
		useThisElement = document.getElementById(input);
		return useThisElement
	}else{
		alert('There is no such ID on the page right now!');
	}
}

var getIntentionsFunc = function(){
	if(getIdToWorkWith()){
		var input = prompt('What do You want to do next?\nYou may change it\'s attribute (input a), or it\'s style (input s)');
		input = input.toLowerCase();
		if(input == 'a' ||
		   input == 's'){
			getIntentions = input;
			return;
		}else{
			alert('Wrong input, refresh page to try again');
		}	
	}
}


//Создание элемента с уже существующим аттрибутом перезаписывает старый (перетирает и айди и классы.)
function culmination(){
	getIntentionsFunc();
	if(getIntentions == 'a'){
		const input = prompt('What are You about to do?\nYou may set an attribute (input 1)\nYou may edit an attribute (input 2)\nYou may delete an attribute (input 3)', '')
			var attributeName = prompt('Insert attribute name below.', '');
			if(useThisElement.getAttribute(attributeName) && input == 1){
				alert('This element already has such attribute, choose edit/delete mode next time to acces it.');
				return;
			}
			if((useThisElement.getAttribute(attributeName) || input == 1) && (input == 1 || input == 2)){
				var attributeValue = prompt('Insert attribute value below.', '');
			}
		
		if(input == 1){
				useThisElement.setAttribute(attributeName, attributeValue);
		}else if(input == 2){
			if(useThisElement.getAttribute(attributeName)){
				useThisElement.setAttribute(attributeName, attributeValue);
			}else{
				alert('This item doesn\'t have such attribute, You need to set it first');
			}
		}else if(input == 3){
			useThisElement.removeAttribute(attributeName);
			alert('Attribute removed.')
		}else{
			alert('Wrong input, refresh page to try again');
		}
	}else if(getIntentions == 's'){
		var style = '';
		var styleInput
		while(1){
			styleInput = prompt('Insert style properties with value\nOne property per iteration is a must!\nPRESS Esc/CLICK Cencel/CONFIRM BLANK TO APPLY!\n\nProperties, You\'ve already used:\n' + style,'')
			if(!styleInput){
				useThisElement.style.cssText = style;
				break;
			}
			style += styleInput + '\n';
		}
	}
}




clearDomFromNonElements();

