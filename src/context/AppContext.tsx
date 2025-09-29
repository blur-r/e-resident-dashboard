import React, { createContext, useContext, useState } from "react";
import { addDays } from "date-fns";

type DateRange = {
    startDate: Date;
    endDate: Date;
};

type DateRangeContextType = {
    range: DateRange;
    setRange: (range: DateRange) => void;
};

const DateRangeContext = createContext<DateRangeContextType | undefined>(
    undefined
);

export const DateRangeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [range, setRange] = useState<DateRange>({
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
    });

    return (
        <DateRangeContext.Provider value={{ range, setRange }}>
            {children}
        </DateRangeContext.Provider>
    );
};

// Hook to access date range context
export const useDateRange = () => {
    const context = useContext(DateRangeContext);
    if (!context) {
        throw new Error("useDateRange must be used within a DateRangeProvider");
    }
    return context;
};
