import { IsDate, IsEnum, IsNumber, IsOptional, IsUUID } from 'class-validator'
export class CreateTransactionsDTO {
    
    @IsUUID()
    public clientId: string 

    @IsEnum(['credit', 'debit'])
    public type: string
    
    @IsNumber()
    public amount: number
    
} 

export class GetTransactionsDTO {
    
    @IsUUID()
    public clientId: string 

    @IsDate()
    @IsOptional()
    public startDate: string

    @IsDate()
    @IsOptional()
    public endDate: string
    
} 
