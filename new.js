

let middle1=document.querySelectorAll(".middle1 select");
let toCurr=document.querySelector(".to select ");
let fromCurr=document.querySelector(".from select");
let img=document.querySelector(".from img")
let img1=document.querySelector(".to img")
let exchange=document.querySelector(".middle2");
let input=document.querySelector("#input");

for(let select of middle1){
	
	for(currCode in countryList){
		let newOption=document.createElement("option");
		
		newOption.innerText=currCode;
		newOption.value=currCode;
		// console.log(newOption);
		if(currCode==="NPR" && select.name==="from"){
			newOption.selected="selected";
		}
		else if(currCode==="USD" && select.name==="to"){
			newOption.selected="selected";
		}
		select.append(newOption);
		
	}
	
	select.addEventListener("change", ()=>{
		
		countryChanged=select.value;
		for(let val of codeToCurr){
			// console.log(val.Code);
			if (val.Code===countryChanged && select.name==="from"){
				img.src="https://flagsapi.com/"+val.CountryCode+"/flat/64.png";
			}
			else if(val.Code===countryChanged && select.name==="to")
			{
				img1.src="https://flagsapi.com/"+val.CountryCode+"/flat/64.png";
			}
		}
		
		
	});
	

}





// function getExchange(){
// 	if(input.value>=1){
// 		let a=`https://v6.exchangerate-api.com/v6/7f837d3d70ea43cb7b8dc75c/latest/${fromCurr.value}`;
		
		
// 		fetch(a)
// 		.	then(res=>res.json())
// 		.then(data=> {
// 			exchange.innerText=`${fromCurr.value}:${input.value*data.conversion_rates[fromCurr.value]} <--> ${toCurr.value}:${input.value*data.conversion_rates[toCurr.value]}`;
		
// 		});
// 	}else{
// 		alert("input value equal or greater than 1");
// 	}

	

	
	

// };
async function getExchange(){
	if(input.value>=1){
		let a=`https://v6.exchangerate-api.com/v6/7f837d3d70ea43cb7b8dc75c/latest/${fromCurr.value}`;
		
		let response= await fetch(a);
		
		let data=await response.json();
		exchange.innerText=`${fromCurr.value}:${input.value*data.conversion_rates[fromCurr.value]} <--> ${toCurr.value}:${input.value*data.conversion_rates[toCurr.value]}`;

		
	}else{
		alert("input value equal or greater than 1");
	}
}





