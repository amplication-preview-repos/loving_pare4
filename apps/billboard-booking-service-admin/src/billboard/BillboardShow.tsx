import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BILLBOARD_TITLE_FIELD } from "./BillboardTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { IMAGE_TITLE_FIELD } from "../image/ImageTitle";
import { SUBSCRIPTION_TITLE_FIELD } from "../subscription/SubscriptionTitle";

export const BillboardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Size" source="size" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="billboardId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="billboard"
              source="billboard.id"
              reference="Billboard"
            >
              <TextField source={BILLBOARD_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="image" source="image.id" reference="Image">
              <TextField source={IMAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <ReferenceField
              label="subscription"
              source="subscription.id"
              reference="Subscription"
            >
              <TextField source={SUBSCRIPTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
