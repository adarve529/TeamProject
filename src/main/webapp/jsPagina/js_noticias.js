/**
 * 
 */


//vamos ha hacer que el boton de leer mas se alinee independientemente
//de la cantidad de texto que haya en cada parrafo
document.addEventListener("DOMcontentLoaded", function(e){
	const parrafos = document.querySelectorAll('.descripcion');
	
	let alturas = [];
	let alturaMaxima = 0;
	
	const aplicarAlturas = (function aplicarAlturas(){
		parrafos.forEach(parrafo =>{
			if(alturaMaxima == 0) {
				alturas.push(parrafo.clientHeight);
			}else{
				parrafo.style.height = alturaMaxima + "px";
			}
		
		});
		
		return aplicarAlturas;
	
	})();
	
	alturaMaxima = Math.max.apply(Math, alturas);
	aplicarAlturas();
});