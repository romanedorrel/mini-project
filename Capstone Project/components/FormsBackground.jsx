import Image from "next/image";
import React from "react";

export default function FormsBackground() {
    return (
        <div>
            <Image
                className="bg-img"
                src="/balance.jpg"
                alt="Balance"
                fill={true}
        />
        </div>
        
    )
}