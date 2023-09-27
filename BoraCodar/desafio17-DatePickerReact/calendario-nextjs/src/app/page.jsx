// import { useClient } from "next/data-client";

"use client";

import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function Home() {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date(11)
    });

    const handleValueChange = newValue => {
        console.log("new value: ", newValue);
        setValue(newValue);
    };
    return (
        <div>
            <Datepicker
                primaryColor={"fuchsia"}
                value={value}
                onChange={handleValueChange}
                showShortcuts={true}
                open={true}
            />
        </div>
    );
}
