# **API GraphQL de Clientes**

Este proyecto es una API GraphQL desarrollada con NestJS para gestionar datos de clientes. Proporciona endpoints para realizar consultas y mutaciones sobre clientes, incluyendo datos como nombre, correo electrónico, teléfono, y dirección.

## **Características**
	•	Exposición de datos de clientes a través de consultas GraphQL.
	•	Funcionalidad para obtener todos los clientes o un cliente específico por su ID.
	•	Generación automática de esquemas GraphQL con el enfoque code first.

## **Requisitos**
	•	Docker
	•	Docker Compose
	•	Node.js (opcional, si quieres ejecutar sin Docker)

## **Estructura del proyecto**
```bash
src/
├── app.module.ts         
├── app.service.ts 
├── main.ts               
├── customer/
│   ├── customer.module.ts    
│   ├── customer.service.ts   
│   ├── customer.resolver.ts  
│   ├── customer.dto.ts       
```

## **Construir y ejecutar el contenedor**
```bash
docker-compose build
docker-compose up
```

## **Probar la API**

Una vez el contenedor esté corriendo, accede a http://localhost:3000/graphql para interactuar con la API.

```bash
query {
  getAllCustomers {
    id
    name
    email
    phone
    address
  }
}
```