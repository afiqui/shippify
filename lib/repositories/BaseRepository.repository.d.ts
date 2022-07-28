import { PrismaClient } from '@prisma/client';
export declare abstract class BaseRepository extends PrismaClient {
    private readonly prisma;
    constructor();
}
