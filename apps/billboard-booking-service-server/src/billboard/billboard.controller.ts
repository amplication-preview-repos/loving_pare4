import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BillboardService } from "./billboard.service";
import { BillboardControllerBase } from "./base/billboard.controller.base";

@swagger.ApiTags("billboards")
@common.Controller("billboards")
export class BillboardController extends BillboardControllerBase {
  constructor(
    protected readonly service: BillboardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
