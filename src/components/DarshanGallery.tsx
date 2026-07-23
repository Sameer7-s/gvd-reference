"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar as CalendarIcon, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const DARSHAN_TYPES = [
  "Shringar Darshan",
  "Mangla Darshan",
  "Festival Darshan"
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

function useOnClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export function DarshanGallery() {
  const [darshanType, setDarshanType] = useState("Shringar Darshan");
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  
  const [date, setDate] = useState(new Date(2026, 6, 23)); // Default to July 23, 2026
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 6, 1));
  const [isDateOpen, setIsDateOpen] = useState(false);

  const typeRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(typeRef, () => setIsTypeOpen(false));
  useOnClickOutside(dateRef, () => setIsDateOpen(false));

  const formatShortDate = (d: Date) => {
    return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    // Previous month days for padding
    const prevMonthDays = getDaysInMonth(year, month - 1);
    
    const days = [];
    
    // Empty cells before start of month (filling with prev month dates)
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-10 w-10 flex items-center justify-center text-sm text-[#C8BED8] font-medium">
          {prevMonthDays - firstDay + i + 1}
        </div>
      );
    }
    
    // Actual days
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = date.getDate() === i && date.getMonth() === month && date.getFullYear() === year;
      days.push(
        <button
          key={`day-${i}`}
          onClick={() => {
            setDate(new Date(year, month, i));
            setIsDateOpen(false);
          }}
          className={`h-10 w-10 flex items-center justify-center text-sm font-medium rounded-full transition-colors ${
            isSelected 
              ? 'bg-[#7252C4] text-white shadow-md' 
              : 'text-[#333] hover:bg-[#EFE6FD] hover:text-[#7252C4]'
          }`}
        >
          {i}
        </button>
      );
    }

    // Padding end of month
    const remainingCells = 42 - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      days.push(
        <div key={`empty-end-${i}`} className="h-10 w-10 flex items-center justify-center text-sm text-[#C8BED8] font-medium">
          {i}
        </div>
      );
    }

    return days;
  };

  const changeMonth = (offset: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
  };
  const changeYear = (offset: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear() + offset, currentMonth.getMonth(), 1));
  };

  return (
    <div className="flex flex-col min-h-[500px]">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 relative z-20">
        
        {/* Darshan Type Dropdown */}
        <div className="relative" ref={typeRef}>
          <button
            onClick={() => setIsTypeOpen(!isTypeOpen)}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-colors ${
              isTypeOpen ? 'bg-[#7252C4] text-white shadow-md' : 'bg-[#7252C4] text-white shadow-sm hover:shadow-md'
            }`}
          >
            <span className="font-medium text-sm">{darshanType}</span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${isTypeOpen ? 'rotate-180' : ''}`} />
          </button>

          {isTypeOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-[#F4F0FE] rounded-xl shadow-lg border border-[#E5E0F5] overflow-hidden py-1">
              {DARSHAN_TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => {
                    setDarshanType(type);
                    setIsTypeOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    darshanType === type 
                      ? 'bg-transparent border border-[#7252C4]/40 mx-2 w-[calc(100%-16px)] rounded-lg text-[#333]' 
                      : 'text-[#555] hover:bg-[#EFE6FD] mx-2 w-[calc(100%-16px)] rounded-lg'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date Picker Dropdown */}
        <div className="relative" ref={dateRef}>
          <button
            onClick={() => setIsDateOpen(!isDateOpen)}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-colors ${
              isDateOpen ? 'bg-[#EAE1FB] text-[#333] shadow-inner' : 'bg-[#F2EBFE] text-[#333] shadow-sm hover:shadow-md'
            }`}
          >
            <CalendarIcon size={18} className="text-[#7252C4]" />
            <span className="font-medium text-sm">{formatShortDate(date)}</span>
          </button>

          {isDateOpen && (
            <div className="absolute top-full left-0 mt-2 w-[320px] bg-[#F4F0FE] rounded-2xl shadow-xl border border-[#E5E0F5] p-5">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  <button onClick={() => changeYear(-1)} className="p-1 rounded-md text-[#8870CA] hover:bg-[#E6DDF8]"><ChevronsLeft size={16} /></button>
                  <button onClick={() => changeMonth(-1)} className="p-1 rounded-md text-[#8870CA] hover:bg-[#E6DDF8]"><ChevronLeft size={16} /></button>
                </div>
                <div className="font-medium text-[#111]">
                  {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </div>
                <div className="flex gap-1">
                  <button onClick={() => changeMonth(1)} className="p-1 rounded-md text-[#8870CA] hover:bg-[#E6DDF8]"><ChevronRight size={16} /></button>
                  <button onClick={() => changeYear(1)} className="p-1 rounded-md text-[#8870CA] hover:bg-[#E6DDF8]"><ChevronsRight size={16} /></button>
                </div>
              </div>

              {/* Days Header */}
              <div className="grid grid-cols-7 mb-2">
                {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(day => (
                  <div key={day} className="text-center text-xs font-semibold text-[#8870CA] mb-2">{day}</div>
                ))}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-7 gap-y-1">
                {renderCalendar()}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-[400px]">
        <h3 className="text-[22px] text-[#4A5568] font-medium mb-3">No darshan images found</h3>
        <p className="text-[#718096]">Try selecting a different date or darshan type</p>
      </div>
    </div>
  );
}
