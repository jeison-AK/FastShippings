# FastShippings

App para empresa de despacho de pedidos
Prueba

Guia para navegar el proyecto

BACKEND
dao/estadosDAO
los archivos DAO.js hacen injects a la base de datos, intentan hacer una conexion a una coleccion en especifico por ejemplo 'status'.

Contienen también funciones que poseen logica relacionada con filtros para modificar la base de datos al ser llamada la funcion en otros archivos js como por ejemplo status.controller

api/estados.controller
los archivos controller son llamados en rutas determinadas para darle acceso a esas urls a datos en la base de datos, ver estados.route.js

Estos archivos contienen logica de filtros que se hacen por la url "queries" estos filtros luego se pasan a funciones DAO para traer o mandar info a la base de datos, pudiendo generar o no una respuesta desde aqui al usuario.
