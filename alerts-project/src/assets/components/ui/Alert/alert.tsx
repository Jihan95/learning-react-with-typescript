import "./index.scss";
import { CircleX } from 'lucide-react';
import type { ReactNode } from "react";
import type { AlertTypes } from "../../../../types";


interface IProps {
    type: AlertTypes,
    icon: ReactNode,
    title: string,
    description?: string,
    children ?: ReactNode
}

const Alert = ({type, icon, title, description, children}: IProps) => {
    return (
        <div className={type}>
            <div className="alert-header">
                <div className="title">
                    <span>
                        {icon}
                    </span>
                    <h4>{title}</h4>
                </div>
                    <CircleX className="close" size={20}/>
            </div>

            {children? children: <p>{description}</p>}
        </div>
    );
}

export default Alert;
