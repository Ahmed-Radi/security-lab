import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { E164Number } from "libphonenumber-js";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import ReactDatePicker from "react-datepicker";
import { CustomFormFieldProps, RenderFieldProps } from "@/types";

export enum FormFieldType {
	INPUT = "input",
	CHECKBOX = "checkbox",
	TEXTAREA = "textarea",
	PHONE_INPUT = "phone_input",
	DATE_PICKER = "date_picker",
	SELECT = "select",
	SKELETON = "skeleton",
}

const RenderField = ({ field, props }: RenderFieldProps) => {
	const {
		control,
		fieldType,
		name,
		label,
		placeholder,
		iconSrc,
		iconAlt,
		disabled,
		dateFormat,
		showTimeSelect,
		children,
		renderSkeleton,
    inputType,
	} = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
            name={name}
              placeholder={placeholder}
              type={inputType}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            className="shad-textArea"
            disabled={disabled}
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="US"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={name} className="checkbox-label">
              {label}
            </label>
          </div>
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          <Image
            src="/assets/icons/calendar.svg"
            height={24}
            width={24}
            alt="user"
            className="ml-2"
          />
          <FormControl>
            <ReactDatePicker
              showTimeSelect={showTimeSelect ?? false}
              selected={field.value}
              onChange={(date: Date | null) => field.onChange(date)}
              timeInputLabel="Time:"
              dateFormat={dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="shad-select-trigger">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content">
              {children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const CustomFormField = (props: CustomFormFieldProps) => {
	const {
		control,
		fieldType,
		name,
		label,
		placeholder,
		iconSrc,
		iconAlt,
		disabled,
		dateFormat,
		showTimeSelect,
		children,
		renderSkeleton,
    inputType,
	} = props;

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					{fieldType !== FormFieldType.CHECKBOX && label && (
						<FormLabel>{label}</FormLabel>
					)}
					<RenderField field={field} props={props} />
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CustomFormField;
