export type CreateComponentOptions =
	| CreateDayLightOptions
	| CreateStandardOptions
	| CreateVAlarmOptions
	| CreateVCalendarOptions
	| CreateVEventOptions
	| CreateVFreeBusyOptions
	| CreateVTimezoneOptions;

export type CreateParamOptions =
	| CreateAttachmentParamOptions
	| CreateAttendeeParamOptions
	| CreateCategoryParamOptions
	| CreateCommentParamOptions
	| CreateContactParamOptions
	| CreateDateTimeEndParamOptions
	| CreateDateTimeStartParamOptions
	| CreateDescriptionParamOptions
	| CreateExceptionDateTimesParamOptions
	| CreateFreeBusyParamOptions
	| CreateLocationParamOptions
	| CreateOrganizerParamOptions
	| CreateRecurrenceDateTimesParamOptions
	| CreateRecurrenceIdParamOptions
	| CreateRelatedToParamOptions
	| CreateResourcesParamOptions
	| CreateSummaryParamOptions
	| CreateTriggerParamOptions
	| CreateTZNameParamOptions;

// component option types

export interface CreateVAlarmOptions {
	type: 'VALARM';
	action: string;
	attachments: Array<string | CreateAttachmentParamOptions>;
	attendees: Array<string | CreateAttendeeParamOptions>;
	description: string | CreateDescriptionParamOptions;
	duration: string;
	repeat: string;
	summary: string | CreateSummaryParamOptions;
	trigger: string | CreateTriggerParamOptions;
	uid: string;
}

export interface CreateVCalendarOptions {
	type: 'VCALENDAR';
	calScale?: string;
	extWRCalDesc?: string;
	extWRCalName?: string;
	extWRTimezone?: string;
	method?: string;
	productId?: string;
	version?: string;
}

export interface CreateDayLightOptions {
	type: 'DAYLIGHT';
	comments?: Array<string | CreateCommentParamOptions>;
	dtStart?: string | CreateDateTimeStartParamOptions;
	rDates?: Array<string | CreateRecurrenceDateTimesParamOptions>;
	rrule?: string;
	tzName?: string | CreateTZNameParamOptions;
	tzOffsetFrom?: string;
	tzOffsetTo?: string;
}

export interface CreateStandardOptions {
	type: 'STANDARD';
	comments?: Array<string | CreateCommentParamOptions>;
	dtStart?: string | CreateDateTimeStartParamOptions;
	rDates?: Array<string | CreateRecurrenceDateTimesParamOptions>;
	rrule?: string;
	tzName?: string | CreateTZNameParamOptions;
	tzOffsetFrom?: string;
	tzOffsetTo?: string;
}

export interface CreateVEventOptions {
	type: 'VEVENT';
	attachments?: Array<string | CreateAttachmentParamOptions>;
	attendees?: Array<string | CreateAttendeeParamOptions>;
	categories?: string | CreateCategoryParamOptions;
	class?: string;
	comments?: Array<string | CreateCommentParamOptions>;
	contacts?: Array<string | CreateContactParamOptions>;
	created?: string;
	description?: string | CreateDescriptionParamOptions;
	dtEnd?: string | CreateDateTimeEndParamOptions;
	dtStamp?: string;
	dtStart?: string | CreateDateTimeStartParamOptions;
	duration?: string;
	exDates?: Array<string | CreateExceptionDateTimesParamOptions>;
	geo?: string;
	lastModified?: string;
	location?: string | CreateLocationParamOptions;
	organizer?: string | CreateOrganizerParamOptions;
	priority?: string;
	rDates?: Array<string | CreateRecurrenceDateTimesParamOptions>;
	recurrenceId?: string | CreateRecurrenceIdParamOptions;
	relatedTo?: Array<string | CreateRelatedToParamOptions>;
	resources?: string | CreateResourcesParamOptions;
	rrule?: string;
	sequence?: string;
	status?: string;
	summary?: string | CreateSummaryParamOptions;
	transp?: string;
	uid?: string;
	url?: string;
}

export interface CreateVFreeBusyOptions {
	type: 'VFREEBUSY';
	attendees?: Array<string | CreateAttendeeParamOptions>;
	comments?: Array<string | CreateCommentParamOptions>;
	contact?: string | CreateContactParamOptions;
	dtEnd?: string | CreateDateTimeEndParamOptions;
	dtStamp?: string;
	dtStart?: string | CreateDateTimeStartParamOptions;
	freeBusy?: Array<string | CreateFreeBusyParamOptions>;
	organizer?: string | CreateOrganizerParamOptions;
	uid?: string;
	url?: string;
}

export interface CreateVTimezoneOptions {
	type: 'VTIMEZONE';
	lastModified?: string;
	TZID?: string;
	TZUrl?: string;
}

// property option types

export interface PropertyValue {
	propertyValue: string;
}

export interface CreateAttachmentParamOptions extends PropertyValue {
	Encoding?: string;
	Filename?: string;
	FmtType?: string;
	Value?: string;
}

export interface CreateAttendeeParamOptions extends PropertyValue {
	CN?: string;
	CUType?: string;
	DelegatedFrom?: string;
	DelegatedTo?: string;
	Dir?: string;
	Email?: string;
	Language?: string;
	Member?: string;
	PartStat?: string;
	Role?: string;
	Rsvp?: string;
	SentBy?: string;
}

export interface CreateCategoryParamOptions extends PropertyValue {
	Language?: string;
}

export interface CreateCommentParamOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateContactParamOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateDateTimeEndParamOptions extends PropertyValue {
	TZID?: string;
	Value?: string;
}

export interface CreateDateTimeStartParamOptions extends PropertyValue {
	TZID?: string;
	Value?: string;
}

export interface CreateDescriptionParamOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateExceptionDateTimesParamOptions extends PropertyValue {
	TZID?: string;
	Value?: string;
}

export interface CreateFreeBusyParamOptions extends PropertyValue {
	FBType?: string;
}

export interface CreateLocationParamOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateOrganizerParamOptions extends PropertyValue {
	CN?: string;
	Dir?: string;
	Language?: string;
	SentBy?: string;
}

export interface CreateRecurrenceDateTimesParamOptions extends PropertyValue {
	TZID?: string;
	Value?: string;
}

export interface CreateRecurrenceIdParamOptions extends PropertyValue {
	Range?: string;
	TZID?: string;
	Value?: string;
}

export interface CreateRelatedToParamOptions extends PropertyValue {
	RelType?: string;
}

export interface CreateResourcesParamOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateSummaryParamOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateTriggerParamOptions extends PropertyValue {
	Related?: string;
	Value?: string;
}

export interface CreateTZNameParamOptions extends PropertyValue {
	Language?: string;
}
