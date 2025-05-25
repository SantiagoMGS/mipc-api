import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('API de Gestión de Órdenes de Servicio')
  .setDescription(
    `
    Esta API permite gestionar órdenes de servicio para empresas del sector tecnológico.
    
    ## Características principales:
    - Gestión de órdenes de servicio técnico
    - Control de usuarios y roles (técnicos, administradores, clientes)
    - Seguimiento de estado de órdenes
    - Asignación de técnicos a servicios
    - Historial de servicios realizados
    
    ## Módulos disponibles:
    - **Usuarios**: Gestión de técnicos, administradores y clientes
    - **Órdenes**: Creación y seguimiento de órdenes de servicio
    - **Servicios**: Catálogo de servicios tecnológicos
    - **Reportes**: Estadísticas y reportes de productividad
    
    ## Autenticación:
    La API utiliza Bearer Token JWT para la autenticación y autorización por roles.
  `,
  )
  .setVersion('1.0.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description:
        'Ingresa tu token JWT para acceder a los endpoints protegidos',
      in: 'header',
    },
    'JWT-auth',
  )
  .addServer('http://localhost:3000', 'Servidor de desarrollo')
  .addServer('https://api.ordenes-tech.com', 'Servidor de producción')
  .setContact(
    'Equipo de desarrollo',
    'https://tu-empresa-tech.com',
    'dev@tu-empresa-tech.com',
  )
  .setLicense('MIT', 'https://opensource.org/licenses/MIT')
  .build();
