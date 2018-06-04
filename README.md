# Cifrado César 
_Proyecto que resuelve el reto de cifrar y descifrar en código César_

***
Prueba el demo final aquí: https://debbievejarano.github.io/lim-2018-05-bc-core-pm-cipher/src/

***
## Ejecutar la aplicación localmente

Necesitas instalar:
* Gitb Bash

Luego, debes **clonar** este repositorio a tu equipo.
```bash
git clone https://github.com/DebbieVejarano/lim-2018-05-bc-core-pm-cipher.git
```

## Instala dependencias
Necesitas instalar:
* Node.js®

Luego, debes usar el comando npm install 
```
npm instal
```

***
# Objetivo
El proyecto responde al reto de crear una aplicación que permita, a un grupo de amigos que planean una fiesta sorpresa, enviar mensajes cifrados y que posean una interfaz para descifrarlos.
![](https://subefotos.com/ver/?eb6a5352fc51d649b95f70c5a48a1bb6o.png#codigos) 

## Definición del producto

**Usuarios:** Estos serían la novia y los amigos que planifican una fiesta de cumpleaños sorpresa.

**Objetivo de los usuarios:** Enviar mensajes encriptados y poder descifrarlos en una interfaz sencilla y que no permita al cumpleañero enterarse de nada.

**Consideraciones para la resolución de problemas de usuarios:** El interfaz permite a los usuarios cifrar y descifrar mensajes cortos y largos, con una cantidad de desplazamientos que ellos puedan escoger. Además, es intuituvo y rápido de aaprender a urilizar. Y finalmente, adaptable a dispositivos móviles.

![](https://subefotos.com/ver/?1c9ae6057d7c2f95ba26068aba7e06eco.png#codigos)

## Interfaz
El interfaz permite que el usuario:

* Indique cuántas posiciones desplazar carácteres a cifrar.

* Insertar el mensaje que desea cifrar.

* Ver el resultado del mensaje cifrado.

* Insertar el mensaje que desea decifrar.

* Ver el resultado del mensaje decifrado.

* Limpiar texto ingresado.

## Detalles adicionales
Encontrarás entre los archivos:

* En la carpeta src, encontrarás un archivo `index.html` el cual contiene la estructura del proyecto. También en esta carpeta se encuentra `style.css` que pertenece a los estilos.
* En la carpeta src, `cipher.js` contiene un objeto y dos métodos que se encargan de cifrar y descifrar. Por otro lado, en `index.js`se escuchan los eventos del DOM que invocan a los métodos de `cipher.js`.

* En la carpeta test, se encuentra `cipher.spec.js`. Aquí se almacena el testing.

* Las fuentes se tomaron de foonts.google.com y los íconos de fontawesome.com


