import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BillboardModuleBase } from "./base/billboard.module.base";
import { BillboardService } from "./billboard.service";
import { BillboardController } from "./billboard.controller";
import { BillboardResolver } from "./billboard.resolver";

@Module({
  imports: [BillboardModuleBase, forwardRef(() => AuthModule)],
  controllers: [BillboardController],
  providers: [BillboardService, BillboardResolver],
  exports: [BillboardService],
})
export class BillboardModule {}
