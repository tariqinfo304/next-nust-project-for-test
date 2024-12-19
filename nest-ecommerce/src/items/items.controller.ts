import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Item } from './item.entity';

@Controller('api')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // Secured route to fetch all items
  @UseGuards(JwtAuthGuard)
  @Get('items')
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  // Secured route to fetch a single item by ID
  @UseGuards(JwtAuthGuard)
  @Get('item/:id')
  findOne(@Param('id') id: number): Item {
    return this.itemsService.findOne(id);
  }
}
