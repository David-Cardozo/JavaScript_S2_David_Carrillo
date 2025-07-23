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
            else if (ingredientesEleccion === 3) {
                for (let i = 0; i < ingredientesList.length; i++) {
                    alert(
                        "Dato N°: " + (i + 1) + "\n" +
                        "Nombre: " + ingredientesList[i]['nombre'] + "\n" +
                        "Descripción: " + ingredientesList[i]['descripcion'] + "\n" +
                        "Precio: " + ingredientesList[i]['precio'] + "\n" +
                        "Stock: " + ingredientesList[i]['stock']
                    );
                }
                let ingredienteActualizar = parseInt(prompt("Ingrese el numero del dato a actualizar:"))
            }
            
        }
    }

}
