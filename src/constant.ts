export const FOLD_LINE_BREAK = new RegExp(/\r?\n\s/, 'g');
export const ICS_LINE_BREAK = new RegExp(/\r?\n/, 'g');
export const TEST_PERIOD_TYPE = new RegExp(/^(\+|-)?P(\d+W)?(\d+D)?(T(\d+H)?(\d+M)?(\d+S)?)?/);

export const KEYWORD = {
	Begin: 'BEGIN',
	End: 'END',
};

export const COMPONENT = {
	Alarm: 'VALARM',
	Calendar: 'VCALENDAR',
	DayLight: 'DAYLIGHT',
	Event: 'VEVENT',
	FreeBusy: 'VFREEBUSY',
	Journal: 'VJOURNAL',
	Standard: 'STANDARD',
	Timezone: 'VTIMEZONE',
	Todo: 'VTODO',
};

export const PROPERTY = {
	Action: 'ACTION',
	Attach: 'ATTACH',
	Attendee: 'ATTENDEE',
	CalScale: 'CALSCALE',
	Categories: 'CATEGORIES',
	Class: 'CLASS',
	Comment: 'COMMENT',
	Completed: 'COMPLETED',
	Contact: 'CONTACT',
	Created: 'CREATED',
	Description: 'DESCRIPTION',
	DTEnd: 'DTEND',
	DTStamp: 'DTSTAMP',
	DTStart: 'DTSTART',
	Due: 'DUE',
	Duration: 'DURATION',
	ExDate: 'EXDATE',
	FreeBusy: 'FREEBUSY',
	Geo: 'GEO',
	LastModified: 'LAST-MODIFIED',
	Location: 'LOCATION',
	Method: 'METHOD',
	Organizer: 'ORGANIZER',
	PercentComplete: 'PERCENT-COMPLETE',
	Priority: 'PRIORITY',
	ProdId: 'PRODID',
	RDate: 'RDATE',
	RecurrenceId: 'RECURRENCE-ID',
	RelatedTo: 'RELATED-TO',
	Repeat: 'REPEAT',
	RequestStatus: 'REQUEST-STATUS',
	Resources: 'RESOURCES',
	RRule: 'RRULE',
	Sequence: 'SEQUENCE',
	Status: 'STATUS',
	Summary: 'SUMMARY',
	Transp: 'TRANSP',
	Trigger: 'TRIGGER',
	TZID: 'TZID',
	TZName: 'TZNAME',
	TZOffsetFrom: 'TZOFFSETFROM',
	TZOffsetTo: 'TZOFFSETTO',
	TZUrl: 'TZURL',
	UID: 'UID',
	Url: 'URL',
	Version: 'VERSION',
	Extended: {
		WR: {
			CalendarDesc: 'X-WR-CALDESC',
			CalendarName: 'X-WR-CALNAME',
			Timezone: 'X-WR-TIMEZONE',
		},
	},
};

export const PARAMETER = {
	AltRep: 'ALTREP',
	CN: 'CN',
	CUType: 'CUTYPE',
	DelegatedFrom: 'DELEGATED-FROM',
	DelegatedTo: 'DELEGATED-TO',
	Dir: 'DIR',
	Encoding: 'ENCODING',
	FBType: 'FBTYPE',
	FmtType: 'FMTTYPE',
	Language: 'LANGUAGE',
	Member: 'MEMBER',
	PartStat: 'PARTSTAT',
	Range: 'RANGE',
	Related: 'RELATED',
	RelType: 'RELTYPE',
	Role: 'ROLE',
	Rsvp: 'RSVP',
	SentBy: 'SENT-BY',
	TZID: 'TZID',
	Value: 'VALUE',
};

export const VALUE_DATA_TYPE = {
	Binary: 'BINARY',
	Boolean: 'BOOLEAN',
	CalAddress: 'CAL-ADDRESS',
	Date: 'DATE',
	DateTime: 'DATE-TIME',
	Duration: 'DURATION',
	Float: 'FLOAT',
	Integer: 'INTEGER',
	Period: 'PERIOD',
	Recur: 'RECUR',
	Text: 'TEXT',
	Time: 'TIME',
	URI: 'URI',
	UTCOffset: 'UTC-OFFSET',
};

export const CALENDAR_USER_TYPE = {
	Group: 'GROUP',
	Individual: 'INDIVIDUAL',
	Resource: 'RESOURCE',
	Room: 'ROOM',
	Unknown: 'UNKNOWN',
};

export const FREE_BUSY_TIME_TYPE = {
	Busy: 'BUSY',
	BusyTentative: 'BUSY-TENTATIVE',
	BusyUnavailable: 'BUSY-UNAVAILABLE',
	Free: 'FREE',
};

export const PARTICIPANT_STATUS_TYPE = {
	Accepted: 'ACCEPTED',
	Completed: 'COMPLETED',
	Declined: 'DECLINED',
	Delegated: 'DELEGATED',
	InProgress: 'IN-PROCESS',
	NeedsAction: 'NEEDS-ACTION',
	Tentative: 'TENTATIVE',
};

export const RELATIONSHIP_TYPE = {
	Child: 'CHILD',
	Parent: 'PARENT',
	Sibling: 'SIBLING',
};

export const PARTICIPATION_ROLE_TYPE = {
	Chair: 'CHAIR',
	NonParticipant: 'NON-PARTICIPANT',
	OptParticipant: 'OPT-PARTICIPANT',
	ReqParticipant: 'REQ-PARTICIPANT',
};

export const ACTION_TYPE = {
	Audio: 'AUDIO',
	Display: 'DISPLAY',
	Email: 'EMAIL',
	Procedure: 'PROCEDURE',
};

export const CLASSIFICATION_TYPE = {
	Confidential: 'CONFIDENTIAL',
	Private: 'PRIVATE',
	Public: 'PUBLIC',
};
