import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BillboardTitle } from "../billboard/BillboardTitle";
import { ClientTitle } from "../client/ClientTitle";
import { ImageTitle } from "../image/ImageTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="billboard.id"
          reference="Billboard"
          label="billboard"
        >
          <SelectInput optionText={BillboardTitle} />
        </ReferenceInput>
        <ReferenceInput source="client.id" reference="Client" label="client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <ReferenceInput source="image.id" reference="Image" label="image">
          <SelectInput optionText={ImageTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="subscription.id"
          reference="Subscription"
          label="subscription"
        >
          <SelectInput optionText={SubscriptionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
