/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SubscriptionService } from "../subscription.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SubscriptionCreateInput } from "./SubscriptionCreateInput";
import { Subscription } from "./Subscription";
import { SubscriptionFindManyArgs } from "./SubscriptionFindManyArgs";
import { SubscriptionWhereUniqueInput } from "./SubscriptionWhereUniqueInput";
import { SubscriptionUpdateInput } from "./SubscriptionUpdateInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SubscriptionControllerBase {
  constructor(
    protected readonly service: SubscriptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Subscription })
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSubscription(
    @common.Body() data: SubscriptionCreateInput
  ): Promise<Subscription> {
    return await this.service.createSubscription({
      data: data,
      select: {
        createdAt: true,
        id: true,
        price: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Subscription] })
  @ApiNestedQuery(SubscriptionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subscriptions(@common.Req() request: Request): Promise<Subscription[]> {
    const args = plainToClass(SubscriptionFindManyArgs, request.query);
    return this.service.subscriptions({
      ...args,
      select: {
        createdAt: true,
        id: true,
        price: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Subscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subscription(
    @common.Param() params: SubscriptionWhereUniqueInput
  ): Promise<Subscription | null> {
    const result = await this.service.subscription({
      where: params,
      select: {
        createdAt: true,
        id: true,
        price: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Subscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSubscription(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() data: SubscriptionUpdateInput
  ): Promise<Subscription | null> {
    try {
      return await this.service.updateSubscription({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          price: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Subscription })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSubscription(
    @common.Param() params: SubscriptionWhereUniqueInput
  ): Promise<Subscription | null> {
    try {
      return await this.service.deleteSubscription({
        where: params,
        select: {
          createdAt: true,
          id: true,
          price: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/bookings")
  @ApiNestedQuery(BookingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async findBookings(
    @common.Req() request: Request,
    @common.Param() params: SubscriptionWhereUniqueInput
  ): Promise<Booking[]> {
    const query = plainToClass(BookingFindManyArgs, request.query);
    const results = await this.service.findBookings(params.id, {
      ...query,
      select: {
        billboard: {
          select: {
            id: true,
          },
        },

        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        image: {
          select: {
            id: true,
          },
        },

        status: true,

        subscription: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  async connectBookings(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        connect: body,
      },
    };
    await this.service.updateSubscription({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  async updateBookings(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        set: body,
      },
    };
    await this.service.updateSubscription({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "update",
    possession: "any",
  })
  async disconnectBookings(
    @common.Param() params: SubscriptionWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        disconnect: body,
      },
    };
    await this.service.updateSubscription({
      where: params,
      data,
      select: { id: true },
    });
  }
}
