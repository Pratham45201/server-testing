import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './entities/test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly testRepository: Repository<Test>,
  ) {}

  async create(createTestDto: CreateTestDto) {
    return await this.testRepository.save(
      this.testRepository.create(createTestDto),
    );
  }

  async findAll() {
    return await this.testRepository
      .createQueryBuilder('t')
      .orderBy('id', 'ASC')
      .getMany();
  }
}
