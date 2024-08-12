import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LabourModuleBase } from "./base/labour.module.base";
import { LabourService } from "./labour.service";
import { LabourController } from "./labour.controller";
import { LabourResolver } from "./labour.resolver";

@Module({
  imports: [LabourModuleBase, forwardRef(() => AuthModule)],
  controllers: [LabourController],
  providers: [LabourService, LabourResolver],
  exports: [LabourService],
})
export class LabourModule {}
