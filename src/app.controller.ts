import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getRoot(@Res() res: Response) {
    const logoUrl =
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg';
    res.send(`
      <html>
        <head>
          <style>
            body {
              background-color: black;
              color: white;
              display: flex;
              flex-direction: column; 
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              font-family: sans-serif;
            }
            img {
              width: 200px; 
              height: auto;
              margin-bottom: 20px; 
            }
            .message {
              font-size: 24px; 
            }
          </style>
        </head>
        <body>
          <img src="${logoUrl}" alt="NestJS Logo">
          <div class="message">Puto el que lo lea</div>
        </body>
      </html>
    `);
  }
}
