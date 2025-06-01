import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateTestDto {
  @ApiProperty({
    example: 'Pratham',
    type: 'string',
    required: false,
  })
  @IsOptional()
  name: string;
}
