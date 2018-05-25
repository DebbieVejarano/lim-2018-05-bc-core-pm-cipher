# Cifrado César - Proyecto de Debbie Vejarano

## Definición del producto

*Usuario: Según el planteamiento del problema estaría dedicado a satisfacer la necesidad de comunicacar mensajes, utilizando un lenguaje cifrado. El producto, en un principio beneficiaría a los amigos cercanos del cliente; sin embargo, ellos podrían hacerle publicidad boca a boca y por redes sociales a otros potenciales clientes.

*Objetivo de los usuarios: Los usuarios, por lo general, buscan una interfaz amigable, sencilla y que les permita realizarle algún tipo de configuración. En este caso, el producto presenta una página con texto que explica como usar el programa.

*Consideraciones para la resolución de problemas de usuarios: El interfaz, que ha sido programado con JavaScrip, permite a los usuarios mandar los mensajes secretos manipulando una gran cantidad de carácteres como signos de puntuación, mayúsculas y más.

### Interfaz
El interfaz permite quue el usuario:

*Indique cuántas posiciones desplazar carácteres para cifrarlos.

*Insertar el mensaje que desea cifrar.

*Ver el resultado del mensaje cifrado.

*Insertar el mensaje que desea decifrar.

*Ver el resultado del mensaje decifrado.

*Limpiar texto ingresado.

### Cómo se logró
Haciendo uso de HTML, CSS y JAVASCRIPT
*HTML: Aquí se debe mencionar la creación del header. main y footer. Estos tres permiten etiquetar las partes principales. También debemos recordar que usamos etiquetas de formularios dentro del main.

*CSS: Aquí se le dio estilos al header, footer, buttoms, inputs, textareas y label.

*JAVASCRIPT: Aquí se hace uso de AddEventListenner para obtener los input de las textareas y también  el valor ingresado por el usuario en un input text para que avance o retroceda el caracter. Además, una función para encriptar el texto. Por otro lado, para descencritar usamos la misma función, restándole el valor como número entero de desplazamientos que colocó el usuario en el input label. Para evitar problemas al momento de desplazar los carácteres usamos solo el String.fromChareCode() y tener acceso a los carácteres del UNICODE.


