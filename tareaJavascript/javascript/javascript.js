
var	users;
$( document ).ready(function() {
		users=localStorage.getItem('users') 

			/*agregar la lista con los usuarios a la tabla*/
	for (var i = users.length - 1; i >= 0; i--) {
		var usuario=users[i];
		$.( '#table-usarios tr:last' ).after('<tr> <td>'+usuario[0]+' </td> <td>'+usuario[1]++' </td> <td> '+usuario[2]+'</td> </tr>');	
		
	}
});


function guardar(){
	var user= new Array();
	user[0]=document.getElementById('name').value;
	user[1]=document.getElementById('apellido').value;
	user[2]=document.getElementById('telf').value;


	/*agregar el nuevo usuario a la lista de usuarios existente*/
			var newuser=JSON.stringify(user);
		users.push(newuser);
		
/*guardar la nueva lista de usuarios en el local storage*/
	
	localStorage.setItem('users',JSON.stringify(users));



	
}
/*Remover el ultimo usuario de la lista y el ultimo usuario del local storage */
function remover(){
	$( "#table-usarios tr:last").remove();
	users=users.length -1;
	localStorage.setItem('users',JSON.stringify(users));

}