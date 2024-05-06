import { Controller, Get } from '@nestjs/common';
import { ProductAppService } from './product-app.service';

@Controller('product')
export class ProductAppController {
  constructor(private readonly productAppService: ProductAppService) {}

  @Get()
  getHello(): string {
    return this.productAppService.getHello();
  }
}
