import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap () {
    const app = await NestFactory.create(AppModule);

    const swaggerConfig = new DocumentBuilder()
        .setTitle('ТЗ для iLink')
        .setDescription('Документация REST API')
        .setVersion('0.0.1')
        .build();

    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup('/docs', app, swaggerDocument);

    await app.listen(process.env.APP_PORT, () => {
        console.info(`Started on ${ process.env.APP_PORT } port.`);
    });
}

bootstrap();
