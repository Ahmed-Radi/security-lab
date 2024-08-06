import { Control } from "react-hook-form";

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phone_input",
  DATE_PICKER = "date_picker",
  SELECT = "select",
  SKELETON = "skeleton",
}

declare type Profile = {
  id: string;
  name: string;
  created_at: string;
};

declare type CustomFormFieldProps = {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
  inputType: string;
};

declare type RenderFieldProps = {
  field: any;
  props: ICustomFormField;
};

/**Navbar */
declare type NavbarLink = {
  name: string;
  href: string
}
declare type NavbarLinks = {
  name: string;
  href: string;
  subLinks?: NavbarLink[];
};
type NavbarListProps = {
  links: NavbarLinks[];
  sidebar?: boolean;
};
type NavbarListItemProps = {
  name: string;
  href: string;
  subLinks?: NavbarLink[] | undefined;
}
declare type DropdownListProps = {
  listItems: { href: string; name: string }[];
  isOpenDropdown: boolean;
  sidebar?: boolean;
};

/**Home */
declare type HomeCardSubitem = {
  subtitle: string;
  content: string;
  button: {
    label: string;
    link: string;
  }
};
declare type HomeCardData = {
  title: string;
  data: HomeCardSubitem[]
}