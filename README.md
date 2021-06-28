# Voxes (Native)
Voxes. Una aplicacion en donde se venden instrumentos musicales. 

:black_nib: Hecho por Juan Cruz Gutierrez

## Motivacion

Este proyecto corresponde al desafio final del curso de **React Native** dictado por **CCYD**.

La propuesta para el examen fue el desarrollo de una app nativa con tematica de e-commerce, por cuestiones de tiempo solo se pidio el desarrollo de la logica y funcionalidad desde la
perspectiva del comprador.

Como condiciones a evaluar se solicito la siguiente arquitectura de pantallas:

  - Pantalla de Inicio
  - Pantalla de Categoria de Productos
  - Pantalla de Items por Categoria de Productos
  - Pantalla de Total comprado

En cuanto al layout y navegacion se nos permitio usar la de nuestra preferencia, pudiendo elegir entre navbar, drawers, buttons, etc.

De igual forma se nos permitio libre eleccion para la estetica de la aplicacion ( imagenes, iconos, colores y fuentes )

## Caracteristicas

Actualmente el sitio presenta las siguientes caracteristicas:

  - Registro
    - Validacion de campos no vacios
    - Validacion de direccion de mail valida
    - Validacion de cantidad de digitos de usuario/contraseña
    - Validacion de contraseña con mayuscula y numero incluido
    - Validacion de usuario no repetido en el sistema
  - Login
    - Validacion de campos no vacios
    - Validacion de usuario registrado en el sistema
    - Validacion de contraseña valida
  - Muestra de todos los productos publicados en la pantalla de inicio
  - Permite agregar items al carrito
  - Muestra de items seleccionados en el carrito
      - Podemos ver detalles de los productos que estamos comprando (id, nombre, precio)
      - Opcion de **vaciar carrito** con el cual eliminamos los productos seleccionados 
      - Opcion de **Confirmar compra**
   - Navegacion de productos por **categoria**
   - Navegacion a perfil de usuario logueado
   - Permite el cierre de sesion
      - Una vez cerrada la sesion se redirecciona a la pantalla de **Inicio**
      
## Screens :camera:

<img style="margin-right: 100px" src="https://github.com/gutierrezS98/Voxes_Native/blob/main/github_img/Root.jpeg" width="30%">

<p float="left">
<img style="margin-right: 100px" src="https://github.com/gutierrezS98/Voxes_Native/blob/main/github_img/Register.jpeg" width="30%">

<img style="margin-right: 100px" src="https://github.com/gutierrezS98/Voxes_Native/blob/main/github_img/Login.jpeg" width="30%">
</p>

<p float="left">
<img style="margin-right: 100px" src="https://github.com/gutierrezS98/Voxes_Native/blob/main/github_img/Home.jpeg" width="30%">

<img style="margin-right: 100px" src="https://github.com/gutierrezS98/Voxes_Native/blob/main/github_img/Category.jpeg" width="30%">
</p>

<p float="left">
<img style="margin-right: 100px" src="https://github.com/gutierrezS98/Voxes_Native/blob/main/github_img/Cart.jpeg" width="30%">

<img style="margin-right: 100px" src="https://github.com/gutierrezS98/Voxes_Native/blob/main/github_img/User.jpeg" width="30%">
<p>

## Herramientas usadas :hammer_and_wrench:
  - **React Native**
  - **React (v16.13.1)**
  - **Expo (v41.0.1)**
  - **React-navigation/stack (v5.14.5)**
  - **React-navigation/native (v5.9.4)**
  - **React-native-community/hooks (v2.6.0)**
  - **React-native-community/masked-view (v0.1.10)**
  - **React-native-gesture-handler (v1.10.3)**
  - **React-native-reanimated (v2.1.0)**
  - **React-native-safe-area-context (v3.2.0)**
  - **React-native-screens (v3.0.0)**
  - **React-native-scripts (v2.0.1)**
  - **React-native-web (v0.13.12)**
