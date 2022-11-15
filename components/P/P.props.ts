import React, {HTMLAttributes} from "react";

export interface PProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    fontSize?: 's' | 'm' | 'l'
    children: string
}