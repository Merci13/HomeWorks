

$( document ).ready(function() {
	var	users=localStorage.getItem('users')   

});


function guardar(){
	var user= new Array();
	user[0]=document.getElementById('name').value;
	user[1]=document.getElementById('apellido').value;
	user[2]=document.getElementById('telf').value;

	var actualesUsuarios= users;
	/*agregar el nuevo usuario a la lista de usuarios existente*/

		actualesUsuarios.push(user);
/*guardar la nueva lista de usuarios en el local storage*/
	
	localStorage.setItem("users",JSON.stringify(actualesUsuarios));
	
}