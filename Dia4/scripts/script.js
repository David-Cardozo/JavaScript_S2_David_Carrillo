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
            let ingredientesEleccion = parseInt(prompt('============================================= \n ============Seleccione la lista a editar============ \n ============================================= \n 1. Crear ingrediente \n 2. Listar ingrediente \n 3. Actualizar ingrediente \n 4. Eliminar ingrediente \n 5. Salir'))

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
                let ingredienteConfirmacion = prompt(
                    "Dato N°: " + (ingredientesActualizar + 1) + "\n" +
                    "Nombre: " + ingredientesList[ingredientesActualizar]['nombre'] + "\n" +
                    "Descripción: " + ingredientesList[ingredientesActualizar]['descripcion'] + "\n" +
                    "Precio: " + ingredientesList[ingredientesActualizar]['precio'] + "\n" +
                    "Stock: " + ingredientesList[ingredientesActualizar]['stock'] + "\n" +
                    "Este es el dato a actualizar?  --1.Si  2.No--   "
                );
                let nombreIngredienteNew = prompt('Ingrese el nombre del ingrediente:   ')
                let descripcionIngredienteNew = prompt('Ingrese la descripcion del ingrediente:   ')
                let precioIngredienteNew = prompt('Ingrese el precio del ingrediente:   ')
                let stockIngredienteNew = prompt('Ingrese el stock del ingrediente:   ')
                let ingredienteActualizado = { "nombre": nombreIngredienteNew, "descripcion": descripcionIngredienteNew, "precio": precioIngredienteNew, "stock": stockIngredienteNew }
                ingredientesList[ingredientesActualizar-1] = ingredienteActualizado
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
            let categoriaEleccion = parseInt(prompt('============================================= \n ============Seleccione la lista a editar============ \n ============================================= \n 1. Crear categoria \n 2. Listar categoria \n 3. Actualizar categoria \n 4. Eliminar categoria \n 5. Salir'))

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
                let categoriaConfirmacion = prompt(
                    "Dato N°: " + (categoriasActualizar + 1) + "\n" +
                    "Nombre: " + categoriasList[categoriasActualizar]['nombre'] + "\n" +
                    "Descripción: " + categoriasList[categoriasActualizar]['descripcion'] + "\n" +
                    "Este es el dato a actualizar?  --1.Si  2.No--   "
                );
                let nombreCategoriaNew = prompt('Ingrese el nombre de la categoria:   ')
                let descripcionCategoriaNew = prompt('Ingrese la descripcion de la categoria:   ')
                let categoriaActualizado = { "nombre": nombreCategoriaNew, "descripcion": descripcionCategoriaNew }
                categoriasList[categoriasActualizar-1] = categoriaActualizado
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
            let hamburguesaEleccion = parseInt(prompt('============================================= \n ============Seleccione la lista a editar============ \n ============================================= \n 1. Crear hamburguesa \n 2. Listar hamburguesa \n 3. Actualizar hamburguesa \n 4. Eliminar hamburguesa \n 5. Salir'))

            if (hamburguesaEleccion === 1) {
                let nombreHamburguesa = prompt('Ingrese el nombre de la hamburguesa:   ')
                let categoriaHamburguesa = prompt('Ingrese la categoria de la hamburguesa:   ')
                let ingredientesHamburguesa = prompt('Ingrese los ingredeintes de la hamburguesa:   ')
                let precioHamburguesa = prompt('Ingrese el precio de las hamburguesas   ')
                let chefHamburguesa = prompt('Ingrese el chef de la hamburguesa')
                let hamburguesaNuevo = { "nombre": nombreHamburguesa, "categoria": categoriaHamburguesa, "ingredientes": ingredientesHamburguesa, "precio": precioHamburguesa, "chef" : chefHamburguesa }
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
                let ingredientesActualizar = parseInt(prompt("Ingrese el numero del dato a actualizar"))
                let ingredienteConfirmacion = prompt(
                    "Dato N°: " + (ingredientesActualizar + 1) + "\n" +
                    "Nombre: " + ingredientesList[ingredientesActualizar]['nombre'] + "\n" +
                    "Descripción: " + ingredientesList[ingredientesActualizar]['descripcion'] + "\n" +
                    "Precio: " + ingredientesList[ingredientesActualizar]['precio'] + "\n" +
                    "Stock: " + ingredientesList[ingredientesActualizar]['stock'] + "\n" +
                    "Este es el dato a actualizar?  --1.Si  2.No--   "
                );
                let nombreIngredienteNew = prompt('Ingrese el nombre del ingrediente:   ')
                let descripcionIngredienteNew = prompt('Ingrese la descripcion del ingrediente:   ')
                let precioIngredienteNew = prompt('Ingrese el precio del ingrediente:   ')
                let stockIngredienteNew = prompt('Ingrese el stock del ingrediente:   ')
                let ingredienteActualizado = { "nombre": nombreIngredienteNew, "descripcion": descripcionIngredienteNew, "precio": precioIngredienteNew, "stock": stockIngredienteNew }
                ingredientesList[ingredientesActualizar-1] = ingredienteActualizado
            }

            else if (hamburguesaEleccion === 4) {
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

}
