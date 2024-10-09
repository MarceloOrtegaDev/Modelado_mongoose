# Sistema de Registro de Ventas para Comercio de Suministros de Limpieza

## Descripción del Proyecto

Implemento un sistema de registro de ventas para un comercio de suministros de limpieza que permite a los empleados registrar sus ventas de forma individual y acceder a la aplicación utilizando credenciales de autenticación.

## Características Principales

- Registro de ventas individual por empleado
- Autenticación de empleados
- Modelo de datos en MongoDB usando Mongoose

## Estructura del Modelo de Datos

El proyecto utiliza un modelo de datos en MongoDB con Mongoose. La estructura principal es la siguiente:

### Empleado (Employee)
- Nombre (name)
- Edad (age)
- Usuario (user)
  - Nombre de usuario (username)
  - Correo electrónico (email)
  - Contraseña (password)
- Ventas (sales)
  - Fecha (date)
  - Productos (products)
    - Nombre (name)
    - Precio (price)
    - Cantidad (quantity)
    
El usuario va a tener su nombre y edad, va a tener un schema embebido de user para poder validar sus credenciales donde se le solicita los siguientes campos que se registraron arriba, luego tendrá un schema de ventas también embebido donde se utilizará un array porque contendra numerosas ventas y la fecha en la que se realizaron dichas ventas, VENTAS tiene un array de objetos que tendrá como fin almacenar los diferentes productos que vende, el nombre de dichos productos, su precio y la cantidad.

## Justificación del Diseño

- Se ha optado por un modelo embebido para las ventas y productos dentro del documento de empleado. Esto permite un acceso más rápido a los datos de ventas de cada empleado y simplifica las consultas.
- La información de usuario se incluye directamente en el documento del empleado para mantener toda la información relacionada con el empleado en un solo lugar.

## Instalación

1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Configura las variables de entorno necesarias (por ejemplo, la conexión a la base de datos)
4. Ejecuta el proyecto con `npm start`