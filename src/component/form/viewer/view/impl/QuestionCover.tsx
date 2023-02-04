import React from "react";


interface QuestionCoverProps {
    children: React.ReactNode
}

export default function QuestionCover({children}: QuestionCoverProps) {
    return (
        <div className="bg-primary-subtle shadow m-4 p-4">
            {children}
        </div>
    )
}