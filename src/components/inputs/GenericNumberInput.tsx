import React, { forwardRef } from 'react';

export interface GenericNumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: number;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    iconSource?: React.ReactNode;
    label?: string;
    hasError?: boolean;
    errorMessages?: Array<string>;
    customLabel?: React.ReactNode;
    plain?: boolean;
    disabled?: boolean;
    errorPosition?: boolean;
    required?: boolean; // Añadido para marcar campos obligatorios
}

const GenericNumberInput = forwardRef<HTMLInputElement, GenericNumberInputProps>(({
    value,
    onChange,
    placeholder,
    iconSource,
    label,
    hasError,
    errorMessages,
    customLabel,
    plain,
    disabled,
    errorPosition = false,
    required = false,
    className,
    name,
    ...props
}, ref) => {
    
    const renderLabel = () => {
        if (customLabel) {
            return customLabel;
        }
        if (label) {
            return (
                <label htmlFor={name ?? ''} className="block font-medium mb-1">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            );
        }
        return null;
    };

    const renderErrorPills = () => {
        if (errorMessages && errorMessages.length > 0) {
            return (
                <div className="mt-1">
                    {errorMessages.map((error, index) => (
                        <ErrorPill key={index}>{error}</ErrorPill>
                    ))}
                </div>
            );
        }
        return null;
    };

    const renderIcon = () => {
        if (hasError) {
            return (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-red-500">⚠️</span>
                </div>
            );
        }

        if (iconSource) {
            return (
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {iconSource}
                </div>
            );
        }

        return null;
    };

    const isInvalid = hasError || (required && !value);

    return (
        <div className="w-full mb-4">
            {(label || customLabel) && (
                <div className="flex justify-between items-center">
                    {renderLabel()}
                    {!errorPosition && renderErrorPills()}
                </div>
            )}
            
            {errorPosition && (
                <div className="mb-1">
                    {renderErrorPills()}
                </div>
            )}
            
            <div className="relative">
                {renderIcon()}
                <input
                    ref={ref}
                    type="number"
                    value={value}
                    name={name}
                    id={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    className={`
                        placeholder:text-beige-600 w-full px-4 py-2 rounded-md bg-beige-50
                        ${isInvalid ? 'bg-red-100 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}
                        ${iconSource ? 'pl-10' : ''}
                        ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
                        ${plain ? 'border border-beige-50' : 'border shadow-md'}
                        ${className || ''}
                    `}
                    {...props}
                />
            </div>
        </div>
    );
});

// Componente ErrorPill simplificado
interface ErrorPillProps {
    children: React.ReactNode;
}

const ErrorPill = ({ children }: ErrorPillProps) => {
    return (
        <div className="text-sm text-red-500 mt-1">{children}</div>
    );
};

export default GenericNumberInput;