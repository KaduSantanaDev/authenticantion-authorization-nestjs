import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SigninDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    password: string
}