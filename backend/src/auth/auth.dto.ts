import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength, IsString, Matches } from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'Enter your fullname.' })
  @IsString({ message: 'Fullname must be a string.' })
  fullname: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters.' })
  @Matches(/.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*/, {
    message: 'Password must include at least one special character.',
  })
  password: string;


  @Field()
  @IsNotEmpty({ message: 'Confirm Password is required.' })

  confirmPassword: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be valid.' })
  email: string;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be valid.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;
}