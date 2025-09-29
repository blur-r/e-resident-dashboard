declare module "react-date-range" {
    import * as React from "react";

    export interface Range {
        startDate: Date;
        endDate: Date;
        key: string;
        color?: string;
    }

    export interface DateRangePickerProps {
        ranges: Range[];
        onChange: (ranges: { selection: Range }) => void;
        showSelectionPreview?: boolean;
        moveRangeOnFirstSelection?: boolean;
        months?: number;
        direction?: "vertical" | "horizontal";
        className?: string;
        minDate?: Date;
        maxDate?: Date;
        editableDateInputs?: boolean;
    }

    export class DateRangePicker extends React.Component<DateRangePickerProps> { }
    export class Calendar extends React.Component<Record<string, unknown>> { }
    export class DateRange extends React.Component<Record<string, unknown>> { }
}
