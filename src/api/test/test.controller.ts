import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { plainToInstance } from 'class-transformer';
import { Test } from './entities/test.entity';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  async create(@Body() createTestDto: CreateTestDto) {
    const data = await this.testService.create(createTestDto);
    return plainToInstance(Test, data, {
      enableImplicitConversion: true,
      excludeExtraneousValues: true,
    });
  }

  @Get()
  async findAll() {
    const data = await this.testService.findAll();
    return plainToInstance(Test, data, {
      enableImplicitConversion: true,
      excludeExtraneousValues: true,
    });
  }
}
