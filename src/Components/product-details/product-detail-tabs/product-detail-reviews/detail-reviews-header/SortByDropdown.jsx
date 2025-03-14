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

const SortByDropdown = () => {
    const [position, setPosition] = useState("bottom")
    return (
        <div className='mr-[38px]'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="group hover:bg-white select-none flex focus-visible:ring-0">
                        Sort by
                        <IoIosArrowDown className='group-data-[state="open"]:rotate-180 transition-transform' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="top">Top reviews</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="new">New reviews first</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="high">High stars first</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="low">Low stars first</DropdownMenuRadioItem>

                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>)
}

export default SortByDropdown