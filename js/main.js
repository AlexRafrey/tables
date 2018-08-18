let json = {
	"name": "BTC/USD",
  
	"asks": [
	  {
		"numberOfOrders": 1,
		"price": 6074.9,
		"quantity": 3.93318116
	  }, {
		"numberOfOrders": 1,
		"price": 6080,
		"quantity": 0.01
	  }, {
		"numberOfOrders": 1,
		"price": 6081.04,
		"quantity": 34.6
	  }, {
		"numberOfOrders": 1,
		"price": 6084.12,
		"quantity": 0.04
	  }, 
	  {
		"numberOfOrders": 1,
		"price": 6096.08,
		"quantity": 0.04
	  }, {
		"numberOfOrders": 1,
		"price": 6097.07,
		"quantity": 36
	  }, {
		"numberOfOrders": 1,
		"price": 6098.3,
		"quantity": 12
	  }, {
		"numberOfOrders": 1,
		"price": 6099.24,
		"quantity": 0.07
	  }, {
		"numberOfOrders": 2,
		"price": 6100,
		"quantity": 2.51
	  },
	  {
		"numberOfOrders": 1,
		"price": 6096.08,
		"quantity": 0.04
	  }, {
		"numberOfOrders": 1,
		"price": 6097.07,
		"quantity": 36
	  }, {
		"numberOfOrders": 1,
		"price": 6098.3,
		"quantity": 12
	  }, {
		"numberOfOrders": 1,
		"price": 6099.24,
		"quantity": 0.07
	  }, {
		"numberOfOrders": 2,
		"price": 6100,
		"quantity": 2.51
	  },
	],
	"bids": [
	  {
		"numberOfOrders": 3,
		"price": 6074.6,
		"quantity": 4.86156108
	  },  {
		"numberOfOrders": 12,
		"price": 6074.1,
		"quantity": 18.17205416
	  }, {
		"numberOfOrders": 1,
		"price": 6074.01,
		"quantity": 0.5
	  }, {
		"numberOfOrders": 10,
		"price": 6074,
		"quantity": 46.77093599
	  }, {
		"numberOfOrders": 1,
		"price": 6073.95,
		"quantity": 5.52
	  }, {
		"numberOfOrders": 1,
		"price": 6073.92,
		"quantity": 17
	  }, {
		"numberOfOrders": 13,
		"price": 6073.9,
		"quantity": 17.4395331
	  }, {
		"numberOfOrders": 1,
		"price": 6073.87,
		"quantity": 0.04
	  }, {
		"numberOfOrders": 6,
		"price": 6073.8,
		"quantity": 18.182
	  }, {
		"numberOfOrders": 1,
		"price": 6073.72,
		"quantity": 17
	  }, {
		"numberOfOrders": 9,
		"price": 6073.7,
		"quantity": 21.6092696
	  }, {
		"numberOfOrders": 2,
		"price": 6073.65,
		"quantity": 0.0003293
	  }, {
		"numberOfOrders": 8,
		"price": 6073.6,
		"quantity": 12.16814977
	  },
	  {
		"numberOfOrders": 9,
		"price": 6074.5,
		"quantity": 15.7519723
	  }, {
		"numberOfOrders": 17,
		"price": 6074.46,
		"quantity": 1.19
	  }, {
		"numberOfOrders": 10,
		"price": 6074.4,
		"quantity": 24.71556326
	  }, {
		"numberOfOrders": 13,
		"price": 6074.3,
		"quantity": 14.28293521
	  }, 
	  {
      "numberOfOrders": 1,
      "price": 6096.08,
      "quantity": 0.04
    }, {
      "numberOfOrders": 1,
      "price": 6097.07,
      "quantity": 36
    }, {
      "numberOfOrders": 1,
      "price": 6098.3,
      "quantity": 12
    }, {
      "numberOfOrders": 1,
      "price": 6099.24,
      "quantity": 0.07
    }, {
      "numberOfOrders": 2,
      "price": 6100,
      "quantity": 2.51
    },
	]
}	

// const data = JSON.parse(json);
const tbody_right = document.querySelector('.tbody_right');
const tbody_left = document.querySelector('.tbody_left');

function giveData(data, table_name) {
	data.forEach(object => { 
		let tr = document.createElement('tr');
		let total = '';
	
		for (const key in object) {
			if (object.hasOwnProperty(key)) { 
				
				total += Math.round(object[key]);
				let td = document.createElement('td');
				let el = object[key]+''; 
				td.innerHTML = el.substr(0, 10);
				tr.appendChild(td); 
				 
			}
		}
	 
		let td_total = document.createElement('td'); 
		td_total.innerHTML = total.substr(0, 10);
		 
		td_total.appendChild( createGraph(total) );  
		tr.appendChild(td_total);

		
		table_name.appendChild(tr);
	});
}
giveData(json.bids, tbody_left);
giveData(json.asks, tbody_right);



function createGraph(total) {
	const max = 50607425;
	let percent = Math.round(max / total) > 100 ? 100 : Math.round (max / total); 
	let span = document.createElement('span'); 
	span.className  = 'grath_one';
	span.style.width = percent+'%';
	return span;
}

let table = document.querySelectorAll('table');

table.forEach(element => {
	element.addEventListener('mouseover', (e) => {  
		e.target.closest('div').style.overflowY = 'scroll'; 
	}) 
	element.addEventListener('mouseout', (e) => {  
		e.target.closest('div').style.overflowY = 'hidden'; 
	}) 
});

