# Cards App
![image](https://github.com/Raicelys21/technical-test-cards/assets/72804397/99217fa4-f230-43bc-962f-122119d7ff66)
![image](https://github.com/Raicelys21/technical-test-cards/assets/72804397/fa71035c-b2ae-47b2-9872-4d2f6659d062)

Este proyecto consta de dos archivos principales: "cards-app" y "express-server".

## Cards App

### Descripción
El archivo "cards-app" es una aplicación creada en React con TypeScript. Esta aplicación está diseñada para gestionar y mostrar tarjetas. Proporciona una interfaz de usuario interactiva para interactuar con datos de tarjetas.

### Instrucciones de Ejecución
Para ejecutar la aplicación, sigue estos pasos:
1. Abre una terminal en el directorio del proyecto "cards-app".
2. Ejecuta el siguiente comando para instalar las dependencias:
    ```bash
    npm install
    ```
3. Después de la instalación, ejecuta el siguiente comando para iniciar la aplicación en modo desarrollo:
    ```bash
    npm run dev
    ```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación a través de tu navegador en [http://localhost:3000](http://localhost:3000).

## Express Server

### Descripción
El archivo "express-server" es una API creada con Express que se conecta a una base de datos MongoDB. Esta API proporciona endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos en relación con las tarjetas.

### Instrucciones de Ejecución
Para ejecutar el servidor, sigue estos pasos:
1. Abre una terminal en el directorio del proyecto "express-server".
2. Ejecuta el siguiente comando para instalar las dependencias:
    ```bash
    npm install
    ```
3. Después de la instalación, ejecuta el siguiente comando para iniciar el servidor:
    ```bash
    npm run backend
    ```

Esto iniciará el servidor Express y estará listo para recibir solicitudes en [http://localhost:5000](http://localhost:5000).

Ahora, tanto la aplicación Cards App como el servidor Express están listos para su uso. Puedes interactuar con la aplicación a través del navegador y la API a través de solicitudes HTTP.
