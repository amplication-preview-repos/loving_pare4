import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabourServiceBase } from "./base/labour.service.base";

@Injectable()
export class LabourService extends LabourServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
