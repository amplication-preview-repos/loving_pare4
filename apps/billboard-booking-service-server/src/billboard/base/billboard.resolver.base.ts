/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Billboard } from "./Billboard";
import { BillboardCountArgs } from "./BillboardCountArgs";
import { BillboardFindManyArgs } from "./BillboardFindManyArgs";
import { BillboardFindUniqueArgs } from "./BillboardFindUniqueArgs";
import { CreateBillboardArgs } from "./CreateBillboardArgs";
import { UpdateBillboardArgs } from "./UpdateBillboardArgs";
import { DeleteBillboardArgs } from "./DeleteBillboardArgs";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BillboardService } from "../billboard.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Billboard)
export class BillboardResolverBase {
  constructor(
    protected readonly service: BillboardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Billboard",
    action: "read",
    possession: "any",
  })
  async _billboardsMeta(
    @graphql.Args() args: BillboardCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Billboard])
  @nestAccessControl.UseRoles({
    resource: "Billboard",
    action: "read",
    possession: "any",
  })
  async billboards(
    @graphql.Args() args: BillboardFindManyArgs
  ): Promise<Billboard[]> {
    return this.service.billboards(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Billboard, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Billboard",
    action: "read",
    possession: "own",
  })
  async billboard(
    @graphql.Args() args: BillboardFindUniqueArgs
  ): Promise<Billboard | null> {
    const result = await this.service.billboard(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Billboard)
  @nestAccessControl.UseRoles({
    resource: "Billboard",
    action: "create",
    possession: "any",
  })
  async createBillboard(
    @graphql.Args() args: CreateBillboardArgs
  ): Promise<Billboard> {
    return await this.service.createBillboard({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Billboard)
  @nestAccessControl.UseRoles({
    resource: "Billboard",
    action: "update",
    possession: "any",
  })
  async updateBillboard(
    @graphql.Args() args: UpdateBillboardArgs
  ): Promise<Billboard | null> {
    try {
      return await this.service.updateBillboard({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Billboard)
  @nestAccessControl.UseRoles({
    resource: "Billboard",
    action: "delete",
    possession: "any",
  })
  async deleteBillboard(
    @graphql.Args() args: DeleteBillboardArgs
  ): Promise<Billboard | null> {
    try {
      return await this.service.deleteBillboard(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Booking], { name: "bookings" })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async findBookings(
    @graphql.Parent() parent: Billboard,
    @graphql.Args() args: BookingFindManyArgs
  ): Promise<Booking[]> {
    const results = await this.service.findBookings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
