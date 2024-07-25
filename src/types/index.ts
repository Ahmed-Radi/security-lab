export enum FormFieldType {
	INPUT = "input",
	CHECKBOX = "checkbox",
	TEXTAREA = "textarea",
	PHONE_INPUT = "phone_input",
	DATE_PICKER = "date_picker",
	SELECT = "select",
	SKELETON = "skeleton",
}

export interface IProfile {
	id: string;
	name: string;
	created_at: string;
}
