import React from 'react';
import clsx from 'clsx';
import './index.css';

interface HamburgerButtonProps {
    isOpen: boolean;
    onClick?: () => void;
    className?: string;
}

export default function HamburgerButton({isOpen, onClick, className}: HamburgerButtonProps) {
    return (
        <button
            onClick={onClick}
            className={clsx('phone-bars', isOpen ? 'active' : '', className)}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}