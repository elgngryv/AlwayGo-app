import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Dropdown = ({ data }) => {
    const [position, setPosition] = useState("bottom")
    const { name, btnClasses, options } = data;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`group select-none flex focus-visible:ring-0 ${btnClasses}`}>
                    {name}
                    <IoIosArrowDown className='group-data-[state="open"]:rotate-180 transition-transform' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                   {
                    options.map((option, i) => (
                        <DropdownMenuRadioItem value={i} key={i}>{option}</DropdownMenuRadioItem>
                    ))
                   }
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown