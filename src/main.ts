import { NestFactory } from '@nestjs/core'
import { ZendeskModule } from './zendesk.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(ZendeskModule)

  const config = new DocumentBuilder()
    .setTitle('Technical Test Webhook Zendesk')
    .setDescription('The technical test API description for webhook Zendesk')
    .setVersion('1.0')
    .build()
  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, documentFactory)

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
