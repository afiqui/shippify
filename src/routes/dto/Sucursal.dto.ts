import { IsUUID, Length } from 'class-validator'
export class CreateSucursalDTO {
    
    @Length(4, 20)
    public name: string
    
} 

export class UpdateSucursalDTO {
    
    @IsUUID()
    public id: string

    @Length(4, 20)
    public name: string
    
} 

export class DeleteSucursalDTO {
    
    @IsUUID()
    public id: string
    
} 