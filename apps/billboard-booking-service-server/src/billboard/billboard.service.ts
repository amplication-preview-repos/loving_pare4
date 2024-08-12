import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BillboardServiceBase } from "./base/billboard.service.base";

@Injectable()
export class BillboardService extends BillboardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
