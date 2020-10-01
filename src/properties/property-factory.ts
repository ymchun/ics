import { PROPERTY } from '~/constant';
import { Constructible } from '~/interfaces/constructible';
import { KeyMap } from '~/interfaces/global';
import { Action } from '~/properties/action';
import { Attachment } from '~/properties/attachment';
import { Attendee } from '~/properties/attendee';
import { CalendarScale } from '~/properties/calendar-scale';
import { Categories } from '~/properties/categories';
import { Class } from '~/properties/class';
import { Comment } from '~/properties/comment';
import { Contact } from '~/properties/contact';
import { Created } from '~/properties/created';
import { DateTimeCompleted } from '~/properties/date-time-completed';
import { DateTimeDue } from '~/properties/date-time-due';
import { DateTimeEnd } from '~/properties/date-time-end';
import { DateTimeStamp } from '~/properties/date-time-stamp';
import { DateTimeStart } from '~/properties/date-time-start';
import { Description } from '~/properties/description';
import { Duration } from '~/properties/duration';
import { ExceptionDateTimes } from '~/properties/exception-date-times';
import { ExtWRCalDesc } from '~/properties/ext-wr-cal-desc';
import { ExtWRCalName } from '~/properties/ext-wr-cal-name';
import { ExtWRTimezone } from '~/properties/ext-wr-timezone';
import { FreeBusy } from '~/properties/free-busy';
import { GeographicPosition } from '~/properties/geographic-position';
import { LastModified } from '~/properties/last-modified';
import { Location } from '~/properties/location';
import { Method } from '~/properties/method';
import { Organizer } from '~/properties/organizer';
import { PercentComplete } from '~/properties/percent-complete';
import { Priority } from '~/properties/priority';
import { ProductId } from '~/properties/product-id';
import { Property } from '~/properties/property';
import { RecurrenceDateTimes } from '~/properties/recurrence-date-times';
import { RecurrenceId } from '~/properties/recurrence-id';
import { RelatedTo } from '~/properties/related-to';
import { Repeat } from '~/properties/repeat';
import { Resources } from '~/properties/resources';
import { RRule } from '~/properties/rrule';
import { Sequence } from '~/properties/sequence';
import { Status } from '~/properties/status';
import { Summary } from '~/properties/summary';
import { TimeTransparency } from '~/properties/time-transparency';
import { Trigger } from '~/properties/trigger';
import { TZID } from '~/properties/tz-id';
import { TZName } from '~/properties/tz-name';
import { TZOffsetFrom } from '~/properties/tz-offset-from';
import { TZOffsetTo } from '~/properties/tz-offset-to';
import { TZUrl } from '~/properties/tz-url';
import { UID } from '~/properties/uid';
import { Url } from '~/properties/url';
import { Version } from '~/properties/version';

export class PropertyFactory {

	// the default set of properties
	public propertyMap: KeyMap<Constructible<Property>> = {
		[PROPERTY.Action]: Action,
		[PROPERTY.Attach]: Attachment,
		[PROPERTY.Attendee]: Attendee,
		[PROPERTY.CalScale]: CalendarScale,
		[PROPERTY.Categories]: Categories,
		[PROPERTY.Class]: Class,
		[PROPERTY.Comment]: Comment,
		[PROPERTY.Completed]: DateTimeCompleted,
		[PROPERTY.Contact]: Contact,
		[PROPERTY.Created]: Created,
		[PROPERTY.Description]: Description,
		[PROPERTY.DTEnd]: DateTimeEnd,
		[PROPERTY.DTStamp]: DateTimeStamp,
		[PROPERTY.DTStart]: DateTimeStart,
		[PROPERTY.Due]: DateTimeDue,
		[PROPERTY.Duration]: Duration,
		[PROPERTY.ExDate]: ExceptionDateTimes,
		[PROPERTY.FreeBusy]: FreeBusy,
		[PROPERTY.Geo]: GeographicPosition,
		[PROPERTY.LastModified]: LastModified,
		[PROPERTY.Location]: Location,
		[PROPERTY.Method]: Method,
		[PROPERTY.Organizer]: Organizer,
		[PROPERTY.PercentComplete]: PercentComplete,
		[PROPERTY.Priority]: Priority,
		[PROPERTY.ProdId]: ProductId,
		[PROPERTY.RDate]: RecurrenceDateTimes,
		[PROPERTY.RecurrenceId]: RecurrenceId,
		[PROPERTY.RelatedTo]: RelatedTo,
		[PROPERTY.Repeat]: Repeat,
		[PROPERTY.Resources]: Resources,
		[PROPERTY.RRule]: RRule,
		[PROPERTY.Sequence]: Sequence,
		[PROPERTY.Status]: Status,
		[PROPERTY.Summary]: Summary,
		[PROPERTY.Transp]: TimeTransparency,
		[PROPERTY.Trigger]: Trigger,
		[PROPERTY.TZID]: TZID,
		[PROPERTY.TZName]: TZName,
		[PROPERTY.TZOffsetFrom]: TZOffsetFrom,
		[PROPERTY.TZOffsetTo]: TZOffsetTo,
		[PROPERTY.TZUrl]: TZUrl,
		[PROPERTY.UID]: UID,
		[PROPERTY.Url]: Url,
		[PROPERTY.Version]: Version,
		[PROPERTY.Extended.WR.CalendarDesc]: ExtWRCalDesc,
		[PROPERTY.Extended.WR.CalendarName]: ExtWRCalName,
		[PROPERTY.Extended.WR.Timezone]: ExtWRTimezone,
	};

	public getProperty(type: string): Property | undefined {
		if (this.propertyMap[type]) {
			return new this.propertyMap[type]();
		}
		console.warn(`Unknown property type: '${type}'`);
	}

}
