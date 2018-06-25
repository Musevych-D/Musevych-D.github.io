function renderShop(object){
	var divShop = document.createElement("div");
	divShop.id = 'shop';
	document.body.appendChild(divShop);


	object.forEach(function(q,w,e){
		//Группировка на создание, присвоение и вывод
		var divGoodsWrapper = document.createElement('div');
		var h2 = document.createElement("h2");
		var divGood = document.createElement('div');
		var divIcon = document.createElement('div');
		var imgIcon = document.createElement('img');
		var h3 = document.createElement("h3");
		var h4 = document.createElement("h4");
		var h4v2 = document.createElement("h4");
		var button1 = document.createElement("button");
		var button2 = document.createElement("button");
		var button3 = document.createElement("button");

		divGoodsWrapper.className = 'goodsWrapper';
		divGood.className = 'good';
		divIcon.className = 'icon';
		button1.className = 'btn'
		button2.className = q.type + q.model + 'btn'
		h2.innerHTML = q.type;
		imgIcon.src = 'img/' + q.model + '.png';
		h3.innerHTML = 'Model: ' + q.model;
		h4.innerHTML = 'Price: ' + q.price;
		h4.className = q.type + q.model + 'prc';
		h4v2.innerHTML = 'Quantity: ' + q.quantity;
		h4v2.className = q.type + q.model;
		button1.innerHTML = 'itemDescription';
		button2.innerHTML = 'buySomeItems';
		button3.innerHTML = 'setOnSale';

		divIcon.setAttribute("onClick",'alert(' + q.toString() + '.checkAvailability())');
		button1.setAttribute("onClick", q.toString() + '.describeItem()');
		button2.setAttribute("onClick", q.toString() + '.sellSomeItems()');
		button3.setAttribute("onClick", q.toString() + '.setOnSale()');
		
		document.getElementById('shop').appendChild(divGoodsWrapper);
		document.getElementsByClassName('goodsWrapper')[w].appendChild(h2);
		document.getElementsByClassName('goodsWrapper')[w].appendChild(divGood);
		document.getElementsByClassName('good')[w].appendChild(divIcon);
		document.getElementsByClassName('icon')[w].appendChild(imgIcon);
		document.getElementsByClassName('good')[w].appendChild(h3);
		document.getElementsByClassName('good')[w].appendChild(h4);
		document.getElementsByClassName('good')[w].appendChild(h4v2);
		document.getElementsByClassName('good')[w].appendChild(button1);	
		document.getElementsByClassName('good')[w].appendChild(button2);	
		document.getElementsByClassName('good')[w].appendChild(button3);	


		//Создание и вывод элемент за элементом
		/*
		var divGoodsWrapper = document.createElement('div');
		divGoodsWrapper.className = 'goodsWrapper';
		document.getElementById('shop').appendChild(divGoodsWrapper);

		var h2 = document.createElement("h2");
		h2.innerHTML = q.type;
		document.getElementsByClassName('goodsWrapper')[w].appendChild(h2);

		var divGood = document.createElement('div');
		divGood.className = 'good';
		document.getElementsByClassName('goodsWrapper')[w].appendChild(divGood);

		var divIcon = document.createElement('div');
		divIcon.className = 'icon';
		document.getElementsByClassName('good')[w].appendChild(divIcon);

		var imgIcon = document.createElement('img');
		imgIcon.src = q.icon;
		document.getElementsByClassName('icon')[w].appendChild(imgIcon);

		var h3 = document.createElement("h3");
		h3.innerHTML = q.model;
		document.getElementsByClassName('good')[w].appendChild(h3);

		var h4 = document.createElement("h4");
		h4.innerHTML = q.price;
		document.getElementsByClassName('good')[w].appendChild(h4);
		*/
	})
}