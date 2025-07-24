ingredientesList =
    [
        {
            "nombre": "Pan",
            "descripcion": "Pan de hamburguesa clásico",
            "precio": 2.5,
            "stock": 500
        },
        {
            "nombre": "Carne de res",
            "descripcion": "Carne de res jugosa y sabrosa",
            "precio": 8,
            "stock": 300
        },
        {
            "nombre": "Queso cheddar",
            "descripcion": "Queso cheddar derretido",
            "precio": 1.5,
            "stock": 200
        }
    ]

categoriasList =
    [
        {
            "nombre": "Clásica",
            "descripcion": "Hamburguesas clásicas y sabrosas"
        },
        {
            "nombre": "Vegetariana",
            "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
        },
        {
            "nombre": "Gourmet",
            "descripcion": "Hamburguesas gourmet con ingredientes premium"
        }
    ]

hamburguesasList =
    [
        {
            "nombre": "Clásica",
            "categoria": "Clásica",
            "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
            "precio": 10,
            "chef": "ChefA"
        },
        {
            "nombre": "Vegetariana",
            "categoria": "Vegetariana",
            "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
            "precio": 8,
            "chef": "ChefB"
        },
        {
            "nombre": "Doble Carne",
            "categoria": "Gourmet",
            "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
            "precio": 12,
            "chef": "ChefC"
        }
    ]

chefsList =
    [
        {
            "nombre": "ChefA",
            "especialidad": "Carnes"
        },
        {
            "nombre": "ChefB",
            "especialidad": "Cocina Vegetariana"
        },
        {
            "nombre": "ChefC",
            "especialidad": "Gourmet"
        }
    ]

boolEleccion = true;
boolIngrediente = true;
boolCategoria = true;
boolHamburguesa = true;
boolChef = true;

while (boolEleccion === true) {
    let menu = parseInt(prompt('============================================= \n ============Seleccione la lista a editar============ \n ============================================= \n 1. Ingredientes \n 2. Categorias \n 3. Hamburguesas \n 4.Chefs'));

    if (menu === 1) {
        while (boolIngrediente === true) {
            let ingredientesEleccion = parseInt(prompt("=============================================" + "\n" +
                "============Seleccione la lista a editar============" + "\n" +
                "============================================="  + "\n" +
                "1. Crear ingrediente" + "\n" +
                "2. Listar ingredeiente" + "\n" +
                "3. Actualizar ingrediente" + "\n" +
                "4. Eliminar ingrediente" + "\n"  +
                "5. Salir"))

            if (ingredientesEleccion === 1) {
                let nombreIngrediente = prompt('Ingrese el nombre del ingrediente:   ')
                let descripcionIngrediente = prompt('Ingrese la descripcion del ingrediente:   ')
                let precioIngrediente = prompt('Ingrese el precio del ingrediente:   ')
                let stockIngrediente = prompt('Ingrese el stock del ingrediente:   ')
                let ingredienteNuevo = { "nombre": nombreIngrediente, "descripcion": descripcionIngrediente, "precio": precioIngrediente, "stock": stockIngrediente }
                ingredientesList.push(ingredienteNuevo)
                alert("El nuevo ingrediente ha sido añadido con exito!")
            }
            else if (ingredientesEleccion === 2) {
                for (let i = 0; i < ingredientesList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + ingredientesList[i]['nombre'] + "\n" +
                        "Descripción: " + ingredientesList[i]['descripcion'] + "\n" +
                        "Precio: " + ingredientesList[i]['precio'] + "\n" +
                        "Stock: " + ingredientesList[i]['stock']
                    );
                }
            }
            else if (ingredientesEleccion === 3){
                alert("Revise los datos a continuacion")
                for (let i = 0; i < ingredientesList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + ingredientesList[i]['nombre'] + "\n" +
                        "Descripción: " + ingredientesList[i]['descripcion'] + "\n" +
                        "Precio: " + ingredientesList[i]['precio'] + "\n" +
                        "Stock: " + ingredientesList[i]['stock']
                    );
                }
                let ingredientesActualizar = parseInt(prompt("Ingrese el numero del dato a actualizar"))
                let ingredienteConfirmacion = parseInt(prompt(
                    "Dato N°: " + (ingredientesActualizar + 1) + "\n" +
                    "Nombre: " + ingredientesList[ingredientesActualizar]['nombre'] + "\n" +
                    "Descripción: " + ingredientesList[ingredientesActualizar]['descripcion'] + "\n" +
                    "Precio: " + ingredientesList[ingredientesActualizar]['precio'] + "\n" +
                    "Stock: " + ingredientesList[ingredientesActualizar]['stock'] + "\n" +
                    "Este es el dato a actualizar?  --1.Si  2.No--   "
                ));
                if (ingredienteConfirmacion === 1){
                    let nombreIngredienteNew = prompt('Ingrese el nombre del ingrediente:   ')
                    let descripcionIngredienteNew = prompt('Ingrese la descripcion del ingrediente:   ')
                    let precioIngredienteNew = prompt('Ingrese el precio del ingrediente:   ')
                    let stockIngredienteNew = prompt('Ingrese el stock del ingrediente:   ')
                    let ingredienteActualizado = { "nombre": nombreIngredienteNew, "descripcion": descripcionIngredienteNew, "precio": precioIngredienteNew, "stock": stockIngredienteNew }
                    ingredientesList[ingredientesActualizar-1] = ingredienteActualizado
                }
                else{
                    alert("Gracias por confirmar")
                }
            }

            else if (ingredientesEleccion === 4) {
                for (let i = 0; i < ingredientesList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + ingredientesList[i]['nombre'] + "\n" +
                        "Descripción: " + ingredientesList[i]['descripcion'] + "\n" +
                        "Precio: " + ingredientesList[i]['precio'] + "\n" +
                        "Stock: " + ingredientesList[i]['stock']
                    );
                }
                let ingredienteEliminar = parseInt(prompt("Ingrese el numero del dato a eliminar"))
                let ingredienteConfirmacion = prompt(
                    "Dato N°: " + (ingredienteEliminar + 1) + "\n" +
                    "Nombre: " + ingredientesList[ingredienteEliminar]['nombre'] + "\n" +
                    "Descripción: " + ingredientesList[ingredienteEliminar]['descripcion'] + "\n" +
                    "Precio: " + ingredientesList[ingredienteEliminar]['precio'] + "\n" +
                    "Stock: " + ingredientesList[ingredienteEliminar]['stock'] + "\n" +
                    "Este es el dato eliminar?  --1.Si  2.No--   "
                );
                if (ingredienteConfirmacion === 1){
                    ingredientesList.pop(ingredienteEliminar-1)
                    alert("Se ha eliminado correctamente")
                }
                else if (ingredientesEleccion === 5){
                    alert("volviendo al anterior menu")
                    boolIngrediente = false
                }
                else{
                    alert("Ingrese uan opciona valida!!!!!!!!!!!!")
                }
            }
            
        }
    }

    else if (menu === 2){
        while (boolCategoria === true) {
            let categoriaEleccion = parseInt(prompt("=============================================" + "\n" +
                "============Seleccione la lista a editar============" + "\n" +
                "============================================="  + "\n" +
                "1. Crear categoria" + "\n" +
                "2. Listar categoria" + "\n" +
                "3. Actualizar categoria" + "\n" +
                "4. Eliminar categoria" + "\n"  +
                "5. Salir"))

            if (categoriaEleccion === 1) {
                let nombreCategoria = prompt('Ingrese el nombre de la categoria:   ')
                let descripcionCategoria = prompt('Ingrese la descripcion de la categoria:   ')
                let categoriaNuevo = { "nombre": nombreCategoria, "descripcion": descripcionCategoria}
                ingredientesList.push(categoriaNuevo)
                alert("La categoria ha sido añadida con exito!")
            }
            else if (categoriaEleccion === 2) {
                for (let i = 0; i < categoriasList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + categoriasList[i]['nombre'] + "\n" +
                        "Descripción: " + categoriasList[i]['descripcion'] + "\n" );
                }
            }
            else if (categoriaEleccion=== 3){
                alert("Revise los datos a continuacion")
                for (let i = 0; i < categoriasList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + categoriasList[i]['nombre'] + "\n" +
                        "Descripción: " + categoriasList[i]['descripcion'] + "\n" );
                }
                let categoriasActualizar = parseInt(prompt("Ingrese el numero del dato a actualizar"))
                let categoriaConfirmacion = parseInt(prompt(
                    "Dato N°: " + (categoriasActualizar + 1) + "\n" +
                    "Nombre: " + categoriasList[categoriasActualizar]['nombre'] + "\n" +
                    "Descripción: " + categoriasList[categoriasActualizar]['descripcion'] + "\n" +
                    "Este es el dato a actualizar?  --1.Si  2.No--   "
                ));
                if (categoriaConfirmacion === 1){
                    let nombreCategoriaNew = prompt('Ingrese el nombre de la categoria:   ')
                    let descripcionCategoriaNew = prompt('Ingrese la descripcion de la categoria:   ')
                    let categoriaActualizado = { "nombre": nombreCategoriaNew, "descripcion": descripcionCategoriaNew }
                    categoriasList[categoriasActualizar-1] = categoriaActualizado
                }
                else{
                    alert("Gracias por confirmar")
                }
            }

            else if (categoriaEleccion === 4) {
                for (let i = 0; i < categoriasList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + categoriasList[i]['nombre'] + "\n" +
                        "Descripción: " + categoriasList[i]['descripcion'] + "\n" );
                }
                let categoriaEliminar = parseInt(prompt("Ingrese el numero del dato a eliminar"))
                let categoriaConfirmacion = prompt(
                    "Dato N°: " + (categoriaEliminar + 1) + "\n" +
                    "Nombre: " + categoriasList[categoriaEliminar]['nombre'] + "\n" +
                    "Descripción: " + categoriasList[categoriaEliminar]['descripcion'] + "\n" +
                    "Este es el dato eliminar?  --1.Si  2.No--   "
                );
                if (categoriaConfirmacion === 1){
                    categoriasList.pop(categoriaEliminar-1)
                    alert("Se ha eliminado correctamente")
                }
                else if (categoriaEleccion === 5){
                    alert("volviendo al anterior menu")
                    boolCategoria = false
                }
                else{
                    alert("Ingrese uan opciona valida!!!!!!!!!!!!")
                }
            }
            
        }
    }
    else if (menu === 3){
        while (boolHamburguesa === true) {
            let hamburguesaEleccion = parseInt(prompt("=============================================" + "\n" +
                "============Seleccione la lista a editar============" + "\n" +
                "============================================="  + "\n" +
                "1. Crear hamburguesa" + "\n" +
                "2. Listar hamburguesa" + "\n" +
                "3. Actualizar hamburguesa" + "\n" +
                "4. Eliminar hamburguesa" + "\n"  +
                "5. Salir"))

            if (hamburguesaEleccion === 1) {
                let listHambur=[]
                let nombreHamburguesa = prompt('Ingrese el nombre de la hamburguesa:   ')
                let categoriaHamburguesa = prompt('Ingrese la categoria de la hamburguesa:   ')
                let numIngredientesHambu = prompt('Ingrese el numero de ingredientes de la hamburguesa:   ')
                for(let k = 0; k < numIngredientesHambu; i++){
                    let ingredienteHamburguesa = prompt("Ingrese el ingredeinte de la hamburguesa")
                    listHambur.push(ingredienteHamburguesa)
                }
                let ingredientesHamburguesas = listHambur;
                let precioHamburguesa = prompt('Ingrese el precio de las hamburguesas   ')
                let chefHamburguesa = prompt('Ingrese el chef de la hamburguesa')
                let hamburguesaNuevo = { "nombre": nombreHamburguesa, "categoria": categoriaHamburguesa, "ingredientes": ingredientesHamburguesas, "precio": precioHamburguesa, "chef" : chefHamburguesa }
                hamburguesasList.push(hamburguesaNuevo)
                alert("La nueva hamburguesa ha sido añadido con exito!")
            }
            else if (hamburguesaEleccion === 2) {
                for (let i = 0; i < hamburguesasList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + hamburguesasList[i]['nombre'] + "\n" +
                        "categoria: " + hamburguesasList[i]['categoria'] + "\n" +
                        "ingredientes: " + hamburguesasList[i]['ingredientes'] + "\n" +
                        "precio: " + hamburguesasList[i]['precio'] +
                        "chef: " + hamburguesasList[i]['chef']
                    );
                }
            }
            else if (hamburguesaEleccion === 3){
                let listHamburNew =[]
                alert("Revise los datos a continuacion")
                for (let i = 0; i < hamburguesasList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + hamburguesasList[i]['nombre'] + "\n" +
                        "categoria: " + hamburguesasList[i]['categoria'] + "\n" +
                        "ingredientes: " + hamburguesasList[i]['ingredientes'] + "\n" +
                        "precio: " + hamburguesasList[i]['precio'] +
                        "chef: " + hamburguesasList[i]['chef']
                    );
                }
                let hamburguesasActualizar = parseInt(prompt("Ingrese el numero del dato a actualizar"))
                let hamburguesaConfirmacion = parseInt(prompt(
                    "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + hamburguesasList[hamburguesasActualizar]['nombre'] + "\n" +
                        "categoria: " + hamburguesasList[hamburguesasActualizar]['categoria'] + "\n" +
                        "ingredientes: " + hamburguesasList[hamburguesasActualizar]['ingredientes'] + "\n" +
                        "precio: " + hamburguesasList[hamburguesasActualizar]['precio'] +
                        "chef: " + hamburguesasList[hamburguesasActualizar]['chef'] +
                    "Este es el dato a actualizar?  --1.Si  2.No--   "
                ));
                if (hamburguesaConfirmacion == 1) {
                    let nombreHamburguesaNew = prompt('Ingrese el nombre de la hamburguesa:   ')
                    let categoriaHamburguesaNew = prompt('Ingrese la categoria de la hamburguesa:   ')
                    let numIngredientesHambuNew = prompt('Ingrese el numero de ingredientes de la hamburguesa:   ')
                    for(let k = 0; k < numIngredientesHambuNew; i++){
                        let ingredienteHamburguesaNew = prompt("Ingrese el ingredeinte de la hamburguesa")
                        listHamburNew.push(ingredienteHamburguesaNew)
                    }
                    let ingredientesHamburguesasNew = listHamburNew;
                    let precioHamburguesaNew = prompt('Ingrese el precio de la hamburguesa:   ')
                    let chefHamburguesaNew = prompt('Ingrese el chef que hizo la hamburguesa:   ')
                    let hamburguesaActualizado = {"nombre" : nombreHamburguesaNew, "categoria" : categoriaHamburguesaNew, "ingredientes" : ingredientesHamburguesasNew, "precio" : precioHamburguesaNew, "chef" : chefHamburguesaNew}
                    hamburguesasList[hamburguesasActualizar-1] = hamburguesaActualizado
                }
                else{
                    alert("Gracias por confirmar")
                }
            }

            else if (hamburguesaEleccion === 4) {
                for (let i = 0; i < hamburguesasList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + hamburguesasList[i]['nombre'] + "\n" +
                        "categoria: " + hamburguesasList[i]['categoria'] + "\n" +
                        "ingredientes: " + hamburguesasList[i]['ingredientes'] + "\n" +
                        "precio: " + hamburguesasList[i]['precio'] +
                        "chef: " + hamburguesasList[i]['chef']
                    );
                }
                let hamburguesaEliminar = parseInt(prompt("Ingrese el numero del dato a eliminar"))
                let hamburguesaConfirmacion = prompt(
                    "Dato N°: " + (i + 1) + "\n" +
                    "Nombre: " + hamburguesasList[hamburguesaEliminar]['nombre'] + "\n" +
                    "categoria: " + hamburguesasList[hamburguesaEliminar]['categoria'] + "\n" +
                    "ingredientes: " + hamburguesasList[hamburguesaEliminar]['ingredientes'] + "\n" +
                    "precio: " + hamburguesasList[hamburguesaEliminar]['precio'] +
                    "chef: " + hamburguesasList[hamburguesaEliminar]['chef'] +
                    "Este es el dato eliminar?  --1.Si  2.No--   "
                );
                if (ingredienteConfirmacion === 1){
                    hamburguesasList.pop(hamburguesaEliminar-1)
                    alert("Se ha eliminado correctamente")
                }
                else if (ingredientesEleccion === 5){
                    alert("volviendo al anterior menu")
                    boolHamburguesa = false
                }
                else{
                    alert("Ingrese uan opciona valida!!!!!!!!!!!!")
                }
            }
            
        }
    }

    else if (menu === 4) {
        while (boolChef === true) {
            let chefEleccion = parseInt(prompt("=============================================" + "\n" +
                "============Seleccione la lista a editar============" + "\n" +
                "============================================="  + "\n" +
                "1. Crear chef" + "\n" +
                "2. Listar chefs" + "\n" +
                "3. Actualizar chefs" + "\n" +
                "4. Eliminar chefs" + "\n"  +
                "5. Salir"))

            if (chefEleccion === 1) {
                let nombreChef = prompt('Ingrese el nombre del chef:   ')
                let especialidadChef = prompt('Ingrese la especialidad del chef:   ')
                let chefNuevo = { "nombre": nombreChef, "especialidad": especialidadChef}
                chefsList.push(chefNuevo)
                alert("El chef ha sido añadida con exito!")
            }
            else if (chefEleccion === 2) {
                for (let i = 0; i < chefsList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + chefsList[i]['nombre'] + "\n" +
                        "Especialidad: " + chefsList[i]['especialidad'] + "\n" );
                }
            }
            else if (chefEleccion=== 3){
                alert("Revise los datos a continuacion")
                for (let i = 0; i < chefsList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + chefsList[i]['nombre'] + "\n" +
                        "Especialidad: " + chefsList[i]['especialidad'] + "\n" );
                }
                let chefActualizar = parseInt(prompt("Ingrese el numero del dato a actualizar"))
                let chefConfirmacion = parseInt(prompt(
                    "Dato N°: " + (chefActualizar + 1) + "\n" +
                    "Nombre: " + chefsList[chefActualizar]['nombre'] + "\n" +
                    "Especialidad: " + chefsList[chefActualizar]['especialidad'] + "\n" +
                    "Este es el dato a actualizar?  --1.Si  2.No--   "
                ));
                if (chefConfirmacion === 1){
                    let nombreChefNew = prompt('Ingrese el nombre del chef:   ')
                    let especialidadChefNew = prompt('Ingrese la especialidad del chef:   ')
                    let chefActualizado = { "nombre": nombreChefNew, "descripcion": especialidadChefNew }
                    chefsList[chefActualizar-1] = chefActualizado
                }
                else{
                    alert("Gracias por confirmar")
                }
            }

            else if (chefEleccion === 4) {
                for (let i = 0; i < categoriasList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + chefsList[i]['nombre'] + "\n" +
                        "Especialidad: " + chefsList[i]['especialidad'] + "\n" );
                }
                let chefEliminar = parseInt(prompt("Ingrese el numero del dato a eliminar"))
                let chefConfirmacion = prompt(
                    "Dato N°: " + (chefEliminar + 1) + "\n" +
                    "Nombre: " + chefsList[chefEliminar]['nombre'] + "\n" +
                    "Especialidad: " + chefsList[chefEliminar]['especialidad'] + "\n" +
                    "Este es el dato a eliminar?  --1.Si  2.No--   "
                );
                if (chefConfirmacion === 1){
                    chefsList.pop(chefEliminar-1)
                    alert("Se ha eliminado correctamente")
                }
                else if (chefEleccion === 5){
                    alert("volviendo al anterior menu")
                    boolChef = false
                }
                else{
                    alert("Ingrese uan opciona valida!!!!!!!!!!!!")
                }
            }
            
        }
    }

}
