import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
  BooleanField,
  BooleanInput,
} from "react-admin";

export const TodoList = (props: any) => (
  <List {...props} filters={[]}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="note" />
      <BooleanField source="marked" label="Marked" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TodoEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" className="fullWidthInput" />
      <TextInput source="note" multiline className="fullWidthInput" />
      <BooleanInput source="marked" />
    </SimpleForm>
  </Edit>
);

export const TodoCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" className="fullWidthInput" />
      <TextInput source="note" multiline className="fullWidthInput" />
    </SimpleForm>
  </Create>
);
