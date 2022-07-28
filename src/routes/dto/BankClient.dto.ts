import { IsNumber, IsOptional, IsUUID, Length } from 'class-validator'
export class CreateBankClientDTO {
    
    @Length(4, 20)
    public name: string
    
    @IsUUID()
    public sucursalId: string 
    
} 

export class GetBankClientDTO {
    
    @IsUUID()
    public id: string 
    
} 

export class DeleteBankClientDTO {
    
    @IsUUID()
    public id: string 
    
} 

export class UpdateBankClientDTO {
    
    @IsUUID()
    public id: string

    @Length(4, 20)
    @IsOptional()
    public name: string
    
    @IsUUID()
    @IsOptional()
    public sucursalId: string

    @IsNumber()
    @IsOptional()
    public basePrice: number
 
    @IsNumber()
    @IsOptional()
    public insurance: number

    @IsNumber()
    @IsOptional()
    public services: number

    @IsNumber()
    @IsOptional()
    public comissions: number
    
} 