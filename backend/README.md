# Backend

Rest Api básica hecha con Node JS y Express que se comunica con una base de datos MySQL y expone tres endpoints. La base de datos contiene solamente una tabla donde se guardan usuarios de GitHub, la información de los usuarios que se guarda son su id, el nombre de login, la dirección url de su perfil de git, y su foto.

## ¿Cómo probar el proyecto?

1. Creación de la base de datos
    - Crear una base de datos en MySQL llamada gituserdb<br/>
    ```
    CREATE DATABASE IF NOT EXISTS gituserdb;
    ```
    - Crear una tabla llamada git_user<br/>
    ```
    CREATE TABLE git_user (
      id INT(20) NOT NULL, 
      login VARCHAR(30) NOT NULL, 
      html_url VARCHAR(150) NOT NULL, 
      avatar_url VARCHAR(200) NOT NULL, 
      PRIMARY KEY(id)
    );
    ```
2. Descargar repositorio y sus dependencias
    - Clonar el repositorio
    - Descargar dependencias dentro de la carpeta backend ejecutando el comando `npm install`
3. Configurar la base de datos dentro del proyecto
    - Crear un archivo que se llame .env
    ```
    .
    ├── backend
    │   ├── src
    │   └── .env
    └── frontend
    ```
    - Modificar archivo .env
    ```
    PORT=3000
    DB_HOST=localhost
    DB_PORT=3306
    DB_DATABASE=gituserdb
    DB_USER=<tu user>
    DB_PASSWORD=<tu password>
    ```

## Tecnologías usadas

- React JS
- Ant Design
- MySQL
- Node JS
- Express

## Autor

[Juan Puerta](https://github.com/Juan-Puerta)
    
