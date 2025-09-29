import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDateRange } from "../context/AppContext";


const DateRangeSelector: React.FC = () => {
    const { range, setRange } = useDateRange();

    const [open, setOpen] = useState(false);

    const refOne = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, []);

    const hideOnEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setOpen(false);
        }
    };

    const hideOnClickOutside = (e: MouseEvent) => {
        if (refOne.current && !refOne.current.contains(e.target as Node)) {
            setOpen(false);
        }
    };

    const toggleOpen = (e: React.MouseEvent) => {
        e.stopPropagation();
        setOpen((prev) => !prev);
    };

    type RangeType = {
        startDate: Date | undefined;
        endDate: Date | undefined;
        key: string;
    };

    const handleChange = (ranges: { selection: RangeType }) => {
        const { selection } = ranges;
        setRange({
            startDate: selection.startDate!,
            endDate: selection.endDate!,
        });
    };

    return (
        <div className="relative w-fit" ref={refOne}>

            <div
                onClick={toggleOpen}
                className="flex items-center justify-between gap-1 rounded-lg px-3 py-2 cursor-pointer bg-white shadow-md w-[250px]"
            >
                <i className="fas fa-calendar-days text-gray-500"></i>

                <span className="text-sm text-gray-700 truncate">
                    {`${format(range.startDate, "MMM dd, yyyy")} - ${format(
                        range.endDate,
                        "MMM dd, yyyy"
                    )}`}
                </span>

                <i
                    className={`fas fa-chevron-down text-gray-500 transition-transform ${open ? "rotate-180" : ""
                        }`}
                    onClick={toggleOpen}
                ></i>
            </div>

            <div className="absolute z-50 mt-2">
                {open && (
                    <DateRangePicker
                        onChange={handleChange}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={[
                            {
                                startDate: range.startDate,
                                endDate: range.endDate,
                                key: "selection",
                            },
                        ]}
                        months={1}
                        direction="horizontal"
                        className="calendarElement bg-white rounded-lg shadow-lg"
                    />
                )}
            </div>
        </div>
    )
}

export default DateRangeSelector