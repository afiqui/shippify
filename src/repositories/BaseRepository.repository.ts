import { PrismaClient } from '@prisma/client'

export abstract class BaseRepository extends PrismaClient {
    private readonly prisma: PrismaClient;
    constructor(){
        super();
        this.prisma = new PrismaClient();
    }

}