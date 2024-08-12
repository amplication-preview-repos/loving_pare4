import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LabourService } from "./labour.service";
import { LabourControllerBase } from "./base/labour.controller.base";

@swagger.ApiTags("labour")
@common.Controller("labour")
export class LabourController extends LabourControllerBase {
  constructor(
    protected readonly service: LabourService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
