export type CreateComponentOptions =
	| CreateDayLightOptions
	| CreateStandardOptions
	| CreateVAlarmOptions
	| CreateVCalendarOptions
	| CreateVEventOptions
	| CreateVFreeBusyOptions
	| CreateVTimezoneOptions;

// component option types

export interface CreateVAlarmOptions {
	type: 'VALARM';
	action: string;
	description: string | CreateDescriptionParameterOptions;
	duration: string;
	repeat: string;
	summary: string | CreateSummaryParameterOptions;
	trigger: string | CreateTriggerParameterOptions;
	uid: string;
	attachments: Array<string | CreateAttachmentParameterOptions>;
	attendees: Array<string | CreateAttendeeParameterOptions>;
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
	dtStart?: string | CreateDateTimeStartParameterOptions;
	rrule?: string;
	tzName?: string | CreateTZNameParameterOptions;
	tzOffsetFrom?: string;
	tzOffsetTo?: string;
	comments?: Array<string | CreateCommentParameterOptions>;
	rDates?: Array<string | CreateRecurrenceDateTimesParameterOptions>;
}

export interface CreateStandardOptions {
	type: 'STANDARD';
	dtStart?: string | CreateDateTimeStartParameterOptions;
	rrule?: string;
	tzName?: string | CreateTZNameParameterOptions;
	tzOffsetFrom?: string;
	tzOffsetTo?: string;
	comments?: Array<string | CreateCommentParameterOptions>;
	rDates?: Array<string | CreateRecurrenceDateTimesParameterOptions>;
}

export interface CreateVEventOptions {
	type: 'VEVENT';
	categories?: string | CreateCategoryParameterOptions;
	class?: string;
	created?: string;
	description?: string | CreateDescriptionParameterOptions;
	dtEnd?: string | CreateDateTimeEndParameterOptions;
	dtStamp?: string;
	dtStart?: string | CreateDateTimeStartParameterOptions;
	duration?: string;
	geo?: string;
	lastModified?: string;
	location?: string | CreateLocationParameterOptions;
	organizer?: string | CreateOrganizerParameterOptions;
	priority?: string;
	recurrenceId?: string | CreateRecurrenceIdParameterOptions;
	resources?: string | CreateResourcesParameterOptions;
	rrule?: string;
	sequence?: string;
	status?: string;
	summary?: string | CreateSummaryParameterOptions;
	transp?: string;
	uid?: string;
	url?: string;
	attachments?: Array<string | CreateAttachmentParameterOptions>;
	attendees?: Array<string | CreateAttendeeParameterOptions>;
	comments?: Array<string | CreateCommentParameterOptions>;
	contacts?: Array<string | CreateContactParameterOptions>;
	exDates?: Array<string | CreateExceptionDateTimesParameterOptions>;
	rDates?: Array<string | CreateRecurrenceDateTimesParameterOptions>;
	relatedTo?: Array<string | CreateRelatedToParameterOptions>;
}

export interface CreateVFreeBusyOptions {
	type: 'VFREEBUSY';
	contact?: string | CreateContactParameterOptions;
	dtEnd?: string | CreateDateTimeEndParameterOptions;
	dtStamp?: string;
	dtStart?: string | CreateDateTimeStartParameterOptions;
	organizer?: string | CreateOrganizerParameterOptions;
	uid?: string;
	url?: string;
	attendees?: Array<string | CreateAttendeeParameterOptions>;
	comments?: Array<string | CreateCommentParameterOptions>;
	freeBusy?: Array<string | CreateFreeBusyParameterOptions>;
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

export interface CreateAttachmentParameterOptions extends PropertyValue {
	Encoding?: string;
	Filename?: string;
	FmtType?: string;
	Value?: string;
}

export interface CreateAttendeeParameterOptions extends PropertyValue {
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

export interface CreateCategoryParameterOptions extends PropertyValue {
	Language?: string;
}

export interface CreateCommentParameterOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateContactParameterOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateDateTimeEndParameterOptions extends PropertyValue {
	TZID?: string;
	Value?: string;
}

export interface CreateDateTimeStartParameterOptions extends PropertyValue {
	TZID?: string;
	Value?: string;
}

export interface CreateDescriptionParameterOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateExceptionDateTimesParameterOptions extends PropertyValue {
	TZID?: string;
	Value?: string;
}

export interface CreateFreeBusyParameterOptions extends PropertyValue {
	FBType?: string;
}

export interface CreateLocationParameterOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateOrganizerParameterOptions extends PropertyValue {
	CN?: string;
	Dir?: string;
	Language?: string;
	SentBy?: string;
}

export interface CreateRecurrenceDateTimesParameterOptions extends PropertyValue {
	TZID?: string;
	Value?: string;
}

export interface CreateRecurrenceIdParameterOptions extends PropertyValue {
	Range?: string;
	TZID?: string;
	Value?: string;
}

export interface CreateRelatedToParameterOptions extends PropertyValue {
	RelType?: string;
}

export interface CreateResourcesParameterOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateSummaryParameterOptions extends PropertyValue {
	AltRep?: string;
	Language?: string;
}

export interface CreateTriggerParameterOptions extends PropertyValue {
	Related?: string;
	Value?: string;
}

export interface CreateTZNameParameterOptions extends PropertyValue {
	Language?: string;
}
